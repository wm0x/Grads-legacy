# Grad Projects Portal

A Laravel 10 application with Blade‑based authentication (via Breeze).  
For Front‑end developers clone this repo and start working on views immediately—no database or backend setup required.


---

## 📦 Prerequisites

- PHP 8.1+  
- Composer  
- Node.js (v16+) & npm  
- Git  

---

## 🚀 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YOUR_USER/grad-projects-portal.git           //Replace this part (YOUR_USER) with your USERNAME on github
   cd grad-projects-portal
   ```

2. **Environment setup**  
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **(No DB needed for view work)**  
   You won’t connect to any database yet. All dynamic lists are hard‑coded in Blade for now.

4. **Install dependencies & compile assets**  
   ```bash
   npm install
   npm run dev
   ```

5. **Serve the app**  
   ```bash
   php artisan serve
   ```
   Open your browser to http://127.0.0.1:8000.

---

## 🖌️ Where to Edit Views

- **Layouts & navigation**  
  `resources/views/layouts/app.blade.php`

- **Auth pages**  
  `resources/views/auth/*.blade.php`

- **Project pages**  
  `resources/views/projects/*.blade.php`

Inside any Blade file, you’ll see a PHP block at the top stubbing data. Modify that array to change sample titles, statuses, or progress bars:

```blade
@php
  // Example stub data for view development
  $projects = [
    ['title'=>'Sample Project','status'=>'Completed','progress'=>100],
    ['title'=>'Another Demo','status'=>'In Progress','progress'=>45],
  ];
@endphp
```

---

## 📂 Directory Overview

```
├── app/                # Controllers, Models, etc.
├── database/           # Migrations (not used yet for view work)
├── public/             # Public assets & entry point
├── resources/
│   ├── views/          # All Blade templates live here
│   └── css/, js/       # Front‑end assets (compiled by Vite)
└── routes/web.php      # HTTP routes
```

---


## Contact me asap when u face a problem am always there to help!
## Enjoy (: !
