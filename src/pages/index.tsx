import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "client" }]);

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
};

export default Home;
