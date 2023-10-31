import { NextResponse } from 'next/server';
import connectDB from "@/db/config";
import websites from "@/models/websitesModel"
export async function POST(req: Request) {
  console.log("body")
  const body = await req.json();
  const { title, url } = body;

  if ( !url) {
    return NextResponse.json({ error: ' URL is required' }, { status: 409 });
  }

  connectDB('website-analyser')

  
  
  // Check if the title and url exist before inserting
  const existingWebsite = await websites.findOne({url});
  if (existingWebsite) {
    return NextResponse.json({ error: 'Website with the same  URL already exists' }, { status: 409 });
  }
  const website =new websites({url})
 await website.save()

  return NextResponse.json({ message: 'Record saved successfully' }, { status: 200 });
}

export async function GET() {
  connectDB('website-analyser')
  
  
  
  const website = await websites.find({})
  console.log(website);
  

  return NextResponse.json(website, { status: 200 });
}
