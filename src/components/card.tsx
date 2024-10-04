import Button from "./button";
import Coin from "./coin";

const Card = ({
  home_team,
  away_team,
  date,
  time,
  fantasy_points,
}: {
  home_team: string;
  away_team: string;
  date: string;
  time: string;
  fantasy_points: string;
}) => {
  return (
    <div className="pt-4 w-full h-fit rounded-md p-2">
      <div className="bg-[#1A1A1A]">
        <div className="w-full p-1 rounded-t-md bg-white relative top-0" />
        <div className="w-fit rounded-3xl bg-white p-1 relative -translate-x-1/2 -top-4 right-1/2 left-1/2">
          <span className="flex gap-1 text-black font-semibold items-center">
            <Coin className="text-black font-bold" />{" "}
            <span className="text-sm">{fantasy_points}</span>
          </span>
        </div>
        <div className="flex items-center justify-center text-sm gap-3 pb-2">
          <span className="font-bold">{home_team}</span>
          <div className="flex flex-col items-center">
            <span className="text-xs text-[#9B9B9B]">{date}</span>
            <span className="font-semibold">{time}</span>
          </div>
          <span className="font-bold">{away_team}</span>
        </div>
        <hr className="w-full bg-white" />
        <div className="flex justify-center p-2">
          <Button
            className="bg-[#009956] p-2 rounded-md border-0"
            text="JOIN GAME"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
