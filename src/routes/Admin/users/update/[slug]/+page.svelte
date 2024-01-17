<script>
	// @ts-nocheck

	import { onMount } from "svelte";

	export let data;

	/**
	 * @type {any[]}
	 */
	let currentUser = [];

	async function fetchData() {
		try {
			const response = await fetch(`http://localhost:3004/users/${data.slug}`, {
				method: "GET",
			});
			currentUser = await response.json();
		} catch {}
	}

	onMount(async () => {
        fetchData();
    });
    
    async function updateUser(
        newUserFullName,
        newUserId,
        newUserEmail,
        newUserPassword,
    ) {
    
        let userData = {
            full_name: newUserFullName,
            id: newUserId,
            password: newUserPassword,
            email: newUserEmail,
            };
        try {
            const response = await fetch(
                `http://localhost:1914/users/update/${data.slug}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                },
            );

			if (response.ok) {
				await fetchData();
			} else {
				console.error("Error updating user:", response.statusText);
				// Optionally, display an error message to the user
			}
		} catch (error) {
			console.error("Error updating user:", error.message);
			// Optionally, display an error message to the user
		}
	}
</script>

<a href="Admin">Go back</a>

<form>
	  <label for="fname">Full name:</label><br />
    <input type="text" bind:value={currentUser.full_name} /><br />
    <label for="lname">User ID:</label><br />
    <input type="text" bind:value={currentUser.id} /><br />
    <label for="lname">User email:</label><br />
    <input type="text" bind:value={currentUser.email} /><br />
    <label for="lname">User password:</label><br />
    <input type="text" bind:value={currentUser.password} /><br />
    <br />
    <button class="btn btn-blue"
        on:click={() =>
            updateUser(
                currentUser.full_name,
                currentUser.id,
                currentUser.email,
                currentUser.password,
            )}
    >	update </button>
</form>
