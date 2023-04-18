import { Post } from "@/types/Post";
import Button from "../Button";
import { ModalLayout } from "../Modal";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../input";
import InputTextArea from "../InputTextArea";
import { Services } from "@/actions/services";
import { useState } from "react";
import { toast } from "react-toastify";
import { ModalEditPostProps, formEditPost } from "./types";

export function ModalEditPost({
  handleClose,
  isOpen,
  post,
  refetch,
}: ModalEditPostProps) {
  const [isLoading, setIsLoading] = useState(false);
  const services = new Services();
  const methods = useForm({
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const { handleSubmit, watch } = methods;

  const onEdit = async (data: formEditPost) => {
    setIsLoading(true);
    const newPost = {
      title: data.title,
      content: data.content,
    };
    await services.updatePost(post.id, newPost);
    setIsLoading(false);
    handleClose();
    refetch();
  };

  const { title, content } = watch();

  const isDisabled = title === "" || content === "" || isLoading;
  return (
    <FormProvider {...methods}>
      <ModalLayout isOpen={isOpen}>
        <div className="flex items-start justify-between flex-col">
          <h3 className="font-bold text-[22px] leading-[26px] text-black">
            Edit item
          </h3>
          <div className="flex flex-col mt-6 w-full">
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
            </form>
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 gap-4">
          <Button
            text="Cancel"
            onClick={handleClose}
            bgColor="bg-white"
            textColor="text-black"
            border="border-[#999999] border"
            disabled={isLoading}
          />
          <Button
            bgColor="bg-[#47B960]"
            text="Save"
            onClick={handleSubmit(onEdit)}
            disabled={isDisabled}
            isLoading={isLoading}
          />
        </div>
      </ModalLayout>
    </FormProvider>
  );
}
