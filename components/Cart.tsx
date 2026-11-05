"use client";
import {createContext,useContext,useEffect,useState,ReactNode} from "react";
import {products} from "@/lib/data";
type Line={slug:string;qty:number};
const Ctx=createContext<{lines:Line[];add:(s:string)=>void;setQty:(s:string,q:number)=>void;remove:(s:string)=>void;clear:()=>void;count:number;subtotal:number}>(null as never);
export const useCart=()=>useContext(Ctx);
export function CartProvider({children}:{children:ReactNode}){
const [lines,set]=useState<Line[]>([]);
useEffect(()=>{try{set(JSON.parse(localStorage.getItem("kenari-cart")||"[]"))}catch{}},[]);
useEffect(()=>{try{localStorage.setItem("kenari-cart",JSON.stringify(lines))}catch{}},[lines]);
const add=(s:string)=>set(l=>l.some(x=>x.slug===s)?l.map(x=>x.slug===s?{...x,qty:x.qty+1}:x):[...l,{slug:s,qty:1}]);
const setQty=(s:string,q:number)=>set(l=>q<1?l.filter(x=>x.slug!==s):l.map(x=>x.slug===s?{...x,qty:q}:x));
const remove=(s:string)=>set(l=>l.filter(x=>x.slug!==s));
const subtotal=lines.reduce((a,l)=>a+(products.find(p=>p.slug===l.slug)?.price||0)*l.qty,0);
return <Ctx.Provider value={{lines,add,setQty,remove,clear:()=>set([]),count:lines.reduce((a,l)=>a+l.qty,0),subtotal}}>{children}</Ctx.Provider>}
