"use server";

import { supabase } from "@/lib/supabase";

export async function getDetails() {
  let { data, error } = await supabase.from("database").select("*");
  return { data, error };
}
