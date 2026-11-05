"use client";
import {useState} from "react";import Link from "next/link";import {useCart} from "./Cart";
export default function AddToCart({slug}:{slug:string}){const {add}=useCart();const [done,setDone]=useState(false);
return <div className="flex flex-wrap gap-3"><button className="btn btn-line" onClick={()=>{add(slug);setDone(true)}}>Add to Cart</button>
<Link href="/checkout" className="btn btn-dark" onClick={()=>add(slug)}>Buy Now</Link>
{done&&<p role="status" className="w-full text-sm text-rose">Added to your cart. <Link className="underline" href="/cart">View cart</Link></p>}</div>}
