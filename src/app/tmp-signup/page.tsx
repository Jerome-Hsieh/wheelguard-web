import Link from "next/link";

const test_SignUP = () => {
    return(
        <main className="bg-pageBG bg-cover bg-no-repeat">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">{/*寬度100%、高度為整個視窗高度、flex容器、水平＆垂直居中對齊*/}
            <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">{/*RWD設定(小螢幕：w-full 大螢幕max-w-md*/}
            <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
                Test Sign Up
            </h1>
            <form className="p-6">
                <input type="text" name="" placeholder="使用者名稱" className="py-2 px-3 w-full text-black text-lg font-light outline-none"/>
                <input type="text" name="" placeholder="信箱" className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                <input type="text" name="" placeholder="使用者密碼" className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                <input type="text" name="" placeholder="確認密碼" className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"/>
                <div className="flex mt-5 justify-between items-center">
                <Link href="/" className="text-white cursor-pointer transition hover:text-black">Alerady Registred?</Link>
                <button type="submit" className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white">Sign up</button>
                </div>
            </form>
            </aside>
        </div>
        </main>
    )
}

export default test_SignUP;