import { NextResponse } from 'next/server';
import { generateInstagramPost } from '@/lib/claude-api';

export async function POST(req: Request) {
  try {
    const { businessName, businessDescription, productsSold, websiteLink, promotions } = await req.json();

    if (!businessName || !businessDescription || !productsSold || !websiteLink) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const generatedPost = await generateInstagramPost(businessName, businessDescription, productsSold, websiteLink, promotions);
    return NextResponse.json({ post: generatedPost });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to generate post' }, { status: 500 });
  }
}