# Kenari Premium Care website (Next.js 15, TypeScript, Tailwind)
**Status: source delivered UNTESTED. It was never installed, compiled or opened in a browser. Run the steps below and fix any errors.**
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
