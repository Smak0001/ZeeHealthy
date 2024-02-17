<script lang="ts">
    import { onMount } from "svelte";
    import type { SubmitFunction } from "@sveltejs/kit";
    // import { enhance } from "$app/forms";

    export let data;

    let { supabase, session } = data;
    $: ({ supabase, session }  = data);

    let loadingSubmit =false;
    let loading = false;
    let eventsData: any = [];

    const handleSubmit: SubmitFunction = () => {
    loadingSubmit = true;
    return async () => {
      loadingSubmit = false;
    };
  };

async function fetchEvents() {
		const response = await fetch("http://localhost:3006/api/events");
		eventsData = await response.json();
	}

	onMount(async () => {
		await fetchEvents();
	});

  onMount(() => {
    fetchEvents();
  });
</script>

<div
  class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
>
	<div class="ml-4">
		<a href="/home" class="text-4xl font-bold">ZeeHealthy</a>
	</div>
	<nav class="flex justify-end items-center mr-4">
		<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
		<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
		<a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
        <a href="/event" class="text-white hover:text-gray-300 mr-4">Events</a>
		<a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a>
		<a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a>
		<a href="/shoppingCart" class="mr-4"
			><i class="fa fa-shopping-basket" aria-hidden="true"></i></a
		>
		<a href="/profile" class="text-white hover:text-gray-300 mr-4"
			>{session?.user.email}</a
		>
	</nav>
</div>

<div class="grid place-content-center m-5 text-white">
  <h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Events</h1>
</div>

<div
  class="flex justify-center items-center m-1 bg-primary rounded-2xl p-6 bg-blue-500 text-white py-4"
>
<h1 class="text-text font-bold text-2xl">
    Hello, feel free to join an event if available. If you would like to create your own event, <a href="/createEvent">click here</a>
</h1>
</div>

<div
	class="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 p-4"
>
	{#each eventsData as event}
		<div
			class="bg-white rounded-lg shadow-lg p-4 transform transition duration-500 ease-in-out hover:scale-105"
		>
			<p class="text-lg">
				<span class="font-bold">Event Name:</span>
				{event.event_name}
			</p>
			<!-- <p><span class="font-bold">Event ID:</span> {event.id}</p> -->
			<p><span class="font-bold">Event Location:</span> {event.event_location}</p>
            <p><span class="font-bold">Number of Attendees:</span> {event.attendees}</p>
            <p><span class="font-bold">Description:</span> {event.description}</p>
            <p><span class="font-bold">Phone Number:</span> {event.phone_number}</p>
            <p><span class="font-bold">Event Date:</span> {event.event_date}</p>
			<button
				class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
				on:click={() => handleJoin(event.id)}>Join</button
			>
		</div>
	{/each}
</div>