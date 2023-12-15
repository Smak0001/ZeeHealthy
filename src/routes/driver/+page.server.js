export async function load() {
  const res = await fetch('http://localhost:3030/drivers', { method: 'POST' });
  const drivers = await res.json();

  return {
    drivers
  }
}