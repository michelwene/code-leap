/* eslint-disable react-hooks/rules-of-hooks */
import { ForwardRefRenderFunction, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  placeholder: string;
  id?: string;
}

const input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, id, ...rest },
  ref
) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={(inputProps) => (
        <input
          {...rest}
          name={inputProps.field.name}
          ref={ref}
          id={id}
          type="text"
          value={inputProps.field.value ?? ""}
          onChange={inputProps.field.onChange}
          placeholder={placeholder}
          className="rounded-lg w-full border-[#777777] border border-solid outline-none py-2 px-3 font-normal text-[14px] leading-4 text-[#CCCCCC]"
        />
      )}
    />
  );
};

export default forwardRef(input);
