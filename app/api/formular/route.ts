import { NextResponse } from 'next/server';
import { GenNewLg } from '@/utilities/aiFunctions';
import { GenTemplate} from "@/utilities/formular";
import { DataGenerator } from '@/utilities/formular';
import { followUpQuestion } from '@/utilities/aiFunctions';
import { MyContext } from '@/components/contextProvider';

export async function GET(request: Request) {
  try {
    
    
  
    // Call your utility function
    const response = await GenTemplate();

  

  
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

export async function POST(request: Request) {
  try {
    
    const body = await request.json();
    const {data} = body;
    console.log(data)
  
    // Call your utility function
    const response = await DataGenerator(data);

  

  
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

