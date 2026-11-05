import Link from "next/link";
const col=(t:string,items:[string,string][])=><div><p className="eyebrow light mb-5">{t}</p><ul className="space-y-3 text-sm text-white/75">{items.map(([l,h])=><li key={l}><Link href={h} className="footer-dash hover:text-white">{l}</Link></li>)}</ul></div>;
export default function Footer(){const p=process.env.NEXT_PUBLIC_CONTACT_PHONE||"+254 700 000 000",e=process.env.NEXT_PUBLIC_CONTACT_EMAIL||"hello@example.com";
return <footer className="bg-espresso text-white mt-20"><div className="wrap py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
<div><p className="font-display font-extrabold text-3xl">Kenari</p><p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">Premium Care</p><p className="mt-5 text-sm text-white/70 max-w-xs">Elite care. Nurturing lives. Where medical precision meets gentle luxury.</p></div>
{col("Explore",[["Packages","/packages"],["Shop","/shop"],["Reviews","/reviews"],["About","/about"],["FAQs","/faqs"]])}
{col("Care",[["Book a Nurse","/book-a-nurse"],["Essential Rest","/packages/essential-rest"],["Premium Balance","/packages/premium-balance"],["Luxe Restoration","/packages/luxe-restoration"],["Signature Transformation","/packages/signature-transformation"]])}
<div><p className="eyebrow light mb-5">Contact</p><ul className="space-y-3 text-sm text-white/75"><li>{p}</li><li>{e}</li><li>[Add location]</li><li><Link href="/contact" className="footer-dash hover:text-white">Contact page</Link></li></ul></div></div>
<div className="border-t border-white/10"><div className="wrap py-6 flex flex-wrap gap-4 justify-between text-xs text-white/60"><span>© {new Date().getFullYear()} Kenari Premium Care</span><span>Privacy Policy · Terms and Conditions (add pages)</span></div></div></footer>}
