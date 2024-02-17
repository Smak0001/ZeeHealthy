<script lang="ts">
	import { goto } from "$app/navigation";
	// import { writable } from 'svelte/store'
	// import { onMount } from "svelte";

	let iD: Int8Array;
	let name: Text;
	let location: Text;
	let eventAttendees: Text;
	let eventDescription: Text;
	let phoneNumber: Text;
	let eventDate: Text;

	function createEvent() {
		const url = "http://localhost:3006/api/events";

		const eventData = {
			id: iD,
			event_name: name,
			event_location: location,
			attendees: eventAttendees,
			description: eventDescription,
			phone_number: phoneNumber,
			event_date: eventDate,
		};

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify(eventData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				goto("/event");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
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
		<!-- <a href="/profile" class="text-white hover:text-gray-300 mr-4"
			>{session?.user.email}</a
		> -->
	</nav>
</div>

<div class="grid place-content-center m-5 text-white">
  <h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Create your Event</h1>
</div>

<form id= "eventForm">
	<div>
		<label for="eventID" class="block text-2xl font-bold text-[#3730A3]">Event ID</label>
		<input
			type="eventID"
			id="eventID"
			name="eventID"
			required
			bind:value={iD}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="eventName" class="block text-2xl font-bold text-[#3730A3]">Event Name</label>
		<input
			type="eventName"
			id="eventName"
			name="eventName"
			required
			bind:value={name}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="eventLocation" class="block text-2xl font-bold text-[#3730A3]">Event Location</label>
		<input
			type="eventLocation"
			id="eventLocation"
			name="eventLocation"
			required
			bind:value={location}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="eventAttendees" class="block text-2xl font-bold text-[#3730A3]">Event Attendees</label>
		<input
			type="eventAttendees"
			id="eventAttendees"
			name="eventAttendees"
			required
			bind:value={eventAttendees}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="eventDescription" class="block text-2xl font-bold text-[#3730A3]">Event Description</label>
		<input
			type="eventDescription"
			id="eventDescription"
			name="eventDescription"
			required
			bind:value={eventDescription}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="phoneNumber" class="block text-2xl font-bold text-[#3730A3]">phone number</label>
		<input
			type="phoneNumber"
			id="phoneNumber"
			name="phoneNumber"
			required
			bind:value={phoneNumber}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>
	<div>
		<label for="eventDate" class="block text-2xl font-bold text-[#3730A3]">Event Date</label>
		<input
			type="eventDate"
			id="eventDate"
			name="eventDate"
			required
			bind:value={eventDate}
			class="w-full inline-block box-border py-3 px-5 rounded-2xl mb-5 mt-2"
			/>
	</div>

	<button
	type="submit"
	on:click={createEvent}
	class="absolute bottom-4 right-4 bg-[#3730A3] text-white px-4 py-2 rounded-md text-2xl font-bold"
	>Submit</button
>
</form>