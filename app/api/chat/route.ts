import { NextResponse } from 'next/server';
import { ChatManager } from "@/utilities/aiFunctions";
import { followUpQuestion } from '@/utilities/aiFunctions';


export async function POST(request: Request) {
  try {
    
    // Parse the request body
    const body = await request.json();
    const {input,chatHistory,langHistory,modelChat,modelGen} = body;
  
    // Call your utility function
    const response = await ChatManager({input,chatHistory,langHistory,modelChat,modelGen});

    const followQts = await followUpQuestion({input,modelFollow:"gpt-4o-mini",chatHistory,AIMsg:JSON.stringify(response.output+(response.outputFunctionCall ? response.outputFunctionCall.description : ''))})

    console.log(followQts)
    // Log the response from GenNewLg
    console.log('Response from GenNewLg:', response);

    // Return the JSON response
    return NextResponse.json({  response,followQts }, { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error('Error in POST /api/ai:', error);

    // Return a 500 Internal Server Error response
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
