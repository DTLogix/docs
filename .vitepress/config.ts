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
      { text: 'Lean Canvas', link: '/lean-canvas/' }
    ],
    sidebar: {
      '/lean-canvas/': [
        {
          text: 'Lean Canvas',
          items: [
            { text: 'Проблеми', link: '/lean-canvas/1-problems' },
            { text: 'Цільові сегменти клієнтів', link: '/lean-canvas/2-customers-segments' },
            { text: 'Унікальна ціннісна пропозиція', link: '/lean-canvas/3-uvp' },
            { text: 'Рішення', link: '/lean-canvas/4-solutions' },
            { text: 'Канали', link: '/lean-canvas/5-channels' },
            { text: 'Джерела доходів', link: '/lean-canvas/6-revenue-streams' },
            { text: 'Структура витрат', link: '/lean-canvas/7-cost-structure' },
            { text: 'Ключові метрики', link: '/lean-canvas/8-key-metrics' },
            { text: 'Нечесна перевага', link: '/lean-canvas/9-unfair-advantage' },
          ]
        }
      ]
    }
  }
});

