import { motion } from "framer-motion";
import User from "./user";
import Button from "./button";
import Coin from "./coin";
import Search from "./search";

const Navbar = () => {
  return (
    <motion.div className="p-4 flex justify-between items-center border-b-4 border-b-white">
      <div className="flex gap-4">
        <User />
        <Button
          className="border-[#E55C1F] text-[#E55C1F] rounded-3xl px-2"
          icon={<Coin />}
          text="50"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Search />
      </div>
    </motion.div>
  );
};

export default Navbar;
