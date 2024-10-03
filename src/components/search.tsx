import { AnimatePresence, motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import Button from "./button";

const Search = () => {
  const [show, setShow] = useState<Boolean>(false);

  const inputVariants = {
    initial: {
      width: 0,
      opacity: 0,
      scale: 0,
    },
    show: {
      width: "100%",
      opacity: 1,
      scale: 1,
    },
    exit: {
      width: 0,
      opacity: 0,
      scale: 0,
    },
  };

  const handleClick = () => {
    setShow((prev: Boolean) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShow((prev: Boolean) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.form
          className="relative w-full h-[42px] flex-1 items-center"
          layout
          onSubmit={handleSubmit}
        >
          {show ? (
            <>
              <motion.input
                animate="show"
                className="w-full ml-1 px-2 focus:outline-none bg-black rounded-full p-1 border-auto border-2 border-[#E55C1F]"
                exit="exit"
                initial="initial"
                layout
                type="text"
                variants={inputVariants}
              />
              <SearchIcon
                className="w-4 h-4 absolute right-0 top-1/2 -translate-y-3 -translate-x-3 cursor-pointer"
                onClick={handleClick}
              />
            </>
          ) : (
            <motion.div
              className="relative top-1/2 p-0 m-0"
              layout
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SearchIcon
                className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 -translate-x-3 cursor-pointer"
                onClick={handleClick}
              />
            </motion.div>
          )}
        </motion.form>
        {!show && (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button text="How to play" className="rounded-full p-1 text-xs" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;
