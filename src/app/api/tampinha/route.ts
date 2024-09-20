import { NextResponse } from "next/server";

import { tampinhasRef } from "@/utils/firebaseConfig";
import { push } from "firebase/database";

const isSmallerThenTen = (n: number) => (n < 10 ? `0${n}` : n);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const senha = searchParams.get("senha");
  try {
    if (senha == process.env.PASSWORD) {
      const today = new Date();
      await push(tampinhasRef, {
        data: `${isSmallerThenTen(today.getDate())}/${isSmallerThenTen(
          today.getMonth() + 1
        )}/${today.getFullYear()}`,
        hora: `${isSmallerThenTen(today.getHours())}:${isSmallerThenTen(
          today.getMinutes()
        )}:${isSmallerThenTen(today.getSeconds())}`,
      });
      return NextResponse.json({ status: 200 });
    }else {
      throw new Error("Senha incorreta")
    }
  } catch (error: any) {
    return NextResponse.json({ error: error?.message ? error.message : "Tampinha não salva!" }, { status: 400 });
  }
}
