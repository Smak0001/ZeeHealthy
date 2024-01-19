import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  if (!session) {
    throw redirect(303, '/')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select(`email, full_name, password`)
    .eq('id', session.user.id)
    .single()

  return { session, profile }
}

export const actions = {
  update: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const fullName = formData.get('fullName') as string
    const password = formData.get('password') as string

    const session = await getSession()

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      email: email,
      full_name: fullName,
      password: password,
      updated_at: new Date(),
    })

    if (error) {
      return fail(500, {
        email,
        fullName,
        password,
      })
    }

    return {
      email,
      fullName,
      password,
    }
  },
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/')
    }
  },
}