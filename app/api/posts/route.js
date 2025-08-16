import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return Response.json(data);
}

export async function POST(req) {
  const { title, content, author } = await req.json();
  if (!title || !content || !author) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, content, author }])
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return Response.json(data, { status: 201 });
}
