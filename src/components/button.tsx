import { cn } from "@/lib/utils";

const Button = ({
  icon,
  className,
  text,
}: {
  icon?: React.ReactNode;
  className?: string;
  text?: string;
}) => {
  return (
    <button
      className={cn(
        "border flex gap-2 justify-center items-center font-bold bg-transparent",
        className,
      )}
    >
      <div className="flex gap-2 items-center justify-center">
        {icon}
        {text && (
          <span className="flex items-center justify-center">{text}</span>
        )}
      </div>
    </button>
  );
};

export default Button;
