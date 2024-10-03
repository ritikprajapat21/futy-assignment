import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "./button";

const Options = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className={`rounded-md ${location.pathname === "/" ? "bg-[#1A1A1A] border-0 text-white" : "border text-[#3E3E3E]"} p-2 font-normal`}
        >
          Upcomping
        </Link>
        <Link
          to="/live"
          className={`rounded-md p-2 font-normal flex gap-1 items-center ${location.pathname === "/live" ? "bg-[#1A1A1A] border-0 text-white" : "border text-[#3E3E3E]"}`}
        >
          <span className="p-1 rounded-full bg-[#B6F30D]" />
          Live
        </Link>
        <Link
          to="/completed"
          className={`rounded-md p-2 font-normal ${location.pathname === "/completed" ? "bg-[#1A1A1A] border-0 text-white" : "border text-[#3E3E3E]"}`}
        >
          Completed
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Options;
