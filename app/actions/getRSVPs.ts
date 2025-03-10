"use server";

import { createClient } from "@/app/utils/supabase/server";

export async function getRSVPs() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("rsvps").select("*");

  if (error) {
    console.error(error);
    return { success: false, message: "Failed to fetch RSVPs", error };
  }

  return { success: true, data };
}
