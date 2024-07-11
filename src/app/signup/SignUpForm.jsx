"use client";
import Button from "@/ui/Button";
import FormRow from "@/ui/FormRow";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  const { createUser, isCreating } = useSignUp();

  function onSubmit(data) {
    console.log(data);
    createUser(data, {
      onSuccess: () => {
        router.push("/");
        reset();
      },
    });
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className=" shadow-shadowTwo dark:shadow-shadowOne relative z-20 mx-5 mt-3 w-full space-y-6 rounded-xl px-3 py-10 text-tertiary shadow-xl backdrop-blur-xl sm:mx-0 sm:max-w-2xl sm:space-y-8 sm:px-8"
    >
      <h2 className=" mb-10 text-center text-lg font-semibold capitalize text-primary dark:text-sky-300 sm:mb-16 sm:text-3xl">
        Create your account
      </h2>

      <FormRow lable="Name" error={errors?.name?.message}>
        <input
          type="text"
          placeholder="Enter your name"
          className={`shadow-shadowTwo dark:text-lightText h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent dark:border-b-[1px] dark:bg-[#191b1e] dark:shadow-none sm:w-3/4`}
          {...register("name", {
            required: "Field is required.",
          })}
          disabled={isCreating}
        />
      </FormRow>
      <FormRow lable="email" error={errors?.email?.message}>
        <input
          type="email"
          placeholder="Enter email"
          className={`shadow-shadowTwo dark:text-lightText h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent dark:border-b-[1px] dark:bg-[#191b1e] dark:shadow-none sm:w-3/4`}
          {...register("email", {
            required: "Field is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isCreating}
        />
      </FormRow>
      <FormRow lable="password" error={errors?.password?.message}>
        <input
          type="password"
          placeholder="Enter password"
          className={`shadow-shadowTwo dark:text-lightText h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent dark:border-b-[1px] dark:bg-[#191b1e] dark:shadow-none sm:w-3/4`}
          {...register("password", {
            required: "Field is required.",
            minLength: {
              value: 6,
              message: "Password should be at least 6 character long.",
            },
          })}
          disabled={isCreating}
        />
      </FormRow>
      <FormRow
        lable="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <input
          type="password"
          placeholder="re-type password"
          className={`shadow-shadowTwo dark:text-lightText h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent dark:border-b-[1px] dark:bg-[#191b1e] dark:shadow-none sm:w-3/4`}
          {...register("confirmPassword", {
            required: "Field is required.",
            validate: (val) =>
              val === getValues().password || "Password shoudl be match",
          })}
          disabled={isCreating}
        />
      </FormRow>
      <div>
        <Button disabled={isCreating} type="submit">
          Sign up
        </Button>
        <div className="divider text-xs sm:text-base">OR</div>
      </div>
      <div className=" flex flex-col justify-between gap-4 sm:flex-row sm:gap-0">
        <p className="whitespace-nowrap font-light">
          Do you have an account?
          <Link href={"/login"} className="link ml-2 capitalize text-tertiary">
            login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
