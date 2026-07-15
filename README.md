# Media Directory Indonesia

Mockup UI interaktif statis untuk direktori media Indonesia.

## Stack

- **Astro** — halaman & komponen
- **Tailwind CSS v4** — design system Deep Violet & Amber
- **Vanilla JS** — filter & form klaim
- **Plus Jakarta Sans** — tipografi

Tanpa API, database, atau Redis. Data dummy ada di `src/lib/data.ts`. Form klaim disimpan di `localStorage`.

## Halaman

| Route | Deskripsi |
| --- | --- |
| `/` | Beranda |
| `/directory` | Grid media + filter |
| `/directory/[slug]` | Profil media |
| `/claim` | Form klaim media |

## Jalankan

```bash
npm install
npm run dev
```

Buka URL di terminal (default `http://localhost:4321`).
