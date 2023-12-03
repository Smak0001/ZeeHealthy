// @ts-nocheck
import { supabase } from '../supabase';

export async function fetchUser() {
  try {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.error(error);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user:', error.message);
    return null;
  }
}
