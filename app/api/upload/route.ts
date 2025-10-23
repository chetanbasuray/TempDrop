import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const filePath = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from('tempDrop_buckets')
      .upload(filePath, buffer, {
        contentType: file.type || 'application/octet-stream',
      });

    if (error) {
      console.error('Upload error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Generate a signed URL that expires in 1 hour (3600 seconds)
    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage
        .from('tempDrop_buckets')
        .createSignedUrl(filePath, 3600);

    if (signedUrlError) {
      console.error('Signed URL error:', signedUrlError);
      return NextResponse.json({ error: signedUrlError.message }, { status: 500 });
    }

    return NextResponse.json({
      url: signedUrlData.signedUrl,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
