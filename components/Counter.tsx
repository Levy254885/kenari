"use client";
import {useEffect,useRef,useState} from "react";
export default function Counter({value,duration=1200}:{value:number;duration?:number}){
  const ref=useRef<HTMLSpanElement>(null);const [n,setN]=useState(0);
  useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const tick=(t:number)=>{const k=Math.min(1,(t-t0)/duration);setN(Math.round(value*k));if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)},{threshold:0.4});io.observe(el);return()=>io.disconnect()},[value,duration]);
  return <span ref={ref}>{n}</span>;
}
