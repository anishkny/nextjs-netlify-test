import useSWR from 'swr';

const baseUrl = '/.netlify/functions';
const fetcher = (partialUrl) =>
  fetch(`${baseUrl}${partialUrl}`).then((res) => res.json());

function HomePage() {
  const { data, error } = useSWR(`/hello`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      Loaded from API: <pre>{JSON.stringify(data, null, 2)}!</pre>
    </div>
  );
}
export default HomePage;
