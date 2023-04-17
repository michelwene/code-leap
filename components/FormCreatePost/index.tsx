import { FormProvider, useForm } from "react-hook-form";
import Input from "../input";
import InputTextArea from "../InputTextArea";
import Button from "../Button";
export function FormCreatePost() {
  const methods = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { handleSubmit, watch } = methods;
  const { title, content } = watch();

  const isDisabled = title === "" || content === "";

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col mt-6">
        <form>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="font-normal leading-[19px] text-black text-base"
            >
              Title
            </label>
            <Input name="title" placeholder="Hello world" id="title" />
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <label
              htmlFor="content"
              className="font-normal leading-[19px] text-black text-base"
            >
              Content
            </label>
            <InputTextArea
              name="content"
              placeholder="Content here"
              id="content"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit" text="Create" disabled={isDisabled} />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
