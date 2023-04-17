import { CardPost } from "@/components/CardPost";
import { FormCreatePost } from "@/components/FormCreatePost";
import { Header } from "@/components/Header";
import InputTextArea from "@/components/InputTextArea";
import Button from "@/components/Button";
import Input from "@/components/input";
import { useForm, FormProvider } from "react-hook-form";

const post = [
  {
    id: 1,
    title: "My First Post at CodeLeap Network! ",
    content:
      "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.",
    username: "@Victor",
    created_datetime: new Date(),
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#DDDDDD] font-roboto">
      <div className="lg:w-1/2 mx-auto">
        <Header title="CodeLeap Network" />
        <div className="bg-white flex flex-col p-6 gap-6">
          <div className="border rounded-2xl border-[#999999] p-6 border-solid">
            <h2 className="font-bold text-[22px] leading-[26px] text-black">
              What’s on your mind?
            </h2>
            <FormCreatePost />
          </div>
          {post.map((post) => (
            <CardPost post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
