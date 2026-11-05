import type {Metadata} from "next";import {Manrope} from "next/font/google";import "./globals.css";
import {CartProvider} from "@/components/Cart";import Header from "@/components/Header";import Footer from "@/components/Footer";import {site} from "@/lib/data";
const sans=Manrope({subsets:["latin"],variable:"--font-sans",display:"swap",weight:["400","500","600","700"]});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Kenari Premium Care | Maternity & Newborn Care",template:"%s | Kenari Premium Care"},description:"Premium maternity, postpartum and newborn care in Kenya. "+site.tagline,openGraph:{title:"Kenari Premium Care",description:site.tagline,type:"website",images:["/images/swaddle.jpg"]},icons:{icon:"/favicon.svg"}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="en" className={sans.variable}><body><CartProvider><Header/><main>{children}</main><Footer/></CartProvider></body></html>}
