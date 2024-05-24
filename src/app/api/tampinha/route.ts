import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

import { dataRef, totalRef } from "@/utils/firebaseConfig";
import { set, get, } from "firebase/database";
import { CapType } from "@/@types/cap";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    let data = await get(dataRef).then((snapshot) => snapshot.val()?.total)
    if(data){
        await set(totalRef, data+1)
        return NextResponse.json(data+1);
    }
    
    return NextResponse.json("Tampinha salva!");
  } catch (error) {
    return NextResponse.json({ error: "Tampinha não salva!" }, { status: 400 });
  }
}