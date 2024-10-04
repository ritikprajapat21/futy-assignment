import { useLoaderData } from "react-router-dom";
import Card from "./card";

const Live = () => {
  // @ts-ignore
  const { live } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[calc(100vh-215px)]">
      {live.length > 0 ? (
        live.map((match: any) => <Card key={match.match_id} {...match} />)
      ) : (
        <div className="mt-4 mx-auto">No Live Matches</div>
      )}
    </div>
  );
};

export default Live;
