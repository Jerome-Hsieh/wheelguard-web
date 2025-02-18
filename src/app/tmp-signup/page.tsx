"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserInfo } from "../models/user.model";
import Notify, { showToast } from "@/component/notify";

const test_SignUP = () => {
  const { register, handleSubmit, reset } = useForm<UserInfo>();

  const onSubmit = async (data: UserInfo) => {
    try {
      console.log("IN create  2021")
      const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}user`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(endpoint, options);
      const regMsg = await res.json();

      if (res.status == 202) {
        console.log("IN create  2020")
        showToast(regMsg, "success");// can't receive regMsg
        reset();
      } else showToast(regMsg, "error");
    } catch (e: any) {
      showToast(e, "error");
    }
  };

  return (
    <>
      <Notify />
      <main className="bg-pageBG bg-cover bg-no-repeat">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
          {/*寬度100%、高度為整個視窗高度、flex容器、水平＆垂直居中對齊*/}
          <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            {/*RWD設定(小螢幕：w-full 大螢幕max-w-md*/}
            <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
              Test Sign Up
            </h1>
            <form className="p-6">
              <input
                type="text"
                placeholder="使用者名稱"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none"
                {...register("fullName", { required: true })}
              />
              <input
                type="text"
                placeholder="信箱"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                placeholder="使用者密碼"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
                {...register("password", { required: true })}
              />
              <input
                type="password"
                placeholder="確認密碼"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
                {...register("confirmPassword", { required: true })}
              />
              <div className="flex mt-5 justify-between items-center">
                <Link
                  href="/"
                  className="text-white cursor-pointer transition hover:text-black"
                >
                  Alerady Registred?
                </Link>
                <button
                  type="submit"
                  className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white"
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign up
                </button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </>
  );
};

export default test_SignUP;
