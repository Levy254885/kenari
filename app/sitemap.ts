import type {MetadataRoute} from "next";import {packages,products,site} from "@/lib/data";
export default function sitemap():MetadataRoute.Sitemap{const base=["","/packages","/shop","/reviews","/book-a-nurse","/about","/contact","/faqs"];return [...base,...packages.map(p=>"/packages/"+p.slug),...products.map(p=>"/shop/"+p.slug)].map(u=>({url:site.url+u}))}
