import Image from "next/image";import Link from "next/link";import Reveal from "./Reveal";
export type Crumb={label:string;href?:string};
export function Breadcrumbs({items}:{items:Crumb[]}){return <nav aria-label="Breadcrumb" className="wrap pt-6 pb-2"><ol className="flex flex-wrap items-center gap-2 text-sm text-espresso/70">{items.map((c,i)=><li key={c.label} className="flex items-center gap-2">{i>0&&<span aria-hidden>/</span>}{c.href&&i<items.length-1?<Link href={c.href} className="hover:text-rose underline-offset-4 hover:underline">{c.label}</Link>:<span aria-current="page" className="text-espresso">{c.label}</span>}</li>)}</ol></nav>}
export default function PageHero({eyebrow,title,lead,image,alt}:{eyebrow:string;title:string;lead?:string;image?:string;alt?:string}){
  return <section className="bg-ivory"><div className="wrap py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center"><div className={image?"lg:col-span-7":"lg:col-span-9"}>
    <Reveal><p className="eyebrow mb-6">{eyebrow}</p></Reveal><Reveal delay={100}><h1 className="text-[2.4rem] md:text-5xl font-extrabold leading-[1.08]">{title}</h1></Reveal>
    {lead&&<Reveal delay={220}><p className="mt-6 text-base md:text-lg leading-relaxed text-espresso/75 max-w-2xl">{lead}</p></Reveal>}</div>
    {image&&<Reveal delay={160} className="lg:col-span-5"><div className="relative w-full h-[300px] md:h-[380px] overflow-hidden rounded-[22px]"><Image src={image} alt={alt||title} fill priority sizes="(min-width:1024px) 40vw,100vw" className="object-cover"/></div></Reveal>}</div></section>}
