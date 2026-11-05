import type {Metadata} from "next";import {Manrope,Hanken_Grotesk} from "next/font/google";import "./globals.css";
import {CartProvider} from "@/components/Cart";import Header from "@/components/Header";import Footer from "@/components/Footer";import {site} from "@/lib/data";
const display=Manrope({subsets:["latin"],variable:"--font-display",display:"swap",weight:["500","600","700","800"]});
const sans=Hanken_Grotesk({subsets:["latin"],variable:"--font-sans",display:"swap",weight:["300","400","500","600","700"]});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Kenari Premium Care | Maternity & Newborn Care",template:"%s | Kenari Premium Care"},description:"Premium maternity, postpartum and newborn care in Kenya. "+site.tagline,openGraph:{title:"Kenari Premium Care",description:site.tagline,type:"website",images:["/images/swaddle.jpg"]},icons:{icon:"/favicon.svg"}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${sans.variable}`}><body><CartProvider><Header/><main className="pt-[72px] lg:pt-[88px]">{children}</main><Footer/></CartProvider></body></html>}
