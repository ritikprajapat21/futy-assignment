import { useLoaderData } from "react-router-dom";
import Card from "./card";

const Completed = () => {
  const { completed } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[calc(100vh-215px)]">
      {completed.length > 0 ? (
        completed.map((match: any) => <Card key={match.match_id} {...match} />)
      ) : (
        <div className="pt-4 mx-auto">No Completed Matches</div>
      )}
    </div>
  );
};

export default Completed;
