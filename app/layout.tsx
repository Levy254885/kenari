import type {Metadata} from "next";import {Cormorant_Garamond,Manrope} from "next/font/google";import "./globals.css";
import {CartProvider} from "@/components/Cart";import Header from "@/components/Header";import Footer from "@/components/Footer";import {site} from "@/lib/data";
const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],variable:"--font-serif",display:"swap"});
const sans=Manrope({subsets:["latin"],variable:"--font-sans",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Kenari Premium Care | Maternity & Newborn Care",template:"%s | Kenari Premium Care"},description:"Premium maternity, postpartum and newborn care in Kenya. "+site.tagline,openGraph:{title:"Kenari Premium Care",description:site.tagline,type:"website",images:["/images/swaddle.jpg"]},icons:{icon:"/favicon.svg"}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><CartProvider><Header/><main>{children}</main><Footer/></CartProvider></body></html>}
