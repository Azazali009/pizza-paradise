"use client";
import { useCart } from "@/components/shopping cart/useCart";
import Button from "@/ui/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateOrder } from "./useCreateOrder";
import { useDeleteCart } from "../cart/useDeleteCart";
import { useRouter } from "next/navigation";

const CreateOrder = () => {
  const router = useRouter();
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const { createOrder, isPending } = useCreateOrder();
  const { deleteAllCart, isDeleting } = useDeleteCart();

  const isWorking = isPending || isDeleting;
  const { Cart: CartData } = useCart();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const apiKey = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY;

  async function getUserAddress(e) {
    try {
      setLoading(true);
      e.preventDefault();
      let url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${position.latitude}%2C+${position.longitude}&pretty=1&no_annotations=1`;

      const loc = await fetch(url);
      const data = await loc.json();
      setCurrentLocation(data.results[0].formatted);
    } catch (error) {
      toast.error("There was a problem while getting location!");
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = (data) => {
    const cartData = CartData?.map((cart) => ({
      qty: cart.quantity,
      title: cart.title,
      size: cart?.size,
      drink: cart?.drink,
      image: cart?.image,
      price: cart.price,
    }));
    createOrder(
      {
        ...data,
        cartData,
        payment: data.payment && "cash on deliver(COD)",
      },
      {
        onSuccess: () => {
          deleteAllCart();
          reset();
        },
        onError: () => {
          router.push("/cart");
        },
      },
    );
  };

  console.log(errors);

  useEffect(() => {
    const curTotalPrice = CartData?.map(
      (item) => item.price * item.quantity,
    )?.reduce((acc, cur) => acc + cur, 0);

    setTotalItemsPrice(curTotalPrice);
  }, [CartData]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      toast.error("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <div className=" mx-auto my-8 max-w-[1000px] text-gray-700">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-10"
      >
        <div className="my-8 flex flex-col items-center justify-center gap-2  [grid-column:1/-1]">
          <h1 className="text-4xl font-bold capitalize text-secondary ">
            Order now
          </h1>
          <p className=" ">
            Your order is one step away from us so be patient and fill the order
            form carefully that our supplier track you easily.
          </p>
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" whitespace-nowrap text-lg capitalize">
            First name:
          </label>
          <input
            type="text"
            className={`input input-info w-full ${
              errors?.firstName &&
              "border-red-500 focus:border-red-500 focus:outline-red-500"
            }`}
            placeholder="Enter first name"
            {...register("firstName", {
              required: "Field is required",
            })}
          />
          {errors?.firstName && (
            <span className="font-medium text-red-500">
              {errors?.firstName?.message}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" whitespace-nowrap text-lg capitalize">
            last name:
          </label>
          <input
            type="text"
            className={`input input-info w-full ${
              errors?.lastName &&
              "border-red-500 focus:border-red-500 focus:outline-red-500"
            }`}
            placeholder="Enter last name"
            {...register("lastName", {
              required: "Field is required",
            })}
          />
          {errors?.lastName && (
            <span className="font-medium text-red-500">
              {errors?.lastName?.message}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" whitespace-nowrap text-lg capitalize">
            Email:
          </label>
          <input
            type="email"
            className={`input input-info w-full ${
              errors?.email &&
              "border-red-500 focus:border-red-500 focus:outline-red-500"
            }`}
            placeholder="Enter Email"
            {...register("email", {
              required: "Field is required",
            })}
          />
          {errors?.email && (
            <span className="font-medium text-red-500">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" whitespace-nowrap text-lg capitalize">
            Address:
          </label>
          <div className="flex">
            <input
              type="text"
              defaultValue={currentLocation}
              className={`input input-info w-full ${
                errors?.address &&
                "border-red-500 focus:border-red-500 focus:outline-red-500"
              }`}
              placeholder="Enter full address."
              {...register("address", {
                required: "Field is required",
              })}
            />
            <button
              disabled={loading}
              className="whitespace-nowrap rounded-full bg-primary px-6 py-2 font-semibold capitalize text-tertiary duration-300 hover:bg-secondary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary disabled:hover:text-tertiary"
              onClick={getUserAddress}
            >
              get location
            </button>
          </div>
          {errors?.address && (
            <span className="font-medium text-red-500">
              {errors?.address?.message}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" whitespace-nowrap text-lg capitalize">
            Phone No:
          </label>
          <input
            type="number"
            className={`input input-info w-full ${
              errors?.phone &&
              "border-red-500 focus:border-red-500 focus:outline-red-500"
            }`}
            placeholder="Enter phone No."
            {...register("phone", {
              required: "Field is required",
              minLength: {
                value: 11,
                message: "Phone number should be maximum 11 digit long.",
              },
            })}
          />
          {errors?.phone && (
            <span className="font-medium text-red-500">
              {errors?.phone?.message}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-3">
          <label className="flex items-center gap-2 text-lg capitalize">
            <span>Payment:</span>
            cash on deliver (COD)
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded checked:text-green-500"
              {...register("payment", {
                required: "Please select payment method",
              })}
            />
          </label>

          {errors?.payment && (
            <span className="font-medium text-red-500">
              {errors?.payment?.message}
            </span>
          )}
        </div>

        {/* <div className=" flex flex-col gap-3">
          <label className="flex items-center gap-2 text-lg capitalize">
            <span>create my account?</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded checked:text-green-500"
              {...register("createAccount", {
                required: "Please select payment method",
              })}
            />
          </label>
        </div> */}
        <div className=" w-fit [grid-column:1/-1]">
          <Button disabled={isWorking} type={"submit"}>
            order now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
