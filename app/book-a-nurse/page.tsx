"use client";
import {useState,useEffect} from "react";import {packages} from "@/lib/data";
const support=["Newborn care","Overnight nursing support","Postpartum support","Lactation support","Infant care","General consultation"];
const L=({t,children}:{t:string;children:React.ReactNode})=><label className="block text-sm">{t}{children}</label>;
export default function Page(){const [state,setState]=useState<"idle"|"loading"|"ok"|"error">("idle");const [msg,setMsg]=useState("");const [pkg,setPkg]=useState("");
useEffect(()=>{setPkg(new URLSearchParams(location.search).get("package")||"")},[]);
async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setState("loading");try{const r=await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))});const d=await r.json();setMsg(d.message);setState(r.ok?"ok":"error")}catch{setMsg("Network error. Please try again.");setState("error")}}
return <div className="wrap py-14 max-w-3xl"><p className="eyebrow">Book a Nurse</p><h1 className="text-5xl mb-2">Request your Kenari care</h1><p className="mb-8">Send a booking request and our team will contact you to confirm availability. Your details are used only to respond to your request.</p>
{state==="ok"?<p role="status" className="bg-ivory p-6">{msg}</p>:<form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
<L t="Mother’s full name *"><input name="name" required className="field"/></L><L t="Phone number *"><input name="phone" type="tel" required pattern="[0-9+ ]{9,15}" className="field"/></L>
<L t="Email address *"><input name="email" type="email" required className="field"/></L><L t="Location *"><input name="location" required className="field"/></L>
<L t="Expected delivery date or baby’s date of birth"><input name="dueOrDob" type="date" className="field"/></L>
<L t="Type of support *"><select name="support" required className="field" defaultValue=""><option value="" disabled>Select…</option>{support.map(s=><option key={s}>{s}</option>)}</select></L>
<L t="Preferred booking date *"><input name="date" type="date" required className="field"/></L><L t="Preferred time"><input name="time" type="time" className="field"/></L>
<div className="md:col-span-2"><L t="Selected package (optional)"><select name="package" value={pkg} onChange={e=>setPkg(e.target.value)} className="field"><option value="">No package selected</option>{packages.map(p=><option key={p.slug} value={p.slug}>{p.short}</option>)}</select></L></div>
<div className="md:col-span-2"><L t="Additional information"><textarea name="notes" rows={4} className="field"/></L></div>
<div className="md:col-span-2"><button className="btn btn-dark" disabled={state==="loading"}>{state==="loading"?"Sending…":"Send Booking Request"}</button>{state==="error"&&<p role="alert" className="text-red-700 mt-3">{msg}</p>}</div></form>}</div>}
