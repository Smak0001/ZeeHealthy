<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import logo from "$lib/images/Zeehealthy-logo.png";

	export let data;

	let textArray = [
		'"Nourish your body, fuel your life. Embrace the power of healthy habits."',
		'"A healthy outside starts from the inside. Cultivate habits that promote wellness."',
		'"Small changes lead to big results. Choose healthy habits, one day at a time."',
		'"Wellness is a journey, not a destination. Establish habits that last a lifetime."',
		'"Your body is a reflection of your lifestyle. Make each choice a step towards health."',
		'"Every positive choice is a step toward a healthier you. Your habits define your future.',
		'"Healthy habits empower you to take control of your well-being. Start today, thrive tomorrow."',
		'"Invest in yourself through healthy habits. Your body will thank you with a vibrant life."',
		'"A healthy lifestyle is not a trend; it is a lifelong commitment to self-love and well-being."',
		'"Celebrate progress, not perfection. Consistent healthy habits lead to extraordinary results."',
	];

	let currentIndex = 0;
	let interval: string | number | NodeJS.Timeout | undefined;

	onMount(() => {
		// Start a timer to change the text every 2 seconds
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % textArray.length;
		}, 10000);
	});

	onDestroy(() => {
		// Clean up the timer when the component is destroyed
		clearInterval(interval);
	});

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

{#if session?.user.email === "admin@admin.com"}
	<div
		class="header-container bg-blue-500 text-white py-4 flex justify-between items-center"
	>
		<div class="ml-4">
			<a href="/home" class="text-4xl font-bold">ZeeHealthy</a>
		</div>
		<nav class="flex justify-end items-center mr-4">
			<a href="/" class="text-white hover:text-gray-300 mr-4">Home</a>
			<a href="/Admin" class="text-white hover:text-gray-300 mr-4">Admin</a>
			<a href="/shop" class="text-white hover:text-gray-300 mr-4">Shop</a>
			<a href="/driver" class="text-white hover:text-gray-300 mr-4">Driver</a>
			<!-- <a href="/farmer" class="text-white hover:text-gray-300 mr-4">Farmer</a> -->
			<!-- <a href="/chat" class="text-white hover:text-gray-300 mr-4">Chat</a> -->
			<a href="/shoppingCart" class="mr-4"
				><i class="fa fa-shopping-basket" aria-hidden="true"></i></a
			>
			<a href="/profile" class="text-white hover:text-gray-300 mr-4"
				>{session?.user.email}</a
			>
		</nav>
	</div>
{:else}
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
{/if}

<div class="main-content">
	<div class="grid place-content-center mx-5 mt-5 text-white">
		<h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Home</h1>
	</div>

	<div
		class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 px-32 pt-10 text-white cursor-default"
	>
		<div
			class="col-span-3 mx-5 p-5 text-2xl bg-blue-300 shadow-lg rounded-lg text-left transform transition duration-500 ease-in-out hover:scale-105"
		>
			<h1>
				{textArray[currentIndex]}
			</h1>
		</div>
	</div>

	<div class="flex justify-center gap-x-20 mt-16">
		<div class="flex flex-col mt-20 w-1/3 text-blue-500">
			<h1 class="text-3xl">
				<span class="font-bold text-4xl">Welcome to ZeeHealthy:</span><br />
				Your Gateway to Affordable, Locally-Sourced, Organic Produce!
			</h1>
			<p class="mt-5 text-xl">
				Discover a world where fresh and affordable go hand-in-hand.
				<span class="font-bold">ZeeHealthy</span> connects students with local farmers,
				ensuring you enjoy vibrant fruits and veggies without straining your budget.
			</p>
		</div>
		<div>
			<img class="h-96" src={logo} alt="" />
		</div>
	</div>

	<div
		class="flex justify-center gap-x20 mt-32 mb-20 text-white cursor-default"
	>
		<div
			class="w-1/2 mx-10 p-5 text-2xl bg-blue-300 shadow-lg rounded-lg text-left transform transition duration-500 ease-in-out hover:scale-105"
		>
			<h1 class="font-bold text-3xl">Why Choose ZeeHealthy?</h1>
			<p class="text-md pt-10">
				<span class="font-bold">• Local Love:</span> Support nearby farmers and build
				a sustainable community while enjoying farm-fresh produce.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Student-Friendly Prices:</span> Stay healthy on
				a budget with our wallet-friendly prices tailored for students.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Seasonal Delights:</span> Embrace the flavors of
				each season with our diverse, nutrient-packed selection.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Convenient Ordering:</span> Skip the supermarket
				hassle; order your favorites with just a few clicks.
			</p>
		</div>
		<div
			class="w-1/2 mx-10 p-5 text-2xl bg-blue-300 shadow-lg rounded-lg text-left transform transition duration-500 ease-in-out hover:scale-105"
		>
			<h1 class="font-bold text-3xl">How It Works?</h1>
			<p class="text-md pt-10">
				<span class="font-bold">• Farm Exploration:</span> Browse profiles of local
				farmers and explore their delicious offerings.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Easy Ordering:</span> Pick your favorites, place
				your order, and support local agriculture directly.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Local Delivery Points:</span> Convenient deliveries
				will ensure that you will recieve the order directly at your campus.
			</p>
			<p class="text-md pt-5">
				<span class="font-bold">• Enjoy, Repeat:</span> Revel in the goodness of
				locally-sourced, budget-friendly delights, and repeat!
			</p>
		</div>
	</div>
</div>

<style>
	.main-content {
		animation: content-entry 1s ease-out;
	}

	@keyframes content-entry {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	img {
		animation: floatImage 4s ease-in-out infinite;
	}

	@keyframes floatImage {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-1rem);
		}

		100% {
			transform: translateY(0);
		}
	}
</style>
