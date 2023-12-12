<script lang="ts">
export let data;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="header-container">
	<h1 class="header">ZeeHealthy</h1>
	<nav>
		<a class="active" href="/home">Home</a>
		<a href="/shop">Shop</a>
		<a href="/chat">Chat</a>
		<a href="/profile">{session?.user.email}</a>
		<!-- <a href="/chat">{profile?.full_name}</a> -->
	</nav>
</div>
<div class="content-container">
	<div class="content">
		<div class="para para-1">Home</div>
	</div>
</div>

<style>
	:root {
		--primary-color: #012d78;
		--secondary-color: #012d787a;
		--text-color: #deeade;
	}

	.header-container {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.header {
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
		margin-bottom: 30px;
		border-radius: 50px;
	}
</style>
