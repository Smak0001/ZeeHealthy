<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
	href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
	rel="stylesheet"
/>

<div class="header-container">
	<h1 class="header">ZeeHealthy</h1>
	<nav>
		<a href="/">Home</a>
		<a class="active" href="/Shop">Shop</a>
		<a href="/Chat">Chat</a>
	</nav>
</div>

<div class="content-container">
    <div class="content">
		<div class="para para-1">
            Shop
		</div>
	</div>
</div>

<style>
	.header-container {
		background: blue;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		margin-bottom: 20px;
		padding: 0 20px 0 20px;
	}

	.header {
		color: #fff;
		font-family: Tahoma;
	}

	a {
		color: #fff;
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
		background: rgba(127, 157, 252, 0.7);
		padding: 30px;
		color: #fff;
		font-family: "Agbalumo";
		margin-bottom: 30px;
		border-radius: 50px;
	}
</style>