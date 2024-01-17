<!-- src/routes/account/+page.svelte -->
<script lang="ts">
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";

    export let data;
    export let form;

    let { session, supabase, profile } = data;
    $: ({ session, supabase, profile } = data);
    console.log(session);

    let profileForm: HTMLFormElement;
    let loading = false;
    let email: string = profile?.email ?? "";
    let fullName: string = profile?.full_name ?? "";
    let password: string = profile?.password ?? "";

    const handleSubmit: SubmitFunction = () => {
        loading = true;
        return async () => {
            loading = false;
        };
    };

    const handleSignOut: SubmitFunction = () => {
        loading = true;
        return async ({ update }) => {
            loading = false;
            update();
        };
    };
</script>

<div class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6 bg-blue-500 text-white py-4">
    <h1 class="text-text font-bold text-4xl">
        Hello, <span class="underline">{fullName}</span>. If you want to update
        your profile plese feel free to do that.
    </h1>
</div>

<button
    class="bg-primary text-text cursor-pointer p-2 m-2 border-none rounded-3xl hover:opacity-80"
    onclick="window.location='/home'">← Go back to the Home page</button
>

<div class="flex items-center justify-center p-5">
    <form
        class="w-3/5 h-auto bg-blue-200 p-10 mt-11 border-4 border-blue-500 rounded-3xl"
        method="post"
        action="?/update"
        use:enhance={handleSubmit}
        bind:this={profileForm}
    >
        <div>
            <label for="email">Email</label>
            <input
                class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
                id="email"
                name="email"
                type="text"
                value={session.user.email ?? email}
            />
        </div>

        <div>
            <label for="fullName">Full Name</label>
            <input
                class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
                id="fullName"
                name="fullName"
                type="text"
                value={form?.fullName ?? fullName}
            />
        </div>

        <div>
            <label for="password">Password</label>
            <input
                class="w-full inline-block box-border py-3 px-5 border-2 border-primary rounded-2xl my-4"
                id="password"
                name="password"
                type="password"
                value={form?.password ?? password}
            />
        </div>

        <div>
            <input
                type="submit"
                class="bg-primary text-text cursor-pointer w-full bg-blue-500 text-white py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80"
                value={loading ? "Loading..." : "Update"}
                disabled={loading}
            />
        </div>

        <form method="post" action="?/signout" use:enhance={handleSignOut}>
            <div>
                <button
                    class="bg-primary text-text cursor-pointer w-full bg-blue-500 text-white py-4 px-7 my-7 border-none rounded-3xl hover:opacity-80"
                    disabled={loading}>Sign Out</button
                >
            </div>
        </form>
    </form>
</div>
