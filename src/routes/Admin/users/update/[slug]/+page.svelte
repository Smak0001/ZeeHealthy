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
            const response = await fetch(
                `http://localhost:3004/users/${data.slug}`,
                {
                    method: "GET",
                },
            );
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

<a class="text-text cursor-pointer p-2 m-2 border-none rounded-3xl hover:opacity-80" href="Admin">← Go back</a>

<div class="flex items-center justify-center p-5">
    <form class="w-3/5 h-auto p-10 mt-11 rounded-3xl bg-blue-100 shadow-lg">
        <label class="font-bold" for="fname">Full name:</label><br />
        <input class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" bind:value={currentUser.full_name} /><br />
        <label class="font-bold" for="lname">User ID:</label><br />
        <input class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" bind:value={currentUser.id} /><br />
        <label class="font-bold" for="lname">User email:</label><br />
        <input class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" bind:value={currentUser.email} /><br />
        <label class="font-bold" for="lname">User password:</label><br />
        <input class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2" type="text" bind:value={currentUser.password} /><br />
        <br />
        <button
            class="bg-blue-500 hover:bg-blue-700 float-right text-white font-bold py-2 px-4 rounded-xl"
            on:click={() =>
                updateUser(
                    currentUser.full_name,
                    currentUser.id,
                    currentUser.email,
                    currentUser.password,
                )}
        >
            Update
        </button>
    </form>
</div>
