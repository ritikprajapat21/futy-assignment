import { motion } from "framer-motion";

const User = () => {
  return (
    <motion.div
      whileHover={{ border: "2px solid #E55C1F", scale: 1.2 }}
      transition={{ duration: 0.3 }}
      className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer font-bold p-2 bg-gray-400"
    >
      RP
    </motion.div>
  );
};

export default User;
