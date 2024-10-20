import { NextResponse } from 'next/server';
import { GenNewLg } from '@/utilities/aiFunctions';
import { ChatManager } from "@/utilities/aiFunctions";

export async function POST(request: Request) {
  try {
    
    // Parse the request body
    const body = await request.json();
    const {input,chatHistory,langHistory} = body;
    console.log(chatHistory)
    console.log(input)

    // Log the received data for debugging
  

    // Call your utility function
    const response = await ChatManager({input,chatHistory,langHistory});

    // Log the response from GenNewLg
    console.log('Response from GenNewLg:', response);

    // Return the JSON response
    return NextResponse.json({  response }, { status: 200 });
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
