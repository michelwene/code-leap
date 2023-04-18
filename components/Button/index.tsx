import { ForwardRefRenderFunction, forwardRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  bgColor?: string;
  onClick?: () => void;
  textColor?: string;
  border?: string;
  isLoading?: boolean;
}

const button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    text,
    type = "button",
    bgColor,
    textColor,
    disabled,
    border,
    isLoading,
    onClick,
  },
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={`${
        disabled ? "opacity-50 pointer-events-none" : ""
      } select-none rounded-lg ${
        bgColor ?? "bg-[#7695EC]"
      }  font-bold leading-[19px] ${
        textColor ?? "text-white"
      } px-[30px] py-[7px] hover:brightness-90 active:brightness-75 transition-all duration-200 ${border} flex`}
    >
      {text}
      {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
    </button>
  );
};

export default forwardRef(button);
