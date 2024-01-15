<script>
    import { page } from '$app/stores';
</script>

<div class="h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md max-w-md w-full border-4 border-red-500">
        <h1 class="text-4xl font-bold text-red-500 mb-4 text-center">Error {$page.status}</h1>
        <p class="text-red-500 text-center">{$page.error?.message}</p>
    </div>
</div>

<div class="absolute left-[20px] top-[100px]"><a href="/driver" class="no-underline text-[grey] hover:underline hover:text-black">←Back to new orders</a></div>
