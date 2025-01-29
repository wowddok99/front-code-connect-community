import { useState } from "react"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { IoIosMore } from "@react-icons/all-files/io/IoIosMore";
import AdminSidebar from "@/src/components/units/commons/sidebars/AdminSidebar";

export default function Posts() {
    // 게시글 데이터 상태 정의
    const [posts, setPosts] = useState([
        { title: "첫 번째 게시글", author: "user1", category: "공지사항", date: "2024-01-26" },
        { title: "두 번째 게시글", author: "user2", category: "질문", date: "2024-01-27" },
        { title: "세 번째 게시글", author: "user3", category: "팁", date: "2024-01-28" },
        { title: "네 번째 게시글", author: "user4", category: "자유", date: "2024-01-29" },
        { title: "다섯 번째 게시글", author: "user5", category: "공지사항", date: "2024-01-30" },
    ])

    return (
        // Layout Wrapper
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar/>
            {/* Main Wrapper */}
            <div className="flex-1 p-8 space-y-6">
                {/* 헤더 섹션 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">게시글 관리</h1>
                        <p className="text-gray-600">게시글을 관리하고 모니터링하세요.</p>
                    </div>
                    {/* 검색 입력 필드 */}
                    <div className="w-full sm:w-auto">
                        <div className="relative">
                            <input type="text" placeholder="검색..."
                                   className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg"/>
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                      size={20}/>
                        </div>
                    </div>
                </div>

                {/* 게시글 리스트 테이블 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    작성자
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    카테고리
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    작성일
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {posts.map((post) => (
                                <tr key={post.title}>
                                    <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{post.author}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{post.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <IoIosMore size={20}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

