import type {Metadata} from "next";import Link from "next/link";import {reviews} from "@/lib/data";
export const metadata:Metadata={title:"Reviews",description:"What Kenari families say."};
export default function Page(){return <div className="wrap py-14"><p className="eyebrow">Client reviews</p><h1 className="text-5xl">Real Stories. Real Peace.</h1><p className="mt-3 text-sm text-rose">The reviews below are labelled sample content. Replace them in lib/data.ts with genuine, approved reviews.</p>
<div className="grid gap-5 md:grid-cols-3 mt-8">{reviews.map((r,i)=><figure key={i} className="bg-white border border-champagne/60 p-6"><blockquote className="italic">{r.text}</blockquote><figcaption className="mt-3 text-sm">{r.name}{r.sample&&" (sample)"}</figcaption></figure>)}</div>
<div className="text-center mt-12"><Link href="/book-a-nurse" className="btn btn-dark">Book a Nurse</Link></div></div>}
