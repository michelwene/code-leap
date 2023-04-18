import { Services } from "@/actions/services";
import Button from "../Button";
import { ModalLayout } from "../Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { ModalDeletePostProps } from "./types";

export function ModalDeletePost({
  handleClose,
  isOpen,
  id,
  refetch,
}: ModalDeletePostProps) {
  const [isLoading, setIsLoading] = useState(false);
  const services = new Services();
  const handleDelete = async () => {
    setIsLoading(true);
    await services.deletePost(id);
    setIsLoading(false);
    handleClose();
    refetch();
  };
  return (
    <ModalLayout isOpen={isOpen}>
      <div className="flex items-start justify-between p- ">
        <h3 className="font-bold text-[22px] leading-[26px] text-black">
          Are you sure you want to delete this item?
        </h3>
      </div>
      <div className="flex items-center justify-end mt-10 gap-4">
        <Button
          text="Cancel"
          onClick={handleClose}
          bgColor="bg-white"
          textColor="text-black"
          border="border-[#999999] border"
          disabled={isLoading}
        />
        <Button
          bgColor="bg-[#FF5151]"
          text="Delete"
          onClick={handleDelete}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </div>
    </ModalLayout>
  );
}
