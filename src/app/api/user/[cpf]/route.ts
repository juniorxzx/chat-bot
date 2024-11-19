import { NextResponse } from "next/server";
import users from "@/data/user.json";

export async function GET(request: Request, context: any) {
  const { params } = context;

  const user = users.users.find((v) => params.cpf === v.cpf);

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json(null);
  }
}
