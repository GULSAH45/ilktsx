import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

export interface FetchProps {
  url: string;
  render: (data: ApiResponse) => JSX.Element;
}

export interface CharacterProps {
  id: number;
  name: string;
  image: string;
  url: string;
}
export interface ApiResponse {
  results: CharacterProps[];
}

export const FetchData: React.FC<FetchProps> = ({ url, render }) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        const result: ApiResponse = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [url]);

  if (loading) return <Spinner animation="border" />;

  return data ? render(data) : null;
};

export default FetchData;
