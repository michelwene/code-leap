import { ForwardRefRenderFunction, forwardRef } from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const iconButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = ({ icon, type = "button", disabled, onClick }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={`${
        disabled ? "opacity-50 pointer-events-none" : ""
      } border-none outline-none select-none hover:brightness-90 active:brightness-75`}
    >
      {icon}
    </button>
  );
};

export default forwardRef(iconButton);
