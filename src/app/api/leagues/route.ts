import { NextResponse } from "next/server";

const url = process.env.API_URL;

export async function GET() {
  
    const response = await fetch(`${url}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return NextResponse.json(data);

}

export async function POST(request: Request) {
  try {
    const product: Product = await request.json();
    
    const result = await fetch(`${url}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    });
    const newProduct = await result.json();
    
    return NextResponse.json({ message: 'Product received', newProduct });
    
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}