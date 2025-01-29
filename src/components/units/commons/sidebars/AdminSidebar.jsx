import { usePathname } from "next/navigation"
import Link from "next/link"
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard"
import { FiUsers } from "@react-icons/all-files/fi/FiUsers"
import { FiFileText } from "@react-icons/all-files/fi/FiFileText"



export default function AdminSidebar() {
    const pathname = usePathname()

    // 메뉴 항목 정의
    const menuItems = [
        { title: "대시보드", path: "/admin/dashboard", icon: MdDashboard },
        { title: "회원 관리", path: "/admin/members", icon: FiUsers },
        { title: "게시글 관리", path: "/admin/posts", icon: FiFileText },
    ]

    return (
        // Sidebar Wrapper
        <div className="w-64 min-h-screen bg-white border-r flex flex-col">
            {/* 로고 이미지 */}
            <div className="py-4 px-4 flex justify-center items-center">
                <img src="/images/codeConnect_logo.png" alt={"로고"} className="h-[2rem] cursor-pointer"
                     onClick={() => window.location.href = 'http://localhost:3000'}></img>
            </div>
            {/* 구분선 (현재 미사용) */}
            {/*<div className="border-t border-gray-100 mt-[0.15rem] mb-[0.25rem]"></div>*/}
            <nav className="px-4 pt-1 pb-4 flex-grow">
                {/* 메뉴 항목을 반복하여 렌더링 */}
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg mb-1 transition-colors ${
                            pathname === item.path ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        {/* 아이콘과 제목 표시 */}
                        <item.icon size={20}/>
                        <span>{item.title}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

