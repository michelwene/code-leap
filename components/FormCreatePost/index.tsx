import { FormProvider, useForm } from "react-hook-form";
import Input from "../input";
import InputTextArea from "../InputTextArea";
import Button from "../Button";
import { Services } from "@/actions/services";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/UserSlice";
import { useState } from "react";
import { toast } from "react-toastify";

type FormDataCreatePost = {
  title: string;
  content: string;
};

interface FormCreatePostProps {
  refetch: () => void;
}

export function FormCreatePost({ refetch }: FormCreatePostProps) {
  const [isLoading, setIsLoading] = useState(false);
  const username = useSelector(selectUser);
  const services = new Services();
  const methods = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { handleSubmit, watch, reset } = methods;
  const { title, content } = watch();

  const isDisabled = title === "" || content === "" || isLoading;

  const onSubmit = async (data: FormDataCreatePost) => {
    setIsLoading(true);
    const post = {
      username: username.user,
      title: data.title,
      content: data.content,
    };
    await services.createPost(post);
    setIsLoading(false);
    reset({
      title: "",
      content: "",
    });
    refetch();
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              type="submit"
              text="Create"
              disabled={isDisabled}
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
