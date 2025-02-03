import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

interface FetchProps {
  url: string;
  render: (data: ApiResponse) => JSX.Element;
}

interface CharacterProps {
  name: string;
  image: string;
  url: string;
}
interface ApiResponse {
  results: CharacterProps[];
}

const fetchData = async (url, render) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
        try {
          const response = await fetch(url);
          const results: ApiResponse = await response.json();
          setData(results);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:");
        } finally {
          setLoading(false);
        }
        fetchCharacters();
      },
      [url];
  });

  if (loading) return;
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>;

  return data ? render(data) : null;
};
export default fetchData;
