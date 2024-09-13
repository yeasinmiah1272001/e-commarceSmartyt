


import { productData } from "@/cconstant/data"
import { NextResponse } from "next/server"


export const GET = async() =>{
   return NextResponse.json({
    status:"success",
    message:"keep alive",
    productData
    
   })
    
}