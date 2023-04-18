/* eslint-disable react-hooks/rules-of-hooks */
import { ForwardRefRenderFunction, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputTextAreaProps } from "./types";

const inputTextArea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputTextAreaProps
> = ({ name, placeholder, id, ...rest }, ref) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={(inputProps) => (
        <textarea
          name={inputProps.field.name}
          placeholder={placeholder}
          {...rest}
          id={id}
          value={inputProps.field.value}
          onChange={inputProps.field.onChange}
          className="h-[74px] resize-none rounded-lg w-full border-[#777777] border border-solid outline-none py-2 px-3 font-normal text-[14px] leading-4 text-[#CCCCCC]"
        ></textarea>
      )}
    />
  );
};

export default forwardRef(inputTextArea);
