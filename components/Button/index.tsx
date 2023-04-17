import { ForwardRefRenderFunction, forwardRef } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { text, type = "button", disabled },
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`${
        disabled ? "opacity-50 pointer-events-none" : ""
      } select-none rounded-lg bg-[#7695EC] font-bold leading-[19px] text-white px-[30px] py-[7px] hover:brightness-90 active:brightness-75 transition-all duration-200`}
    >
      {text}
    </button>
  );
};

export default forwardRef(button);
