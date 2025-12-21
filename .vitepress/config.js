import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: 'DTLogix Docs',
  description: 'Внутрішня документація команди DTLogix',
  lang: 'uk',
  cleanUrls: true,
  
  appearance: true, // Дозволяє перемикати тему
  
  themeConfig: {
    logo: '/logo.svg',
    
    // Покращена навігація
    outline: {
      level: [2, 3],
      label: 'На цій сторінці'
    },
    
    // Покращений пошук
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Пошук',
            buttonAriaLabel: 'Пошук документації'
          },
          modal: {
            noResultsText: 'Нічого не знайдено',
            resetButtonTitle: 'Скинути',
            footer: {
              selectText: 'вибрати',
              navigateText: 'навігувати',
              closeText: 'закрити'
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Бізнес-модель', link: '/business-model/' },
      { text: 'Продукт', link: '/product/' },
      { text: 'Стратегія', link: '/strategy/' },
      { text: 'Дослідження', link: '/research/' },
      { text: 'Процеси', link: '/processes/' },
      { text: 'Маркетинг', link: '/marketing/' },
      { text: 'Brand Kit', link: '/brand-kit/' }
    ],

    sidebar: {
      '/business-model/': [
        {
          text: 'Бізнес-модель',
          items: [
            { text: 'Огляд', link: '/business-model/' },
            { text: 'Проблеми', link: '/business-model/1-problems' },
            { text: 'Цільові сегменти', link: '/business-model/2-customers-segments' },
            { text: 'UVP', link: '/business-model/3-uvp' },
            { text: 'Рішення', link: '/business-model/4-solutions' },
            { text: 'Канали', link: '/business-model/5-channels' },
            { text: 'Джерела доходів', link: '/business-model/6-revenue-streams' },
            { text: 'Структура витрат', link: '/business-model/7-cost-structure' },
            { text: 'Ключові метрики', link: '/business-model/8-key-metrics' },
            { text: 'Нечесна перевага', link: '/business-model/9-unfair-advantage' },
            { text: 'Глосарій', link: '/business-model/glossary' },
            { text: 'Unit Economics', link: '/business-model/unit-economics' },
            { text: 'Калькулятор втрат', link: '/business-model/loss-calculator' }
          ]
        }
      ],
      '/product/': [
        {
          text: 'Продукт',
          items: [
            { text: 'Огляд', link: '/product/' },
            { text: 'Архітектура', link: '/product/architecture' },
            { text: 'Модулі', link: '/product/modules' },
            { text: 'Сценарії використання', link: '/product/use-cases' },
            { text: 'Інтеграції', link: '/product/integrations' },
            { text: 'Технологічний стек', link: '/product/tech-stack' },
            { text: 'Огляд системи', link: '/product/overview' }
          ]
        }
      ],
      '/strategy/': [
        {
          text: 'Стратегія',
          items: [
            { text: 'Огляд', link: '/strategy/' },
            { text: 'Бачення', link: '/strategy/vision' },
            { text: 'Цілі', link: '/strategy/goals' },
            { text: 'Дорожня карта', link: '/strategy/roadmap' },
            { text: 'MVP', link: '/strategy/mvp' }
          ]
        }
      ],
      '/research/': [
        {
          text: 'Дослідження',
          items: [
            { text: 'Огляд', link: '/research/' },
            { text: 'Персони', link: '/research/personas' },
            { text: 'Інтерв\'ю', link: '/research/interviews' },
            { text: 'Ринок', link: '/research/market' },
            { text: 'Конкуренти', link: '/research/competitors' },
            { text: 'Лог валідації', link: '/research/validation-log' }
          ]
        }
      ],
      '/processes/': [
        {
          text: 'Процеси',
          items: [
            { text: 'Огляд', link: '/processes/' },
            { text: 'Розробка', link: '/processes/development' },
            { text: 'Планування', link: '/processes/planning' },
            { text: 'Code Review', link: '/processes/code-review' },
            { text: 'QA процеси', link: '/processes/qa-processes' },
            { text: 'Реліз', link: '/processes/release' },
            { text: 'Документація', link: '/processes/documentation' },
            { text: 'Технічний борг', link: '/processes/technical-debt' },
            { text: 'Ролі', link: '/processes/roles' },
            { text: 'Онбординг команди', link: '/processes/team-onboarding' }
          ]
        }
      ],
      '/marketing/': [
        {
          text: 'Маркетинг',
          items: [
            { text: 'Огляд', link: '/marketing/' },
            { text: 'CRO', link: '/marketing/cro' },
            { text: 'CCPF', link: '/marketing/ccpf' },
            { text: 'Лендінг-профілі', link: '/marketing/landings-profiles' }
          ]
        }
      ],
      '/brand-kit/': [
        {
          text: 'Brand Kit',
          items: [
            { text: 'Огляд', link: '/brand-kit/' },
            { text: 'Основи', link: '/brand-kit/1-foundations' },
            { text: 'Історія', link: '/brand-kit/2-story' },
            { text: 'Цінності', link: '/brand-kit/3-values' },
            { text: 'Особистість', link: '/brand-kit/4-personality' },
            { text: 'Тон і голос', link: '/brand-kit/5-tone-and-voice' },
            { text: 'Атмосфера', link: '/brand-kit/6-atmosphere' },
            { text: 'Емоційна палітра', link: '/brand-kit/7-emotional-palette' },
            { text: 'Меседжінг', link: '/brand-kit/8-messaging' },
            { text: 'AI-промпти', link: '/brand-kit/9-ai-prompts' },
            { text: 'Приклади', link: '/brand-kit/10-examples' },
            { text: 'Дизайн-система', link: '/brand-kit/design-system' },
            {
              text: 'Візуальна ідентичність',
              items: [
                { text: 'Огляд', link: '/brand-kit/visual-identity/' },
                { text: 'Логотип', link: '/brand-kit/visual-identity/1-logo' },
                { text: 'Кольори', link: '/brand-kit/visual-identity/2-color' },
                { text: 'Типографіка', link: '/brand-kit/visual-identity/3-typography' },
                { text: 'Іконки', link: '/brand-kit/visual-identity/4-icons' },
                { text: 'Стиль зображень', link: '/brand-kit/visual-identity/5-imagery-style' },
                { text: 'UI стиль', link: '/brand-kit/visual-identity/6-ui-style' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DTLogix/docs' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Внутрішня документація DTLogix',
      copyright: 'Copyright © 2025 DTLogix'
    }
  }
})

