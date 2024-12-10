import { NextResponse } from "next/server";
import { GenTemplate } from "@/utilities/formular";
import { DataGenerator } from "@/utilities/formular";

export async function GET(request: Request) {
  try {
    const response = await GenTemplate();

    console.log("Response from GenNewLg:", response);

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/ai:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data } = body;

    const response = await DataGenerator(data);

    console.log("Response from GenNewLg:", response);

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/ai:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
