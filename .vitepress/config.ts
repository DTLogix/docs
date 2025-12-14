import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/docs/',
  title: 'DTLogix Docs',
  description: 'Документація DTLogix',
  lang: 'uk-UA',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Бізнес-модель', link: '/business-model/' },
      { text: 'Стратегія', link: '/strategy/' },
      { text: 'Дослідження', link: '/research/' },
      { text: 'Процеси', link: '/processes/' },
      { text: 'Продукт', link: '/product/' },
      { text: 'Brand Kit', link: '/brand-kit/' }
    ],
    sidebar: {
      '/business-model/': [
        {
          text: 'Бізнес-модель',
          link: '/business-model/index',
          items: [
            { text: 'Проблеми', link: '/business-model/1-problems' },
            { text: 'Цільові сегменти клієнтів', link: '/business-model/2-customers-segments' },
            { text: 'Унікальна ціннісна пропозиція', link: '/business-model/3-uvp' },
            { text: 'Рішення', link: '/business-model/4-solutions' },
            { text: 'Канали', link: '/business-model/5-channels' },
            { text: 'Джерела доходів', link: '/business-model/6-revenue-streams' },
            { text: 'Структура витрат', link: '/business-model/7-cost-structure' },
            { text: 'Ключові метрики', link: '/business-model/8-key-metrics' },
            { text: 'Нечесна перевага', link: '/business-model/9-unfair-advantage' },
          ]
        }
      ],
      '/strategy/': [
        {
          text: 'Стратегія',
          link: '/strategy/index',
          items: [
            { text: 'Бачення', link: '/strategy/vision' },
            { text: 'Дорожня карта', link: '/strategy/roadmap' },
            { text: 'MVP', link: '/strategy/mvp' },
            { text: 'Цілі', link: '/strategy/goals' },
          ]
        }
      ],
      '/research/': [
        {
          text: 'Дослідження',
          link: '/research/index',
          items: [
            { text: 'Інтерв\'ю', link: '/research/interviews' },
            { text: 'Персони', link: '/research/personas' },
            { text: 'Конкуренти', link: '/research/competitors' },
            { text: 'Ринок', link: '/research/market' },
          ]
        }
      ],
      '/processes/': [
        {
          text: 'Процеси',
          link: '/processes/index',
          items: [
            { text: 'Розробка', link: '/processes/development' },
            { text: 'Планування', link: '/processes/planning' },
            { text: 'Документація', link: '/processes/documentation' },
            { text: 'Релізи', link: '/processes/release' },
            { text: 'Ролі', link: '/processes/roles' },
          ]
        }
      ],
      '/product/': [
        {
          text: 'Продукт',
          link: '/product/index',
          items: [
            { text: 'Огляд системи', link: '/product/overview' },
            { text: 'Модулі', link: '/product/modules' },
            { text: 'Сценарії використання', link: '/product/use-cases' },
          ]
        }
      ],
      '/brand-kit/': [
        {
          text: 'Brand Kit',
          items: [
            { text: 'Основи', link: '/brand-kit/1-foundations' },
            { text: 'Історія', link: '/brand-kit/2-story' },
            { text: 'Цінності', link: '/brand-kit/3-values' },
            { text: 'Особистість', link: '/brand-kit/4-personality' },
            { text: 'Тон і голос', link: '/brand-kit/5-tone-and-voice' },
            { text: 'Атмосфера', link: '/brand-kit/6-atmosphere' },
            { text: 'Емоційна палітра', link: '/brand-kit/7-emotional-palette' },
            { text: 'Фреймворк повідомлень', link: '/brand-kit/8-messaging' },
            { 
              text: 'Візуальна ідентичність',
              link: '/brand-kit/visual-identity/index',
              items: [
                { text: 'Логотип', link: '/brand-kit/visual-identity/1-logo' },
                { text: 'Кольори', link: '/brand-kit/visual-identity/2-color' },
                { text: 'Типографіка', link: '/brand-kit/visual-identity/3-typography' },
                { text: 'Іконки', link: '/brand-kit/visual-identity/4-icons' },
                { text: 'Стиль зображень', link: '/brand-kit/visual-identity/5-imagery-style' },
                { text: 'Стиль UI', link: '/brand-kit/visual-identity/6-ui-style' },
              ]
            },
            { text: 'AI-промпти', link: '/brand-kit/9-ai-prompts' },
            { text: 'Приклади застосування', link: '/brand-kit/10-examples' },
          ]
        }
      ]
    }
  }
});

