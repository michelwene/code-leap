import { Services } from "@/actions/services";
import { CardPost } from "@/components/CardPost";
import { FormCreatePost } from "@/components/FormCreatePost";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Post } from "@/types/Post";
import { useCallback, useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refetch, setRefetch] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const services = new Services();
  const perPage = 10;

  async function getPosts() {
    const data = await services.getPosts({
      page,
      limit: perPage,
    });
    setTotal(data.count);
    const dataFormatted = data.results.map((post: Post) => ({
      ...post,
      created_datetime: new Date(post.created_datetime),
    }));
    setPosts(dataFormatted);
  }

  useEffect(() => {
    getPosts();
    setRefetch(false);
  }, [refetch, page]);

  const onRefetch = useCallback(() => {
    setRefetch(true);
    setPage(1);
  }, []);

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    setPage((prev) => prev - 1);
  }, []);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="min-h-screen bg-[#DDDDDD] font-roboto">
      <div className="lg:w-1/2 mx-auto">
        <Header title="CodeLeap Network" />
        <div className="bg-white flex flex-col p-6 gap-6">
          <div className="border rounded-2xl border-[#999999] p-6 border-solid">
            <h2 className="font-bold text-[22px] leading-[26px] text-black">
              What’s on your mind?
            </h2>
            <FormCreatePost refetch={onRefetch} />
          </div>
          {posts.map((post) => (
            <CardPost post={post} key={post.id} refetch={onRefetch} />
          ))}
          {total > 10 && (
            <Pagination
              nextPage={handleNextPage}
              prevPage={handlePrevPage}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
