import { writable } from "svelte/store"


// export const createSearchStore = (data:any) => {

//     const { subscribe, set , update } = writable({
//         data: data,
//         filtered: data,
//         search: '',
//     })

//     return {
//         subscribe,
//         set,
//         update,
//     }
// }

// export const searchHandler = (store: { data: any; filtered: any; search: any; }) => {
//     const searchTerm = (store.search || "").toLowerCase();
//     store.filtered = store.data.filter((item: { searchTerm: string; }) => {
//         return item.searchTerm?.toLowerCase().includes(searchTerm);
//     });
// };
