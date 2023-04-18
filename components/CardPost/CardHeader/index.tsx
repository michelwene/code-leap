import IconButton from "@/components/IconButton";
import { ModalDeletePost } from "@/components/ModalDeletePost";
import { ModalEditPost } from "@/components/ModalEditPost";
import { selectUser } from "@/redux/UserSlice";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { useSelector } from "react-redux";
import { CardHeaderProps } from "../types";

export function CardHeader({ post, refetch }: CardHeaderProps) {
  const username = useSelector(selectUser);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [postClicked, setPostClicked] = useState(null as number | null);

  const handleOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
    setPostClicked(post.id);
  };

  const handleOpenEditModal = () => {
    setIsOpenEditModal(true);
  };

  const onRequestCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setPostClicked(null);
  };

  const onRequestCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-[#7695EC] p-6 rounded-tr-2xl rounded-tl-2xl gap-4">
        <div>
          <h3 className="font-bold text-[22px] leading-[26px] text-white break-all">
            {post.title}
          </h3>
        </div>
        {username.user === post.username && (
          <div className="flex gap-6">
            <IconButton
              icon={<MdDeleteForever className="text-[30px] text-white" />}
              onClick={handleOpenDeleteModal}
            />
            <IconButton
              icon={<TiEdit className="text-[30px] text-white" />}
              onClick={handleOpenEditModal}
            />
          </div>
        )}
      </div>
      {isOpenDeleteModal && postClicked && (
        <ModalDeletePost
          isOpen={isOpenDeleteModal}
          handleClose={onRequestCloseDeleteModal}
          id={postClicked}
          refetch={refetch}
        />
      )}
      {isOpenEditModal && (
        <ModalEditPost
          isOpen={isOpenEditModal}
          handleClose={onRequestCloseEditModal}
          post={post}
          refetch={refetch}
        />
      )}
    </>
  );
}
