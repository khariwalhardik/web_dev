import { NextServer } from "next/dist/server/next";
export async function POST (request){
    let data = await request.json()
    console.log(data)
    return {
        status: 200,
        body: JSON.stringify(data),
        success: true,
        data:"yes",
    }
}