"use client";
import Button from "@/ui/Button";
import FormRow from "@/ui/FormRow";
import Link from "next/link";
import React, { useEffect } from "react";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { useCurrentUser } from "@/components/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/ui/ErrorMessage";

const LoginForm = () => {
  const router = useRouter();
  const { login, isLogging } = useLogin();
  const { isAuthenticated, isLoading } = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    login(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  }

  useEffect(() => {
    if (isAuthenticated) return router.push("/");
  }, [isAuthenticated, router]);
  return (
    <>
      {isAuthenticated ? (
        <ErrorMessage>Your did not use this resource</ErrorMessage>
      ) : (
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className=" mx-5 mt-3 w-full space-y-6 rounded-xl px-3 py-10 text-tertiary shadow-xl backdrop-blur-xl sm:mx-0 sm:max-w-2xl sm:space-y-10 sm:px-8"
        >
          <h2 className=" mb-10 text-center text-lg font-semibold capitalize text-primary dark:text-sky-300 sm:mb-16 sm:text-3xl">
            Login to your account
          </h2>

          <FormRow lable="email" error={errors?.email?.message}>
            <input
              type="email"
              placeholder="Enter email"
              className={` h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent sm:w-3/4`}
              {...register("email", {
                required: "Field is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              disabled={isLogging}
            />
          </FormRow>
          <FormRow lable="password" error={errors?.password?.message}>
            <input
              type="password"
              placeholder="Enter password"
              className={`shadow-shadowTwo h-10 w-full rounded-lg border-gray-700 bg-white p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent sm:w-3/4`}
              {...register("password", {
                required: "Field is required.",
              })}
              disabled={isLogging}
            />
          </FormRow>
          <div>
            <Button disabled={isLogging} type="submit">
              login
            </Button>
            <div className="divider text-xs sm:text-base">OR</div>
          </div>
          <div className=" flex flex-col justify-between gap-4 sm:flex-row sm:gap-0">
            <p className="whitespace-nowrap font-light">
              Do not have an account?
              <Link
                href={"/signup"}
                className="link ml-2 capitalize text-tertiary"
              >
                signup
              </Link>
            </p>
            <Link className="link ml-2 capitalize text-tertiary" href={"/"}>
              forgot password?
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
