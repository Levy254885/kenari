"use client";
import Link from "next/link";import {useState} from "react";import {Menu,X,ShoppingBag,Search} from "lucide-react";import {useCart} from "./Cart";
const nav=[["/","Home"],["/packages","Packages"],["/shop","Shop"],["/reviews","Reviews"],["/book-a-nurse","Book a Nurse"]];
export default function Header(){const [open,setOpen]=useState(false);const {count}=useCart();
return <header className="sticky top-0 z-40 bg-cream/95 border-b border-champagne/60"><div className="wrap flex items-center justify-between h-16">
<Link href="/" className="font-semibold text-xl tracking-tight" onClick={()=>setOpen(false)}>Kenari <span className="text-[10px] tracking-[0.25em] uppercase text-rose block -mt-1">Premium Care</span></Link>
<nav aria-label="Main" className="hidden md:flex gap-7 text-sm">{nav.map(([h,l])=><Link key={h} href={h} className="hover:text-rose">{l}</Link>)}</nav>
<div className="flex items-center gap-1">
<Link href="/cart" aria-label={`Cart, ${count} items`} className="p-3 relative"><ShoppingBag size={18}/>{count>0&&<span className="absolute top-1 right-1 bg-rose text-white text-[10px] rounded-full w-4 h-4 grid place-items-center">{count}</span>}</Link>
<Link href="/book-a-nurse" className="btn btn-dark hidden md:inline-flex !py-2">Book Now</Link>
<button className="md:hidden p-3" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>
{open&&<div className="md:hidden border-t border-champagne bg-cream"><nav aria-label="Mobile" className="wrap py-2 flex flex-col text-base">{nav.concat([["/about","About"],["/contact","Contact"],["/faqs","FAQs"]]).map(([h,l])=><Link key={h} href={h} onClick={()=>setOpen(false)} className="py-3 border-b border-champagne/40">{l}</Link>)}
<Link href="/book-a-nurse" onClick={()=>setOpen(false)} className="btn btn-dark my-4">Book a Nurse</Link></nav></div>}</header>}
