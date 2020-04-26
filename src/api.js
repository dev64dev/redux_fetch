export async function fetchData() {
  const res = await fetch('/VisualizatorApi');
  if (res.ok === false) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  console.log('[from API] ', data);
  return data;
}
