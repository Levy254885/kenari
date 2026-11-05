"use client";
import {useState} from "react";
export default function Page(){const [sent,setSent]=useState(false);const wa=process.env.NEXT_PUBLIC_WHATSAPP||"254700000000";
return <div className="wrap py-14 max-w-3xl"><h1 className="text-5xl mb-6">Contact</h1><p>Phone: {process.env.NEXT_PUBLIC_CONTACT_PHONE||"+254 700 000 000"} · Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL||"hello@example.com"} · [Add location]</p>
<a className="btn btn-line mt-4" href={`https://wa.me/${wa}`}>Chat on WhatsApp</a>
{sent?<p role="status" className="bg-ivory p-5 mt-8">Thank you. The message form is in demo mode: nothing is stored until a backend is connected.</p>:<form className="grid gap-4 mt-8" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name *<input required className="field"/></label><label>Email *<input type="email" required className="field"/></label><label>Message *<textarea required rows={5} className="field"/></label><button className="btn btn-dark w-fit">Send Message</button></form>}</div>}
