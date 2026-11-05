import {NextResponse} from "next/server";
// TODO: create order in Firestore, trigger M-Pesa STK push (Daraja) using MPESA_* env vars, confirm via callback.
export async function POST(){return NextResponse.json({paid:false,message:"Payments are not connected yet, so no payment has been taken and no order has been placed."},{status:501})}
