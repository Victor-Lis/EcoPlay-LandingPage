import { NextResponse } from "next/server";

import { tampinhasRef } from "@/utils/firebaseConfig";
import { push } from "firebase/database";

const isSmallerThenTen = (n :number) => n < 10? `0${n}` : n

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  try {
    const today = new Date()
    await push(tampinhasRef, {
      data: `${isSmallerThenTen(today.getDate())}/${isSmallerThenTen(today.getMonth()+1)}/${today.getFullYear()}`,
      hora: `${isSmallerThenTen(today.getHours())}:${isSmallerThenTen(today.getMinutes())}:${isSmallerThenTen(today.getSeconds())}`
    })
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Tampinha não salva!" }, { status: 400 });
  }
}
