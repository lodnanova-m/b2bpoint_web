"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { FormData } from "@/app/models/models";
import Link from "next/link";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset(); // Clear the form after submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-avenir p-4 ">
          <div className="text-xl py-1">Jméno</div>
          <input
            type="text"
            className="bg-white w-full bg-opacity-90 border-transparent px-4 py-2 drop-shadow-lg text-lg focus:outline-white"
            {...register("name", { required: "Jméno je povinné." })}
          />
          {errors.name && (
            <p className="font-bold text-sm p-1 text-[#ce2c2c]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="font-avenir p-4">
          <div className="text-xl py-1">Email</div>
          <input
            type="email"
            className="bg-white w-full bg-opacity-90 border-transparent px-4 py-2 drop-shadow-lg text-lg focus:outline-white"
            {...register("email", {
              required: "Email je povinný.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Neplatná emailová adresa.",
              },
            })}
          />
          {errors.email && (
            <p className="font-bold text-sm p-1 text-[#ce2c2c]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="font-avenir p-4">
        <div className="text-xl py-1">Vaše zpráva</div>
        <textarea
          className="bg-white bg-opacity-90 border-transparent px-4 py-2 resize-y drop-shadow-lg text-lg focus:outline-white w-full min-h-44"
          {...register("message", { required: "Zpráva je povinná." })}
        />
        {errors.message && (
          <p className="font-bold text-sm p-1 text-[#ce2c2c]">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="flex flex-row justify-end p-4">
        <button
          type="submit"
          className="bg-green text-purple text-xl font-medium rounded-md px-12 py-2 mx-4 bg-opacity-70 hover:bg-green hover:bg-opacity-90"
        >
          Odeslat
        </button>
      </div>
    </form>
  );
}
