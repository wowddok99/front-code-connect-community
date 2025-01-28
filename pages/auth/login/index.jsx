import { useState } from "react"
import Link from "next/link"

export default function LoginForm() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen flex flex-col gap-[2.5rem] items-center justify-center bg-gray-50 p-4">
            <img src="/images/codeConnect_logo.png" alt={"로고"} className="h-[4.5rem] cursor-pointer"
                 onClick={() => window.location.href = 'http://localhost:3000'}></img>

            <div className="w-full max-w-md space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold mb-8">로그인</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="userName"
                                id="userName"
                                required
                                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                                placeholder=" "
                                value={formData.userName}
                                onChange={(e) => setFormData({...formData, userName: e.target.value})}
                            />
                            <label
                                htmlFor="userName"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                            >
                                아이디
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                required
                                className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                                placeholder=" "
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                            >
                                비밀번호
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-xl py-4 px-4 hover:bg-blue-600 font-medium"
                        >
                            로그인
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        계정이 없으신가요?{" "}
                        <Link href="/auth/terms" className="text-blue-500 hover:underline font-medium">
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

