import { NextResponse } from 'next/server';
import { ChatManager } from "@/utilities/aiFunctions";
import { followUpQuestion } from '@/utilities/aiFunctions';


export async function POST(request: Request) {
  try {
    

    const body = await request.json();
    const {input,chatHistory,langHistory,modelChat,modelGen} = body;
  
    
    const response = await ChatManager({input,chatHistory,langHistory,modelChat,modelGen});

    const followQts = await followUpQuestion({input,modelFollow:"gpt-4o-mini",chatHistory,AIMsg:JSON.stringify(response.output+(response.outputFunctionCall ? response.outputFunctionCall.description : ''))})

    console.log(followQts)

    console.log('Response from GenNewLg:', response);

  
    return NextResponse.json({  response,followQts }, { status: 200 });
  } catch (error) {

    console.error('Error in POST /api/ai:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
