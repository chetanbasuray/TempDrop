# TempDrop

A simple, privacy-focused file upload and sharing service built with Next.js, TypeScript, and Supabase, deployed on Vercel.

---

## Live App

<https://temp-drop.vercel.app>

---

## Tech Stack

- Frontend: Next.js  
- Language: TypeScript  
- Backend / Database: Supabase  
- Hosting: Vercel

---

## Local Development

1. Clone the Repository

   git clone <https://github.com/><your-username>/temp-drop.git
   cd temp-drop

2. Install Dependencies

   npm install

3. Set Up Environment Variables

   Create a `.env.local` file in the root folder:

   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url  
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

   Do not commit `.env.local`.

4. Run Locally

   npm run dev

   Then open <http://localhost:3000>

---

## MVP Features

- Upload and share files via a public link  
- File deletion rules:  
  - Delete after first view  
  - Delete after a set time (e.g., 1 hour, 1 day, 1 week)  
- Lightweight, responsive UI  
- No authentication required (optional later)

---

## Deployment

Automatic deployments via Vercel.  
Every push to the main branch triggers a new build.

---

## Roadmap

| Phase | Description | Status |
|--------|-------------|--------|
| v0.1 | Initial Next.js + Supabase setup and Vercel deployment | ✅ |
| v0.2 | Implement file upload and storage | 🔜✨ |
| v0.3 | Add self-destruct file rules | ⌛ |
| v0.4 | Public file view and download tracking | ⌛ |
| v0.5 | Optional user authentication | ⌛ |

---
