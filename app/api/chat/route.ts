import { NextResponse } from 'next/server';
import { GenNewLg } from '@/utilities/aiFunctions';
import { ChatManager } from "@/utilities/aiFunctions";

export async function POST(request: Request) {
  try {
    
    // Parse the request body
    const body = await request.json();
    const { newChat, question } = body;

    // Log the received data for debugging
    console.log('Received body:', body);

    // Call your utility function
    const response = await ChatManager();

    // Log the response from GenNewLg
    console.log('Response from GenNewLg:', response);

    // Return the JSON response
    return NextResponse.json({ message: response }, { status: 200 });
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
