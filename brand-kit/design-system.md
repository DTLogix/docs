# Дизайн-система DTLogix

## Вступ

Дизайн-система DTLogix — це набір компонентів, принципів та правил для створення узгоджених інтерфейсів.

## Основні компоненти

### Навігація

- Header / Navigation bar
- Sidebar navigation (якщо застосовно)
- Breadcrumbs
- Pagination

### Форми

- Text inputs
- Select / Dropdown
- Checkboxes
- Radio buttons
- Textarea
- Date picker
- File upload

### Кнопки та дії

- Primary button
- Secondary button
- Text button / Link button
- Icon button
- Button group

### Відображення даних

- Cards
- Tables
- Lists
- Badges / Tags
- Tooltips
- Progress bars
- Charts / Graphs (для аналітики)

### Повідомлення та сповіщення

- Success messages
- Error messages
- Warning messages
- Info messages
- Toast notifications
- Modal dialogs
- Alerts

### Інші компоненти

- Dropdown menus
- Tabs
- Accordions
- Loaders / Spinners
- Empty states

## Принципи дизайн-системи

### Сполученість (Consistency)

- Всі компоненти мають однакову мову дизайну
- Однакові patterns для схожих дій
- Узгоджені spacing та sizing

### Доступність (Accessibility)

- Достатній контраст текстів (WCAG AA мінімум)
- Підтримка keyboard navigation
- Підтримка screen readers

### Простота (Simplicity)

- Мінімалізм у дизайні
- Зрозумілі іконки та labels
- Інтуїтивні interactions

## Кольорова система

Детальніше: [/brand-kit/visual-identity/2-color.md](/brand-kit/visual-identity/2-color.md).

**Основні кольори:**
- Primary: Teal #137C7A
- Secondary: Amber #EFBF45
- Background: Light #F5F7F7
- Surface: White #FFFFFF

**Функціональні кольори:**
- Success: #22C55E
- Warning: #FACC15
- Error: #EF4444
- Info: #3B82F6

## Типографіка

Детальніше: [/brand-kit/visual-identity/3-typography.md](/brand-kit/visual-identity/3-typography.md).

**Основні шрифти:**
- Primary: Inter
- Secondary / fallback: Roboto, системні sans-serif

**Рівні ієрархії:**
- H1: 32px, напівжирний
- H2: 24px, напівжирний
- H3: 20px, напівжирний
- Body: 16px, звичайний
- Caption: 13–14px, звичайний

## Іконки

Детальніше: [/brand-kit/visual-identity/4-icons.md](/brand-kit/visual-identity/4-icons.md).

**Стиль:**
- Лінійні (outline)
- Мінімалістичні
- Одна товщина лінії (1.5–2 px)
- Округлені кути
- Базовий розмір: 24px

## Spacing система

**Базовий spacing unit:** 4px

**Рекомендовані відступи:**
- 4px — мінімальний відступ
- 8px — маленький відступ
- 12px — середній відступ
- 16px — стандартний відступ
- 24px — великий відступ
- 32px — дуже великий відступ

## Border radius

- 4px — маленькі елементи (кнопки, inputs)
- 6px — середні елементи
- 8px — карточки, контейнери
- 12px — модальні вікна

## Shadows / Elevation

- Легка тінь для карток та модальних вікон
- Тінь для hover станів (якщо застосовно)
- Мінімалістичні, не перевантажені тінями

---

## TODO / Розширення

- Детальні специфікації для кожного компонента
- Приклади використання компонентів
- React / Vue / інші implementation guides (якщо застосовно)
- Storybook або подібна документація компонентів
- Анімації та transitions

---

## Пов'язані документи

- Кольори: [/brand-kit/visual-identity/2-color.md](/brand-kit/visual-identity/2-color.md)
- Типографіка: [/brand-kit/visual-identity/3-typography.md](/brand-kit/visual-identity/3-typography.md)
- Іконки: [/brand-kit/visual-identity/4-icons.md](/brand-kit/visual-identity/4-icons.md)
- Стиль UI: [/brand-kit/visual-identity/6-ui-style.md](/brand-kit/visual-identity/6-ui-style.md)