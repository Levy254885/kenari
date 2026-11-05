"use client";
import Link from "next/link";import {Trash2} from "lucide-react";import {useCart} from "@/components/Cart";import {products,kes} from "@/lib/data";
export default function Page(){const {lines,setQty,remove,subtotal}=useCart();
if(!lines.length)return <div className="wrap py-24 text-center"><h1 className="text-4xl">Your cart is empty</h1><Link href="/shop" className="btn btn-dark mt-6">Browse the Shop</Link></div>;
return <div className="wrap py-12 max-w-3xl"><h1 className="text-4xl mb-6">Your Cart</h1><ul className="divide-y divide-champagne/60">{lines.map(l=>{const p=products.find(x=>x.slug===l.slug)!;return <li key={l.slug} className="py-4 flex flex-wrap items-center gap-4 justify-between"><span className="flex-1 min-w-[180px]">{p.name}</span>
<span className="flex items-center border border-champagne"><button aria-label="Decrease quantity" className="w-11 h-11" onClick={()=>setQty(l.slug,l.qty-1)}>−</button><span className="w-8 text-center">{l.qty}</span><button aria-label="Increase quantity" className="w-11 h-11" onClick={()=>setQty(l.slug,l.qty+1)}>+</button></span>
<span className="w-28 text-right">{kes(p.price*l.qty)}</span><button aria-label={`Remove ${p.name}`} onClick={()=>remove(l.slug)} className="p-3"><Trash2 size={18}/></button></li>})}</ul>
<p className="text-right font-serif text-2xl mt-6">Subtotal {kes(subtotal)}</p><div className="text-right"><Link href="/checkout" className="btn btn-dark mt-4">Proceed to Checkout</Link></div></div>}
