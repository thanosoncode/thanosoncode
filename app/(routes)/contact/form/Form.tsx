"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ToastMessage from "../../../components/toast/ToastMessage";

const FormData = z.object({
  email: z.string().min(1, { message: "Please add an email." }).email({
    message: "Please add a valid email",
  }),
  name: z.string().min(1, { message: "Please add a name." }),
  message: z.string().min(1, { message: "Please add a message." }).max(1000),
});

type FormData = z.infer<typeof FormData>;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(FormData) });

  const sendEmail = async (data: FormData) => {
    if (!data) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await emailjs.sendForm(
        "service_kixoi7j",
        "template_4x5wobq",
        formRef.current ?? "",
        "user_bm37QJFLQoyKqlOoNcG0e",
      );
      if (response.text !== "OK") {
        setIsLoading(false);
        formRef.current && formRef.current.reset();
        toast.custom(
          <ToastMessage
            icon={<AiOutlineClose />}
            status="Something went wrong :/"
            text="Please try again later"
          />,
        );
      }
      setIsLoading(false);
      toast.custom(
        <ToastMessage
          icon={<FaCheck />}
          status="Email sent :D"
          text="Thanks for taking the time to write it"
        />,
      );
      formRef.current && formRef.current.reset();
      return;
    } catch (error) {
      setIsLoading(false);
      formRef.current && formRef.current.reset();
      toast.custom(
        <ToastMessage
          icon={<AiOutlineClose />}
          status="Something went wrong :/"
          text="Please try again later"
        />,
      );
    }
  };

  return (
    <form
      className="flex max-w-[400px] flex-col gap-6"
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
    >
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="name" className="text-medium-color">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="rounded-md border border-secondary-color bg-background-color px-2 py-1.5 placeholder:text-sm focus:border-primary-color focus:outline-none"
          placeholder="David Webb"
        />
        {<p className="text-sm text-red-400">{errors.name?.message}</p>}
      </fieldset>
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="email" className="text-medium-color">
          Email
        </label>
        <input
          {...register("email")}
          type="text"
          id="email"
          className="rounded-md border border-secondary-color bg-background-color px-2 py-1.5 placeholder:text-sm focus:border-primary-color focus:outline-none"
          placeholder="david@webb.com"
        />
        {<p className="text-sm text-red-400">{errors.email?.message}</p>}
      </fieldset>
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="message" className="text-medium-color">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          className="min-h-[160px] resize-y rounded-md border border-secondary-color bg-background-color px-2 py-1.5  placeholder:text-sm focus:border-primary-color focus:outline-none"
          placeholder="How can I help you?"
        />
        {<p className="text-sm text-red-400">{errors.message?.message}</p>}
      </fieldset>
      <button
        disabled={isLoading}
        type="submit"
        className="rounded-md border border-background-color bg-white px-4 py-1.5 text-background-color duration-200 hover:border-primary-color hover:bg-background-color hover:text-primary-color disabled:border-background-color disabled:bg-neutral-500"
      >
        {isLoading ? "Sending..." : "Send email"}
      </button>
    </form>
  );
};

export default Form;
