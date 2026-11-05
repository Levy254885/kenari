import {NextResponse} from "next/server";import {readFile} from "node:fs/promises";import path from "node:path";
// The PDF lives in /private (never served publicly). Implement verifyPaidOrder() once payments exist.
async function verifyPaidOrder(_token:string|null){return false}
export async function GET(req:Request){const t=new URL(req.url).searchParams.get("token");
if(!(await verifyPaidOrder(t)))return NextResponse.json({message:"Download is available after a confirmed purchase."},{status:403});
const f=await readFile(path.join(process.cwd(),"private","ebook.pdf"));return new NextResponse(new Uint8Array(f),{headers:{"Content-Type":"application/pdf","Content-Disposition":'attachment; filename="Kenari-Sleep-Guide.pdf"'}})}
