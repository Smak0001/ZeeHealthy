import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

// my supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * function to get all the appointments
 * @returns an array of appointments
 */
export async function getFarmersData() {
  const { data, error } = await supabase.from('Farmers').select('*');
  if (error) console.log('query error', error);
  else return data;
}