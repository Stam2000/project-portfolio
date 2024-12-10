import { NextResponse } from "next/server";
import { GenNewLg } from "@/utilities/aiFunctions";
import { followUpQuestion } from "@/utilities/aiFunctions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { langHistory, chatHistory, modelGen, modelFollow } = body;

    const response = await GenNewLg(modelGen, langHistory);

    const followQts = await followUpQuestion({
      input: "newLanguage",
      modelFollow,
      chatHistory,
      AIMsg: JSON.stringify(response.description),
    });

    return NextResponse.json({ message: response, followQts }, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/ai:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
