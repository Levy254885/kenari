import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Check} from "lucide-react";
import type {Metadata} from "next";
import {packages,kes} from "@/lib/data";

type Props={params:Promise<{slug:string}>};

export const generateStaticParams=()=>packages.map(p=>({slug:p.slug}));

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const p=packages.find(x=>x.slug===slug);
  return {title:p?.name||"Package",description:p?.tagline};
}

export default async function Page({params}:Props){
  const {slug}=await params;
  const p=packages.find(x=>x.slug===slug);
  if(!p)notFound();
  return (
    <div className="wrap py-12 grid gap-10 md:grid-cols-2">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
        <Image src={p.image} alt={p.name} fill priority sizes="(min-width:768px) 50vw,100vw" className="object-cover"/>
      </div>
      <div>
        <Link href="/packages" className="text-sm underline">All packages</Link>
        <h1 className="text-4xl md:text-5xl mt-3">{p.name}</h1>
        <p className="italic mt-3">{p.tagline}</p>
        <p className="text-rose mt-3">{p.sessions}</p>
        <p className="font-serif text-4xl mt-3">{kes(p.price)}</p>
        <h2 className="text-2xl mt-8 mb-3">Includes</h2>
        <ul className="space-y-2">
          {p.includes.map(i=><li key={i} className="flex gap-3"><Check size={18} className="text-rose mt-1 shrink-0"/>{i}</li>)}
        </ul>
        <p className="mt-6 bg-ivory p-4"><strong>Perfect for:</strong> {p.for}</p>
        <Link href={`/book-a-nurse?package=${p.slug}`} className="btn btn-dark mt-6">Book This Package</Link>
      </div>
    </div>
  );
}
