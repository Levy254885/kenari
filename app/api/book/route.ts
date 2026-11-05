import {NextResponse} from "next/server";
// TODO: save to Firestore "bookings" and notify the team. Currently validates only; nothing is stored.
export async function POST(req:Request){const b=await req.json().catch(()=>null);
if(!b?.name||!b?.phone||!b?.email||!b?.location||!b?.support||!b?.date)return NextResponse.json({ok:false,message:"Please complete all required fields."},{status:400});
return NextResponse.json({ok:true,stored:false,message:"Request received. This is a request only, not a confirmed booking. Our team will contact you to confirm availability."})}
