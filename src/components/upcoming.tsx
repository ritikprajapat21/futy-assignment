import { useLoaderData } from "react-router-dom";
import Card from "./card";

const Upcoming = () => {
  const { upcoming } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[calc(100vh-215px)]">
      {upcoming.length > 0 ? (
        upcoming.map((match: any) => <Card key={match.match_id} {...match} />)
      ) : (
        <div className="pt-4 mx-auto">No Upcoming Matches</div>
      )}
    </div>
  );
};

export default Upcoming;
