# Project Style Guide for UI Consistency

## 🚨 CRITICAL - NEVER MODIFY THESE FILES

**These files contain automatic light/dark theme logic - NEVER touch them:**
- `src/app/globals.css` - Contains theme variables and `@media (prefers-color-scheme: dark)` detection
- `tailwind.config.js` - Contains theme token mappings
- Any `@media (prefers-color-scheme: dark)` rules anywhere in the codebase

**Modifying these will break the automatic theme switching system.**

---

## 💡 Usage Rules for Claude Code

- ✅ Use **theme tokens** for colors: `bg-background`, `text-foreground`, `bg-primary`, etc.
- ✅ Add `dark:` classes for elements that need different dark mode styling
- ❌ Do NOT hardcode color values (no `#fff`, `rgb()`, etc.)
- ❌ Do NOT modify theme files listed above
- ✅ Use `.js` file extensions (not `.jsx`)
- ✅ Follow existing component patterns exactly
- ✅ Include proper focus states and aria-labels

---

## 🎨 Theme System Overview

**Your theme uses automatic `prefers-color-scheme` detection with these tokens:**

```js
// Available theme tokens in Tailwind (from tailwind.config.js):
colors: {
  background: "var(--background)",    // Auto switches: #fff → #262626 (dark grey)
  foreground: "var(--foreground)",    // Auto switches: #000 → #fff  
  grey: "var(--grey)",                // Auto switches: #808080 → #a0a0a0
  primary: "var(--primary-color)",    // Auto switches: #3b82f6 → #60a5fa
  secondary: "var(--secondary-color)", // Stays: #14b8a6
}
```

**How to use theme tokens:**
- `bg-background` and `text-foreground` for main backgrounds/text
- `bg-primary` and `bg-secondary` for brand colors
- `text-grey` for secondary text
- Add `dark:` classes only when you need different behavior than the automatic switching

---

## 🌗 Dark Mode Support

Use `dark:` utility prefixes in Tailwind when applying styles that differ in dark mode.

Follow the established patterns:

**Text/Background Combinations:**
- Light: `text-gray-900 bg-gray-100`
- Dark: `dark:text-gray-100 dark:bg-gray-800`

**Border Patterns:**
- Standard: `border-gray-300 dark:border-gray-600`
- Subtle: `border-gray-200 dark:border-gray-700`

**Interactive Elements:**
- Background: `bg-gray-200 dark:bg-gray-700`
- Hover: `hover:bg-gray-300 dark:hover:bg-gray-600`

---

## 🧱 Component Guidelines

All components should:
- Support dark/light mode out of the box
- Use Tailwind for layout and spacing
- Inherit from base theme variables or Tailwind themes
- Include proper accessibility attributes

### Button Patterns

Based on actual `CustomButton` component (`src/app/components/button.js`):

```js
// Primary button (from actual component)
className="w-full px-4 py-3 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"

// Using theme tokens (preferred for new components)
className="w-full px-4 py-3 bg-primary hover:bg-primary/90 disabled:bg-grey dark:disabled:bg-grey text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
```

### Form Element Patterns

**Text Input Fields (Primary Pattern):**
```js
// Label styling - use theme tokens
className="block text-sm font-medium text-foreground mb-2"

// Input styling - white background with dark text for readability
className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-white text-black placeholder-grey transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary border-grey"

// Error state variation
className="border-red-500" // when error prop is true
```

**Checkbox inputs:**
```js
className="mt-1 w-4 h-4 text-foreground bg-background border-grey rounded focus:ring-primary focus:ring-2"
```

**Text/Label combinations:**
```js
className="text-sm text-foreground"      // Primary text
className="text-grey"                    // Secondary text
className="text-foreground font-semibold" // Headings
```

**Form Input Guidelines:**
- ✅ Use white backgrounds (`bg-white dark:bg-white`) for text inputs to ensure readability
- ✅ Use `text-black` for input text (dark text on white background in both modes)
- ✅ Use `placeholder-grey` for consistent placeholder styling
- ✅ Use `border-grey` for default borders, `border-red-500` for errors
- ✅ Always include focus states with theme-aware `focus:ring-primary`
- ⚠️ **Important:** When using white backgrounds, use `text-black` not `text-foreground` to ensure password dots and text are visible in dark mode

### Modal/Card Patterns

Based on actual `Modal` component (`src/app/components/modal.js`):

```js
// Modal backdrop
className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"

// Modal content (actual pattern from codebase)
className="bg-white dark:bg-gray-800 p-6 rounded-lg min-w-[300px] shadow-xl"

// Using theme tokens (preferred)
className="bg-background border border-grey rounded-lg p-4 shadow-sm"
```

### Icon Usage

- Use **Heroicons** (`@heroicons/react/24/outline` for outline, `/24/solid` for solid)
- Standard icon size: `h-5 w-5`
- Icon colors: `text-grey` (uses theme tokens)
- Interactive icons: include hover states

```js
// Using theme tokens (preferred)
className="h-5 w-5 text-grey mt-1 flex-shrink-0"

// With hover states
className="h-5 w-5 text-grey hover:text-foreground transition-colors"
```

---

## 📝 Typography Standards

**Font Family:** Inter with fallbacks
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Text Hierarchy:**
- **Headings:** `text-2xl font-bold text-foreground`
- **Subheadings:** `font-semibold text-foreground`
- **Body text:** `text-foreground`
- **Secondary text:** `text-grey`
- **Small text:** `text-sm text-grey`

**Line Height:** Use `line-height: 1.6` base or Tailwind `leading-relaxed`

---

## 🎯 Layout & Spacing

**Container Patterns:**
- Modal content: `max-w-4xl mx-auto space-y-6`
- Standard spacing: `space-y-4`, `space-y-6` for sections
- Padding: `p-4` for cards, `px-4 py-3` for buttons

**Responsive Design:**
- Mobile-first approach
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`

---

## ⚡ Animation Standards

**Transitions:**
- Standard: `transition-colors duration-200`
- Interactive elements should include smooth transitions
- Focus states: `focus:outline-none focus:ring-2`

**Focus Ring Patterns:**
```js
// Primary focus (using theme tokens)
focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background

// Secondary focus
focus:ring-grey focus:ring-2

// Complete focus pattern
focus:outline-none focus:ring-2 focus:ring-primary
```

---

## ♿ Accessibility Requirements

**Always Include:**
- `aria-label` for interactive elements without text
- Proper focus states with visible focus rings
- Semantic HTML elements
- Color contrast ratios (handled by design tokens)

**Examples:**
```js
// Interactive elements
className="cursor-pointer"

// Form labels
className="flex items-start space-x-3 cursor-pointer"

// Complete accessible button
className="bg-primary text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" 
// + aria-label="Button description"
```

---

## 📁 File Structure

- **Global styles:** `src/app/globals.css`
- **Tailwind config:** `tailwind.config.js`
- **Shared components:** `src/app/components/`
- **Custom UI logic:** Keep in `components/`, not pages

---

## ❗ Important Don'ts

- ❌ Don't add raw hex/rgb colors
- ❌ Don't change CSS variable names
- ❌ Don't remove or overwrite global media queries
- ❌ Don't modify layout wrappers in layout.js without reason
- ❌ Don't create components without dark/light mode support
- ❌ Don't skip accessibility attributes
- ❌ Don't use inconsistent spacing patterns
- ❌ Don't hardcode font families outside of globals.css

---

## 🔧 Quick Reference

**Theme Token Usage (Preferred):**
```js
// Backgrounds
className="bg-background"           // Auto-switching main background
className="bg-primary"              // Brand primary color
className="bg-secondary"            // Brand secondary color

// Text
className="text-foreground"         // Main text color
className="text-grey"               // Secondary text

// Complete component example
className="bg-background text-foreground border border-grey rounded-lg p-4"
```

**When to use `dark:` classes:**
- Only when you need different behavior than automatic theme switching
- For complex components with specific dark mode requirements
- Example: `bg-white dark:bg-gray-800` (when theme tokens don't fit)

**Decision Tree:**
1. ✅ **First choice:** Use theme tokens (`bg-background`, `text-foreground`, etc.)
2. ✅ **Second choice:** Use `dark:` classes with standard Tailwind colors
3. ❌ **Never:** Hardcode hex/rgb colors

This guide ensures consistent, accessible, and maintainable UI components across the application.