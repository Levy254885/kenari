# Kenari Premium Care website (Next.js 15, TypeScript, Tailwind)
**Status: the Next.js source was never compiled in the build environment (no network). Vercel built an earlier version of it successfully. Run the steps below and fix any errors.**

Design previews: open previews/index.html. These are static renders of the design, not the running Next.js app.
## Run
npm install, then npm run dev (http://localhost:3000). Also: npm run lint (type check), npm run build, npm start.
## Deploy (Vercel)
Push to GitHub, import in Vercel, add the variables from .env.example.
## Edit content
Packages, products, prices, reviews and FAQs all live in lib/data.ts. Product prices are PLACEHOLDERS.
## Assets
Images: public/images. Hero video: public/media/hero.mp4. E-book PDF: private/ebook.pdf (never served publicly). Check public/images/ebook-cover.jpg (generated from the PDF's first page).
## Not connected yet
M-Pesa (app/api/checkout), Firestore storage of bookings (app/api/book), paid e-book delivery (app/api/download), contact form backend, Cloudinary, social links, privacy and terms pages, genuine reviews, lactation tea details.
