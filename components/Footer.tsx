import Link from "next/link";
export default function Footer(){const p=process.env.NEXT_PUBLIC_CONTACT_PHONE||"+254 700 000 000",e=process.env.NEXT_PUBLIC_CONTACT_EMAIL||"hello@example.com";
return <footer className="bg-espresso text-ivory mt-20"><div className="wrap py-14 grid gap-10 md:grid-cols-4 text-sm">
<div><p className="font-serif text-2xl">Kenari Premium Care</p><p className="mt-3 opacity-80">Elite care. Nurturing lives. Where medical precision meets gentle luxury.</p></div>
<div><p className="eyebrow !text-champagne mb-3">Explore</p><ul className="space-y-2"><li><Link href="/packages">Packages</Link></li><li><Link href="/shop">Shop</Link></li><li><Link href="/reviews">Reviews</Link></li><li><Link href="/about">About</Link></li><li><Link href="/faqs">FAQs</Link></li></ul></div>
<div><p className="eyebrow !text-champagne mb-3">Contact</p><ul className="space-y-2"><li>{p}</li><li>{e}</li><li>[Add location]</li><li><Link href="/contact">Contact page</Link></li></ul></div>
<div><p className="eyebrow !text-champagne mb-3">Follow</p><ul className="space-y-2"><li><a href="#">Instagram</a></li><li><a href="#">Facebook</a></li><li><a href="#">TikTok</a></li></ul></div></div>
<div className="border-t border-white/10"><div className="wrap py-5 flex flex-wrap gap-4 justify-between text-xs opacity-70"><span>© {new Date().getFullYear()} Kenari Premium Care</span><span><Link href="/contact">Privacy Policy</Link> · <Link href="/contact">Terms and Conditions</Link> (add pages)</span></div></div></footer>}
