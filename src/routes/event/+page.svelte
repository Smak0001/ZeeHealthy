<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  let loadingSubmit = false;
  let loading = false;
  let eventsData: any = [];
  let registrationData: any = [];
  let buttonTexts = {};

  /**
   * Function to update the button text based on the event_id and user_id
   */
  function updateJoinLeaveButtons() {
    eventsData.forEach((event) => {
      buttonTexts[event.id] = joinLeaveButtonText(event.id);
      buttonClasses[event.id] =
        joinLeaveButtonText(event.id) === "Join"
          ? "h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
          : "h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800";
    });
  }

  /**
   * Checks based on the event_id and user_id if the user is already registered for the event to change the button Text
   */
  let joinLeaveButtonText = (event_id) => {
    let user_id = session?.user.id;
    let joinLeaveButtonText = "Join";
    console.log(registrationData);
    registrationData.forEach((registration) => {
      console.log(
        registration.event_id,
        event_id,
        registration.user_id,
        user_id
      );
      if (
        registration.event_id === event_id &&
        registration.user_id === user_id
      ) {
        joinLeaveButtonText = "Leave";
      }
    });
    console.log(joinLeaveButtonText);

    /**
     * Update the buttonTexts object
     */
    buttonTexts[event_id] = joinLeaveButtonText;
    return joinLeaveButtonText;
  };

  $: {
    eventsData.forEach((event) => {
      buttonTexts[event.id] = joinLeaveButtonText(event.id);
    });
  }

  /**
   * Async function to handle the Join and Leave button click
   */
  async function handleJoinLeave(event_id) {
    if (joinLeaveButtonText(event_id) === "Join") {
      await handleJoin(event_id);
    } else {
      await handleLeave(event_id);
    }
    await fetchRegistrations();
    updateJoinLeaveButtons();
  }

  /**
   * Async function to handle joining an event
   */
  async function handleJoin(event_id) {
    const url = "http://localhost:3006/api/event_registration";

    const registrationData = {
      user_id: session?.user.id,
      event_id: event_id,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchRegistrations();
        goto("/event");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /**
   * Async function to handle leaving an event
   */
  async function handleLeave(event_id) {
    let user_id = session?.user.id;
    let registration_id;

    // Find the registration ID
    registrationData.forEach((registration) => {
      if (
        registration.event_id === event_id &&
        registration.user_id === user_id
      ) {
        registration_id = registration.reg_id;
      }
    });

    if (!registration_id) {
      console.error("Registration not found");
      return;
    }

    const url =
      "http://localhost:3006/api/event_registration/" + registration_id;

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        fetchRegistrations();
        goto("/event");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /**
   * Async function to handle fetching the events from the database
   */
  async function fetchEvents() {
    const response = await fetch("http://localhost:3006/api/events");
    eventsData = await response.json();
  }

  async function fetchRegistrations() {
    const response = await fetch(
      "http://localhost:3006/api/event_registration"
    );
    registrationData = await response.json();
  }

  onMount(async () => {
    await fetchEvents();
    await fetchRegistrations();
    updateJoinLeaveButtons();
  });

  onMount(() => {
    // fetchEvents();
  });

  //Changing the button color based on the text
  let buttonClasses = {};

  $: {
    eventsData.forEach((event) => {
      buttonClasses[event.id] =
        joinLeaveButtonText(event.id) === "Join"
          ? "h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
          : "h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800";
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
    Hello, feel free to join an event if available. If you would like to create
    your own event, <a href="/createEvent">CLICK HERE</a>
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
      <p>
        <span class="font-bold">Event Location:</span>
        {event.event_location}
      </p>
      <p>
        <span class="font-bold">Number of Attendees:</span>
        {event.attendees}
      </p>
      <p><span class="font-bold">Description:</span> {event.description}</p>
      <p><span class="font-bold">Phone Number:</span> {event.phone_number}</p>
      <p><span class="font-bold">Event Date:</span> {event.event_date}</p>
      <button
        class={buttonClasses[event.id]}
        on:click={() => handleJoinLeave(event.id)}
        >{buttonTexts[event.id]}</button
      >
    </div>
  {/each}
</div>
