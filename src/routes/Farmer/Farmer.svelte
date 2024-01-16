<!-- <script>
    import { onMount } from 'svelte';
    import supabase from '../supabase';
  
    let farmer = {
      name: '',
      age: 0,
      // Add other fields as needed
    };
  
    const addFarmer = async () => {
      try {
        const { data, error } = await supabase.from('farmers').insert([farmer]);
        if (error) throw error;
        console.log('Farmer added successfully:', data);
      } catch (error) {
        console.error('Error adding farmer:', error.message);
      }
    };
  </script>
  
  <form on:submit|preventDefault={addFarmer}>
    <label>
      Name:
      <input bind:value={farmer.name} />
    </label>
  
    <label>
      Age:
      <input type="number" bind:value={farmer.age} />
    </label>
  
    
    <button type="submit">Add Farmer</button>
  </form>
   -->