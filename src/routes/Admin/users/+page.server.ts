import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	const getUsers = async () => {
		let users = [];
		const res = await fetch("http://localhost:3004/users")
		users = await res.json();
		return users
	}

	return {
		users: await getUsers(),
	}
}	