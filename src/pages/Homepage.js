import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import CustomHook from "./CustomHook";

export const Homepage = () => {
  const { data, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      <h1>useQuery Hook</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update Data</button>
      <CustomHook />
    </div>
  );
};
