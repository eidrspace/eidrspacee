import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { post_id, author, body } = await req.json();

  if (!post_id || !author || !body) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const { data, error } = await supabase
    .from("comments")
    .insert([{ post_id, author, body }])
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return Response.json(data, { status: 201 });
}
