# TailAdmin Dashboard – Project Rules & Working Agreement 
  
 ## Purpose of this File 
  
 This file defines **strict rules** for how I (the AI) must behave when generating or refactoring code for your TailAdmin dashboard project. 
  
 **As long as this file exists and you reference it, I must follow these rules.** 
 If you delete this file or explicitly say *"forget the rules"*, I must immediately stop applying them. 
  
 --- 
  
 ## Project Context 
  
 * Dashboard framework: **TailAdmin** 
 * Technology: **HTML + Tailwind CSS** (TailAdmin structure) 
 * You are actively working with an installed TailAdmin template 
 * You will share **screenshots** from pages inside the dashboard 
 * Source folders: 
  
   * `src/components` 
   * `src/partials` 
  
 These folders contain **the single source of truth** for styles, colors, layouts, components, and patterns. 
  
 --- 
  
 ## Absolute Layout Rule (VERY IMPORTANT) 
  
 ✅ **Sidebar, Navbar, Header, and overall layout must NEVER be changed.** 
  
 * Sidebar stays exactly as TailAdmin provides 
 * Navbar stays exactly as TailAdmin provides 
 * Header stays exactly as TailAdmin provides 
  
 ❌ No restructuring 
 ❌ No restyling 
 ❌ No replacing layout wrappers 
  
 👉 **ALL generated or refactored code must live ONLY inside the `<main>` tag.** 
  
 --- 
  
 ## Component Usage Rules 
  
 When building any page, screen, or UI: 
  
 1. **Always reuse existing components** from: 
  
    * `src/components` 
    * `src/partials` 
  
 2. Prefer **copying patterns** instead of inventing new ones: 
  
    * Tables → use existing table HTML from `basic-tables.html` or related files 
    * Badges → reuse badge markup & classes 
    * Alerts → reuse alert partials 
    * Buttons → reuse button styles 
    * Cards, charts, avatars, profiles → reuse existing implementations 
  
 3. ❌ Do NOT create custom colors 
  
 4. ❌ Do NOT introduce new Tailwind configs 
  
 5. ❌ Do NOT invent new design systems 
  
 👉 Everything must visually match **TailAdmin’s color scheme and spacing**. 
  
 --- 
  
 ## Color & Styling Rules 
  
 * Use **only** colors already present in TailAdmin components 
 * Use the same: 
  
   * Background colors 
   * Text colors 
   * Border colors 
   * Hover states 
   * Dark mode handling (if present) 
  
 If unsure: 
 ➡️ Look at similar components in `src/components` and mirror them exactly. 
  
 --- 
  
 ## Refactoring Workflow Rule (VERY IMPORTANT) 
  
 Sometimes you will: 
  
 1. Generate code 
 2. Dislike the output 
 3. Copy **only the inner content** into `<main>` manually 
  
 In this case: 
  
 * My job is **ONLY** to refactor or improve what is INSIDE `<main>` 
 * I must NOT: 
  
   * Touch sidebar 
   * Touch navbar 
   * Touch header 
   * Touch layout wrappers 
  
 Refactoring goals: 
  
 * Cleaner Tailwind markup 
 * Better reuse of existing TailAdmin components 
 * Preserve visual consistency 
  
 --- 
  
 ## Screenshot-Based Development Rule 
  
 When you share a screenshot: 
  
 1. Treat it as a **page inside the existing dashboard** 
 2. Rebuild ONLY the content area (main section) 
 3. Map visible UI elements to: 
  
    * Tables 
    * Cards 
    * Alerts 
    * Badges 
    * Charts 
  
 Using equivalents from `src/components` or `src/partials`. 
  
 --- 
  
 ## Icons Rule (STRICT) 
  
 The ONLY icon library allowed: 
  
 ```html 
 <link href=" `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0` " rel="stylesheet" /> 
 ``` 
  
 Rules: 
  
 * Use `material-symbols-outlined` only 
 * No Heroicons 
 * No Font Awesome 
 * No SVG icon systems unless already inside TailAdmin 
  
 --- 
  
 ## File Awareness Rule 
  
 When generating pages: 
  
 * I must be aware that pages already exist like: 
  
   * `alerts.html` 
   * `avatars.html` 
   * `buttons.html` 
   * `profile.html` 
   * `tables` 
   * `charts` 
  
 I should: 
  
 * Reference them mentally 
 * Match their structure 
 * Reuse their patterns 
  
 --- 
  
 ## Behavior Control Rule 
  
 * I must NOT override these rules 
 * I must NOT "improve" design beyond TailAdmin 
 * I must NOT suggest external UI libraries 
  
 If something is unclear: 
 ➡️ Ask **one short, precise question only**. 
  
 --- 
  
 ## Rule Expiration 
  
 * These rules apply **only while this file exists** 
 * If you delete this file or say: 
  
   * "forget the rules" 
   * "ignore the rules" 
  
 ➡️ I must immediately stop following them. 
  
 --- 
  
 ## Confirmation 
  
 By continuing, the AI confirms: 
  
 ✅ It will always build inside `<main>` only 
 ✅ It will reuse TailAdmin components 
 ✅ It will preserve sidebar, navbar, and header 
 ✅ It will follow TailAdmin color & style system 
  
 --- 
  
 **End of Rules File**