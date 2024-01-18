<script lang="ts">
    export let data;

    let { session, supabase } = data;
    $: ({ session, supabase } = data);
</script>

<div class="flex flex-row justify-center">
    <div class="bg-blue-500 rounded-xl text-md py-2 px-5 text-white">
        <a class="hover:text-gray-300 mr-4" href="Admin/users">Users</a>
        <a class="hover:text-gray-300 mr-4" href="Admin/products">Products</a>
        <a class="hover:text-gray-300 mr-4" href="Admin/orders">Orders</a>
        <a class="hover:text-gray-300" href="Admin/chat">Chat</a>
    </div>
</div>

<div
    class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 p-20 text-white cursor-default"
>
    <div
        class="col-span-3 m-5 p-5 text-2xl bg-blue-300 shadow-lg rounded-lg text-left transform transition duration-500 ease-in-out hover:scale-105"
    >
        <h1>
            Hello, {session?.user.email}
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
