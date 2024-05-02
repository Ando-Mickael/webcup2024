import useSWR from "swr";
import Experience from "../components/Experience";
import { apiUrl } from "../libs/api";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IndexPage() {
  const { data, isLoading, error } = useSWR(`${apiUrl}/hello`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Experience />
    </div>
  );
}
