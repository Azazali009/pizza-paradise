import Button from "@/ui/Button";
import Link from "next/link";
import React from "react";
import { useCurrentUser } from "../auth/useCurrentUser";
import { Rings } from "react-loader-spinner";
import { useLogout } from "../auth/useLogout";

const AuthNav = () => {
  const { User, isLoading, isAuthenticated } = useCurrentUser();
  const { logout, isPending, isError } = useLogout();

  return (
    <div className="flex items-center gap-2 pl-6">
      {isAuthenticated && !isLoading ? (
        <div className=" flex items-center gap-3">
          <p className=" text-lg font-semibold capitalize text-secondary ">
            hey, {User?.user_metadata?.name}
          </p>
          <Button disabled={isPending} onClick={() => logout()}>
            Logout
          </Button>
        </div>
      ) : (
        <>
          {isLoading ? (
            <Rings height={60} color="#E96502" />
          ) : (
            <>
              <Link
                className=" rounded-md border border-secondary bg-secondary px-6 py-1.5 font-semibold capitalize text-white duration-300 hover:bg-primary hover:text-tertiary "
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className=" rounded-md border border-secondary bg-secondary px-6 py-1.5 font-semibold capitalize text-white duration-300 hover:bg-primary hover:text-tertiary "
                href={"/signup"}
              >
                signup
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AuthNav;
