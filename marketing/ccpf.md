# Conversion Copywriting Prompt Framework

**(Адаптація для Directus AI Prompts)**

Це структурування промптів, яке дозволяє AI створювати висококонвертуючі лендінги за принципами CRO (Conversion Rate Optimization).

Фреймворк ділить промпт на логічні блоки, які екстрагують з користувача (або редактора Directus) важливий маркетинговий контекст.

## 🧩 1. CONTEXT

### Навіщо AI потрібен цей блок?

Це — фундамент. AI отримує розуміння:

- хто замовник;
- що за продукт/послуга;
- на що націлений лендінг;
- на якій стадії знаходиться проект (концепт / чернетка / готова структура).

### Приклад для Directus

```text
# CONTEXT
Create a landing page draft for our product: {{ product_name }}.
The landing page will focus on: {{ core_offer }}.
Primary market: {{ market/industry }}.
```

## 🎯 2. OBJECTIVE

### Що змушує AI створювати текст під конверсію?

Блок змушує модель оптимізувати текст не під “красивість”, а під бізнес-мету:

- лід-генерація
- продаж
- запис на консультацію
- завантаження PDF
- реєстрація й т.д.

### Приклад для Directus

```text
# OBJECTIVE
Convert visitors into {{ desired_action }} by clearly explaining the value of {{ product_name }}.
```

## 🎨 3. STYLE

### Фреймворк диктує структуру лендінгу за принципами CRO

Тут задаються правила композиції тексту, які базуються на:

- UX copywriting
- маркетинговій психології
- F-pattern
- storytelling
- benefit-first approach

### Приклад для Directus

```text
# STYLE
Use conversion-focused copywriting with:
- clear hierarchy (H1, H2, H3)
- short, scannable paragraphs
- benefit-driven bullets
- trust-building statements
- evidence-backed claims
- vivid language that creates mental imagery
```

## 🎤 4. TONE

### AI пише так, як відчуває продукт і аудиторію

Тон змінює психологічний вплив:

- авторитетний
- натхненний
- дружній
- формальний
- експертний
- B2B / B2C
- urgency

### Приклад для Directus

```text
# TONE
Tone should be {{ tone_style }} to build trust and move the reader to action.
```

## 👥 5. AUDIENCE

### Один із ключових блоків

Без чіткої аудиторії AI генерує універсальний текст.

Тут задається:

- хто користувач
- яке в нього болюче питання
- яка психологія поведінки
- які заперечення
- який рівень усвідомлення продукту

### Приклад для Directus

```text
# AUDIENCE
Target audience: {{ audience }}
They struggle with: {{ pain_points }}
They seek: {{ desired_outcome }}
Their objections: {{ objections }}
Awareness level: {{ awareness_level }}
```

## 📄 6. RESPONSE (Output Spec)

### Найважливіший блок для Directus AI

Це — технічна специфікація, яка формує готовий контент для CMS.

Тут AI отримує чітку інструкцію по структурі лендінгу:

- заголовок
- підзаголовок
- герой-секція
- списки переваг
- соціальний доказ
- CTA
- FAQ
- SEO мета-опис

### Приклад для Directus

```text
# RESPONSE
Provide a full landing page including:
- H1 headline with main benefit
- H2 supporting subheading
- Pain → Solution story
- Benefit section in bullet format
- Social proof (testimonials, numbers, logos)
- CTA button text variants
- FAQ (at least 5 questions)
- Meta Description (max 160 characters)
```

## 🧱 Приклад готового Prompt Template для Directus

```text
# CONTEXT
Create a conversion-optimized landing page for {{ product_name }}.
The main offer is: {{ offer }}.

# OBJECTIVE
Increase {{ desired_action }} by showing clear value, benefits, and why this solution is superior.

# STYLE
Follow conversion copywriting principles:
- strong headlines
- scannable bullets
- persuasive storytelling
- evidence-based claims
- strong CTA
- social proof

# TONE
Use {{ tone_style }} tone suitable for {{ audience }}.

# AUDIENCE
Audience: {{ audience }}
Pain points: {{ pain_points }}
Desired outcome: {{ desired_outcome }}
Objections: {{ objections }}
Awareness: {{ awareness_level }}

# RESPONSE
Generate a complete landing page including:
- Compelling headline (H1)
- Supporting subheadline (H2)
- Hero section copy
- Problem → agitation → solution section
- Benefit bullets with vivid language
- Social proof (quotes, stats, logos)
- CTA section with 2–3 text variations
- FAQ (5–7 questions)
- Meta description (under 160 chars)
```

## 📌 Переваги такого фреймворку

- Стандартизовані лендінги
- Висока конверсія (бо структура фіксована)
- Можна зберегти як шаблон і використовувати повторно
- Підходить для авто-генерації контенту у Directus
- Просте масштабування контенту для різних продуктів
