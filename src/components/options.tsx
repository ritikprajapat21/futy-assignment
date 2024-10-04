import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Options = () => {
  const location = useLocation();
  const links = [
    { to: "/", element: <span>Upcoming</span> },
    {
      to: "/live",
      element: (
        <>
          <span className="p-1 rounded-full bg-[#B6F30D]" />
          <span>Live</span>
        </>
      ),
    },
    { to: "/completed", element: <span>Completed</span> },
  ];

  return (
    <>
      <div className="flex items-center gap-4 overflow-x-clip">
        {links.map((link, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 * index === 0 ? 0.3 : 0.5 * index }}
            >
              <Link
                to={link.to}
                className={`rounded-md p-2 flex gap-1 items-center font-normal ${location.pathname === link.to ? "bg-[#1A1A1A] border-0 text-white" : "border text-[#3E3E3E]"}`}
              >
                {link.element}
              </Link>
            </motion.div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Options;
