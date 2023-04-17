import Button from "@/components/Button";
import Input from "@/components/input";
import { useForm, FormProvider } from "react-hook-form";

type FormValues = {
  name: string;
};

export default function Signup() {
  const methods = useForm({
    defaultValues: {
      name: "",
    },
  });
  const { handleSubmit, watch } = methods;
  const name = watch("name");
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="min-h-screen bg-[#DDDDDD] font-roboto">
      <FormProvider {...methods}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col bg-white p-6 border border-[#CCCCCC] rounded-2xl">
            <h1 className="font-bold text-[22px] leading-[26px]">
              Welcome to CodeLeap network!
            </h1>
            <form
              className="mt-6 flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="font-normal leading-[19px] text-left">
                Please enter your username
              </p>
              <Input name="name" placeholder="John doe" />
              <div className="flex justify-end">
                <Button
                  text="ENTER"
                  type="submit"
                  disabled={name === "" && true}
                />
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </div>
  );
}
