import { supabase } from "@/lib/supabaseClient";

export async function GET(_req, { params }) {
  const { postId } = params;

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return Response.json(data);
}
