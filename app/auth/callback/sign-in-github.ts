"use server";

import { createClient } from "@/lib/supabase/server";

export async function signInWithGithub() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}
