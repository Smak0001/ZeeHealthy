import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const drivers = (await supabase.from("drivers").select()).data;

  return {
    drivers: drivers || [],
    f: 1
  };
};