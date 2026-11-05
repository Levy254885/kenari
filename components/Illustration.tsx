import Image from "next/image";
// Add a new illustration: drop an SVG in public/illustrations and add its name here.
export type IllustrationName="nursery-crib"|"bedroom"|"mother-baby"|"sprig"|"teacup"|"care-heart"|"home";
export default function Illustration({name,size=120,className="",decorative=true}:{name:IllustrationName;size?:number;className?:string;decorative?:boolean}){
  return <Image src={`/illustrations/${name}.svg`} alt={decorative?"":name.replace("-"," ")} aria-hidden={decorative} width={size} height={size} className={className} unoptimized/>;
}
