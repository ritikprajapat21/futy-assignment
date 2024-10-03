import { motion } from "framer-motion";
import Coin from "./coin";
import { Gamepad2, LoaderPinwheel, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const links = [
    { icon: User, link: "/profile", text: "Profile" },
    { icon: Gamepad2, link: "/", text: "Games" },
    { icon: LoaderPinwheel, link: "/score", text: "Score" },
    { icon: Coin, link: "/coins", text: "Coins" },
  ];

  const location = useLocation();
  const initial = {
    scale: 1.5,
    translateY: -5,
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(192, 205, 22, 1)",
  };

  return (
    <>
      <motion.div className="px-4 pb-4 flex gap-2 justify-between items-center">
        {links.map((link) => {
          return (
            <Link to={link.link} key={link.link}>
              <motion.div
                initial={location.pathname === link.link ? initial : {}}
                whileHover={{
                  scale: 1.5,
                  translateY: -5,
                  rotate: 360,
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "rgba(192, 205, 22, 1)",
                }}
                className="rounded-full"
              >
                <link.icon className="w-10 h-10 text-lg" />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </>
  );
};

export default Footer;
