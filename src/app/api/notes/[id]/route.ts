import { NextResponse } from 'next/server';

interface Params {
  params: { id: string };
}
export function GET(request: Request, { params }: Params) {
    console.log(params.id);
    //parei no minuto 30:36
    
  return NextResponse.json({
    message: 'getting single notes ...',
  });
}
export function DELETE(request: Request) {
  return NextResponse.json({
    message: 'deleting single notes ...',
  });
}
export function PUT(request: Request) {
  return NextResponse.json({
    message: 'updating single notes ...',
  });
}
