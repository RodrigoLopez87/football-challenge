import { NextResponse } from "next/server";

export async function GET() {
  
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return NextResponse.json(data);

}

export async function POST(request: Request) {
  try {
    const product: Product = await request.json();
    // Aquí puedes agregar lógica para manejar el producto recibido, como guardarlo en una base de datos
    return NextResponse.json({ message: 'Product received', product });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}