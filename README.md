## Setup Locally (Windows / PowerShell)

Install Packages:

```bash
npm install
```

Create `.env` (copy from example):

```bash
copy .env.example .env
```

Run App:

```bash
npm run dev
```

---

## Setup Build

Install Packages:

```bash
npm install
```

Create `.env` (copy from example):

```bash
copy .env.example .env
```

Build:

```bash
npm run build
```

## Production Output

After building, Vite generates a production-ready app in the `dist/` folder:

```txt
dist/
├── assets/
├── index.html
```

- `dist/index.html` → main entry HTML file for production
- `dist/assets/` → compiled JavaScript, CSS, and static assets

You can deploy the **entire `dist/` folder** to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).