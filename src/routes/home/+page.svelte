<script lang="ts">
	import { onDestroy, onMount } from "svelte";

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

<div class="grid place-content-center m-5 text-white">
	<h1 class="bg-blue-500 rounded-xl p-4 text-2xl cursor-default">Home</h1>
</div>

<div
	class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 p-32 text-white cursor-default"
>
	<div
		class="col-span-3 m-5 p-5 text-2xl bg-blue-300 shadow-lg rounded-lg text-left transform transition duration-500 ease-in-out hover:scale-105"
	>
		<h1>
			{textArray[currentIndex]}
		</h1>
	</div>
	<div
		class="col-span-2 row-span-5 m-5 p-5 bg-blue-300 shadow-lg rounded-lg text-xl"
	>
		Cheapest products this week are from this farm! Follow the link to visit
		the farmer's shop!
	</div>
	<div class="row-span-5 m-5 p-5 bg-blue-300 shadow-lg rounded-lg text-xl">
		Drivers schedule. Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quis rem amet dignissimos placeat nam eaque ad autem sapiente
		incidunt sunt, quam aperiam provident porro nostrum quod eligendi nobis
		veritatis cupiditate!
	</div>
</div>

<style>
	.grid {
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
</style>
