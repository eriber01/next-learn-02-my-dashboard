import { NextResponse } from "next/server";

export async function GET(request: Request) {

  console.log({ request: request.method });

  return NextResponse.json({
    method: 'GET',
    count: 24
  })
}

export async function POST(request: Request) {

  console.log({ request: request.method });

  return NextResponse.json({
    method: 'POST',
    count: 50
  })
}