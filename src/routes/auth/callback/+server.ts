// src/routes/auth/callback/+server.ts
import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  throw redirect(303, '/home')
}

export function isAdmin(email: string) {
  // Check if the user has admin privileges based on their email or other criteria
  return email === "admin@example.com";
}

