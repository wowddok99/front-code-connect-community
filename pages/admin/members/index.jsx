import { useState } from "react"
import { IoIosMore } from "@react-icons/all-files/io/IoIosMore";
import { IoSearch } from "@react-icons/all-files/io5/IoSearch";
import AdminSidebar from "@/src/components/units/commons/sidebars/AdminSidebar";

export default function Members() {
    // 회원 데이터 상태 정의
    const [members, setMembers] = useState([
        { username: "user1", email: "user1@example.com", role: "관리자", joinDate: "2024-01-25" },
        { username: "user2", email: "user2@example.com", role: "모더레이터", joinDate: "2024-01-26" },
        { username: "user3", email: "user3@example.com", role: "사용자", joinDate: "2024-01-27" },
        { username: "user4", email: "user4@example.com", role: "사용자", joinDate: "2024-01-28" },
        { username: "user5", email: "user5@example.com", role: "사용자", joinDate: "2024-01-29" },
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
                        <h1 className="text-2xl font-bold">회원 관리</h1>
                        <p className="text-gray-600">사용자 계정을 관리하고 권한을 설정하세요.</p>
                    </div>
                    <div className="w-full sm:w-auto">
                        {/* 검색 입력 필드 */}
                        <div className="relative">
                            <input type="text" placeholder="검색..."
                                   className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg"/>
                            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                      size={20}/>
                        </div>
                    </div>
                </div>

                {/* 회원 리스트 테이블 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    사용자명
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    이메일
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">권한</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    가입일
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {members.map((member) => (
                                <tr key={member.email}>
                                    <td className="px-6 py-4 whitespace-nowrap">{member.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{member.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{member.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{member.joinDate}</td>
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

