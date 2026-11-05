"use client";
import Link from "next/link";import {useRef,useState} from "react";import {Play} from "lucide-react";
// Place your video at public/media/hero.mp4 (and optional hero.webm).
export default function HeroVideo(){const ref=useRef<HTMLVideoElement>(null);const [failed,setFailed]=useState(false);
return <section className="relative min-h-[62vh] md:min-h-[68vh] flex items-end text-ivory overflow-hidden bg-espresso" aria-label="Hero">
<div className="absolute inset-0" style={{backgroundImage:"url(/images/swaddle.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}/>
{!failed&&<video ref={ref} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/swaddle.jpg" onError={()=>setFailed(true)}><source src="/media/hero.mp4" type="video/mp4" onError={()=>setFailed(true)}/></video>}
<div className="absolute inset-0 bg-espresso/60"/>
<div className="wrap relative py-12 md:py-16"><h1 className="text-4xl md:text-6xl max-w-2xl">Where Motherhood Meets <span className="text-champagne">Exceptional Care.</span></h1>
<p className="mt-5 max-w-xl text-lg opacity-90">Thoughtfully personalised maternity and newborn care, designed to nurture mothers, support babies and bring peace to every new beginning.</p>
<div className="mt-8 flex flex-wrap gap-3"><Link href="/packages" className="btn btn-light">Explore Our Packages</Link><Link href="/book-a-nurse" className="btn border-ivory text-ivory hover:bg-ivory hover:text-espresso">Book a Nurse</Link></div>
<button className="mt-6 inline-flex items-center gap-2 text-sm min-h-[44px]" onClick={()=>{const v=ref.current;if(!v)return;v.paused?v.play():v.pause()}} disabled={failed}><Play size={16}/> Watch Our Care in Action</button></div></section>}
