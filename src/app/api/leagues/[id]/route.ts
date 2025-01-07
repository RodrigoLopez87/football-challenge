import { NextResponse } from "next/server";

const url = process.env.API_URL;

export async function GET(request: Request, { params }: { params: { id: string } } ) {
    const id = params.id;
      const response = await fetch(`${url}/products/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
      }
    );
    const product : Product = await response.json();
    return NextResponse.json(product);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const response = await fetch(`${url}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const product : Product = await response.json();
    return NextResponse.json({ data : `Product ${id} deleted` });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await request.json();
    const response = await fetch(`${url}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const updatedProduct: Product = await response.json();
    return NextResponse.json({ data : `Product ${id} updated` ,
                               product: updatedProduct});
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}