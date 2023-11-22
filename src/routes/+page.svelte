<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="nav-container">
	<h1 class="logo">ZeeHealthy</h1>
	<div class="content-container">
		<div class="content">
			<div class="logo">Home</div>
		</div>
	</div>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="/Shop">Shop</a>
		<a href="/Chat">Chat</a>
	</nav>
</div>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="map">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.4005287721525!2d3.6095234738859636!3d51.49455406366892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c490d0a317d04d%3A0xe74a28385302684c!2sHZ%20University%20of%20Applied%20Sciences!5e0!3m2!1sen!2snl!4v1700571979566!5m2!1sen!2snl"
		width="1260"
		height="600"
		style="border:1;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>

<style>
	:root {
		--primary-color: #012d78;
		--secondary-color: #012d787a;
		--text-color: #deeade;
	}

	.nav-container {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.logo {
		color: var(--text-color);
		font-family: Tahoma;
	}

	a {
		color: var(--text-color);
		font-family: Tahoma;
		text-decoration: none;
		margin: 20px;
	}

	.active {
		text-decoration: underline;
	}

	.content {
		display: flex;
		justify-content: center;
	}

	.para {
		text-align: center;
		width: 30%;
		font-size: 2em;
		background: var(--secondary-color);
		padding: 30px;
		color: var(--text-color);
		font-family: "Agbalumo";
		margin-top: 20px;
		margin-bottom: 20px;
		border-radius: 50px;
	}

	.map {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	iframe {
		border-style: solid;
		border-color: var(--primary-color);
		border-width: 5px;
		border-radius: 20px;
	}
</style>
