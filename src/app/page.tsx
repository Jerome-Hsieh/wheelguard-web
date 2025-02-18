"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { UserLogin } from "./models/user.model";
import Notify, { showToast } from "@/component/notify";
import { use } from "react";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<UserLogin>();
  const router = useRouter();
  const onSubmit = async (data: UserLogin) => {
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}user/login`;
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(endpoint, option);
      const logMsg = await res.json();

      if (res.status == 200) {
        showToast(logMsg.msg, "success");
        reset();
        router.push("/dashboard");
      } else showToast(logMsg, "error");
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
            {/*RWD設定(小螢幕：w-full 大螢幕max-w-md)*/}
            <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
              登入介面
            </h1>
            <form className="p-6">
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="使用者名稱"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none"
              />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="使用者密碼"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none"
              />
              <div className="flex mt-5 justify-between items-center">
                <Link
                  href="/tmp-signup"
                  className="text-white cursor-pointer transition hover:text-black"
                >
                  Not Yet Registred?
                </Link>
                <button
                  type="submit"
                  className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white"
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign in
                </button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </>
  );
};

export default LoginForm;
