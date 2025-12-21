<template>
  <div class="giscus-wrapper">
    <div class="giscus" ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const giscusContainer = ref(null)
let themeObserver = null
let mediaQueryListener = null
let storageListener = null
let giscusScript = null
let giscusMessageListener = null
let giscusObserver = null
let currentThemeValue = 'light'
let isRefreshing = false
let refreshTimeout = null

// Функція для визначення поточної теми VitePress
const getCurrentTheme = () => {
  const html = document.documentElement
  
  // VitePress використовує клас 'dark' на html елементі
  const hasDarkClass = html.classList.contains('dark')
  
  // Також перевіряємо атрибут data-theme
  const dataTheme = html.getAttribute('data-theme')
  
  // Перевіряємо через CSS змінну color-scheme
  const computedStyle = window.getComputedStyle(html)
  const colorScheme = computedStyle.colorScheme || html.style.colorScheme
  
  // Визначаємо тему
  const isDark = hasDarkClass || 
                 dataTheme === 'dark' || 
                 colorScheme === 'dark' ||
                 (html.getAttribute('class')?.includes('dark'))
  
  return isDark ? 'dark' : 'light'
}

// Функція для оновлення теми Giscus
const updateGiscusTheme = (forceReload = false) => {
  const newTheme = getCurrentTheme()
  
  // Якщо тема не змінилася і не потрібне примусове перезавантаження, виходимо
  if (!forceReload && newTheme === currentThemeValue) {
    return
  }
  
  currentThemeValue = newTheme
  
  // Оновлюємо data-theme атрибут на скрипті
  const script = document.querySelector('script[src*="giscus"]')
  if (script) {
    script.setAttribute('data-theme', newTheme)
  }
  
  // Оновлюємо через postMessage, якщо iframe вже завантажено
  const iframe = giscusContainer.value?.querySelector('iframe.giscus-frame')
  if (iframe?.contentWindow) {
    try {
      // Відправляємо повідомлення для оновлення теми
      iframe.contentWindow.postMessage(
        { 
          giscus: { 
            setConfig: { 
              theme: newTheme 
            } 
          } 
        },
        'https://giscus.app'
      )
    } catch (e) {
      console.warn('Не вдалося оновити тему Giscus через postMessage:', e)
      // Якщо postMessage не працює, перезавантажуємо Giscus
      if (forceReload) {
        loadGiscus()
      }
    }
  } else if (forceReload) {
    // Якщо iframe ще не завантажено, перезавантажуємо
    loadGiscus()
  }
}

const loadGiscus = () => {
  if (!giscusContainer.value) return

  // Очищаємо попередні коментарі
  if (giscusScript && giscusScript.parentNode) {
    giscusScript.parentNode.removeChild(giscusScript)
  }
  
  const existingScript = document.querySelector('script[src*="giscus"]')
  if (existingScript && existingScript !== giscusScript) {
    existingScript.remove()
  }
  
  // Видаляємо попередні iframe
  const existingIframe = giscusContainer.value.querySelector('iframe')
  if (existingIframe) {
    existingIframe.remove()
  }

  // Визначаємо поточну тему
  const theme = getCurrentTheme()
  currentThemeValue = theme

  // Створюємо новий скрипт Giscus
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'DTLogix/docs')
  script.setAttribute('data-repo-id', 'R_kgDOQmBCKA')
  script.setAttribute('data-category', 'Ideas')
  script.setAttribute('data-category-id', 'DIC_kwDOQmBCKM4C0ESM')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '1')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', theme)
  script.setAttribute('data-lang', 'uk')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  giscusScript = script
  giscusContainer.value.appendChild(script)

  // Очікуємо завантаження Giscus та оновлюємо тему
  script.onload = () => {
    // Чекаємо, поки iframe завантажиться
    const checkIframe = setInterval(() => {
      const iframe = giscusContainer.value?.querySelector('iframe.giscus-frame')
      if (iframe) {
        clearInterval(checkIframe)
        // Оновлюємо тему після завантаження
        setTimeout(() => {
          updateGiscusTheme(true)
        }, 300)
        // Налаштовуємо слухач подій після завантаження iframe
        setupGiscusMessageListener()
      }
    }, 100)
    
    // Таймаут на випадок, якщо iframe не завантажиться
    setTimeout(() => {
      clearInterval(checkIframe)
      setupGiscusMessageListener()
    }, 3000)
  }
}

// Налаштовуємо слухач подій від Giscus для автоматичного оновлення коментарів
const setupGiscusMessageListener = () => {
  // Видаляємо попередній слухач, якщо він існує
  if (giscusMessageListener) {
    window.removeEventListener('message', giscusMessageListener)
  }
  
  // Видаляємо попередній обсервер, якщо він існує
  if (giscusObserver) {
    giscusObserver.disconnect()
    giscusObserver = null
  }
  
  giscusMessageListener = (event) => {
    // Перевіряємо, що повідомлення від Giscus
    if (event.origin !== 'https://giscus.app') {
      return
    }
    
    // Обробляємо події від Giscus
    if (event.data && event.data.giscus) {
      const giscusData = event.data.giscus
      
      // Оновлюємо коментарі тільки при додаванні нового коментаря
      // Не реагуємо на resize та інші технічні події
      if (giscusData.comment && !isRefreshing) {
        // Використовуємо debounce для уникнення зайвих оновлень
        if (refreshTimeout) {
          clearTimeout(refreshTimeout)
        }
        refreshTimeout = setTimeout(() => {
          refreshGiscusIframe()
        }, 1000) // Затримка 1 секунда для уникнення зайвих оновлень
      }
    }
  }
  
  window.addEventListener('message', giscusMessageListener)
}

// Функція для оновлення iframe Giscus (тільки через postMessage, без зміни src)
const refreshGiscusIframe = () => {
  // Перевіряємо, чи не виконується вже оновлення
  if (isRefreshing) {
    return
  }
  
  const iframe = giscusContainer.value?.querySelector('iframe.giscus-frame')
  if (!iframe || !iframe.contentWindow) {
    return
  }
  
  isRefreshing = true
  
  try {
    // Запитуємо оновлення через postMessage (Giscus автоматично оновить коментарі)
    iframe.contentWindow.postMessage(
      { 
        giscus: { 
          resize: true
        } 
      },
      'https://giscus.app'
    )
  } catch (e) {
    console.warn('Не вдалося оновити Giscus iframe:', e)
  } finally {
    // Скидаємо флаг через невелику затримку
    setTimeout(() => {
      isRefreshing = false
    }, 500)
  }
}

// Відстежуємо зміни теми
const setupThemeObserver = () => {
  // Видаляємо попередній обсервер, якщо він існує
  if (themeObserver) {
    themeObserver.disconnect()
  }
  
  if (mediaQueryListener) {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', mediaQueryListener)
  }

  // Спостерігаємо за змінами класу на html елементі (VitePress додає/видаляє клас 'dark')
  themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        // Затримка для того, щоб VitePress встиг оновити всі атрибути
        setTimeout(() => {
          updateGiscusTheme(true) // Примусове перезавантаження при зміні теми
        }, 150)
      }
    })
  })

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })

  // Відстежуємо зміни через media query
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQueryListener = () => {
    setTimeout(() => {
      updateGiscusTheme(true)
    }, 150)
  }
  mediaQuery.addEventListener('change', mediaQueryListener)
  
  // Відстежуємо зміни в localStorage (VitePress зберігає вибір теми там)
  storageListener = (e) => {
    if (e.key === 'vitepress-theme-appearance' || 
        e.key === 'vitepress-theme' ||
        e.key?.includes('theme') ||
        e.key?.includes('appearance')) {
      setTimeout(() => {
        updateGiscusTheme(true)
      }, 200)
    }
  }
  window.addEventListener('storage', storageListener)
  
  // Перехоплюємо зміни localStorage в тому ж вікні
  const originalSetItem = localStorage.setItem.bind(localStorage)
  localStorage.setItem = function(key, value) {
    originalSetItem(key, value)
    if (key === 'vitepress-theme-appearance' || 
        key === 'vitepress-theme' ||
        key?.includes('theme') ||
        key?.includes('appearance')) {
      setTimeout(() => {
        updateGiscusTheme(true)
      }, 200)
    }
  }
}

onMounted(() => {
  loadGiscus()
  setupThemeObserver()
})

onUnmounted(() => {
  if (themeObserver) {
    themeObserver.disconnect()
    themeObserver = null
  }
  
  if (mediaQueryListener) {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', mediaQueryListener)
    mediaQueryListener = null
  }
  
  if (storageListener) {
    window.removeEventListener('storage', storageListener)
    storageListener = null
  }
  
  if (giscusMessageListener) {
    window.removeEventListener('message', giscusMessageListener)
    giscusMessageListener = null
  }
  
  if (giscusObserver) {
    giscusObserver.disconnect()
    giscusObserver = null
  }
  
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
    refreshTimeout = null
  }
})

watch(() => route.path, () => {
  // Затримка для оновлення після зміни маршруту
  setTimeout(() => {
    loadGiscus()
    // Не створюємо новий обсервер, він вже працює
  }, 100)
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus {
  width: 100%;
}
</style>

