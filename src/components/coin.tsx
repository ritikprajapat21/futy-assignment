import { cn } from "@/lib/utils";

const Coin = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "h-5 border-[#E55C1F] text-xs p-1 border-2 italic text-center font-extrabold flex justify-center items-center rounded-full bg-transparent",
        className,
      )}
    >
      F
    </span>
  );
};

export default Coin;
