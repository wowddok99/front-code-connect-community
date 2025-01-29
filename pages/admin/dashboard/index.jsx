import { FiUsers } from "@react-icons/all-files/fi/FiUsers"
import { FiUserPlus } from "@react-icons/all-files/fi/FiUserPlus"
import { FiFileText } from "@react-icons/all-files/fi/FiFileText"
import { FiActivity  } from "@react-icons/all-files/fi/FiActivity"
import AdminSidebar from "@/src/components/units/commons/sidebars/AdminSidebar";


export default function Dashboard() {
    // 통계 데이터 정의
    const stats = [
        { title: "총 회원 수", value: "1,234", icon: FiUsers },
        { title: "신규 가입", value: "12", icon: FiUserPlus },
        { title: "총 게시글 수", value: "5,678", icon: FiFileText },
        { title: "일일 활성 사용자", value: "456", icon: FiActivity },
    ]

    // 최근 가입 회원 데이터 정의
    const recentMembers = [
        { name: "홍길동", email: "hong@example.com", date: "2024-01-28" },
        { name: "김철수", email: "kim@example.com", date: "2024-01-27" },
        { name: "이영희", email: "lee@example.com", date: "2024-01-26" },
        { name: "박지성", email: "park@example.com", date: "2024-01-25" },
        { name: "최민수", email: "choi@example.com", date: "2024-01-24" },
    ]

    // 최근 게시글 데이터 정의
    const recentPosts = [
        { title: "Next.js 14 업데이트 소식", author: "관리자", category: "뉴스", date: "2024-01-28" },
        { title: "React 18의 새로운 기능", author: "김개발", category: "튜토리얼", date: "2024-01-27" },
        { title: "TypeScript 5.0 릴리즈", author: "이코딩", category: "뉴스", date: "2024-01-26" },
        { title: "효과적인 상태 관리 전략", author: "박프론트", category: "팁", date: "2024-01-25" },
        { title: "웹 성능 최적화 기법", author: "최백엔드", category: "튜토리얼", date: "2024-01-24" },
    ]

    return (
        // Layout Wrapper
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar/>
            {/* Main Wrapper */}
            <div className="flex-1 p-8 space-y-6">
                {/* 헤더 섹션 */}
                <div>
                    <h1 className="text-2xl font-bold">대시보드</h1>
                    <p className="text-gray-600">웹사이트의 주요 통계와 최근 활동을 확인하세요.</p>
                </div>

                {/* 통계 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                        <div key={stat.title} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                            <stat.icon className="w-8 h-8 text-blue-500 mr-4"/>
                            <div>
                                <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 최근 가입 회원과 게시글 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 최근 가입 회원 리스트 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">최근 가입 회원</h2>
                        <div className="space-y-4">
                            {recentMembers.map((member) => (
                                <div key={member.email} className="flex items-center gap-4">
                                    <div
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                        {member.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.email}</p>
                                    </div>
                                    <span className="ml-auto text-sm text-gray-500">{member.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 최근 게시글 리스트 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">최근 게시글</h2>
                        <div className="space-y-4">
                            {recentPosts.map((post) => (
                                <div key={post.title} className="flex items-center gap-4">
                                    <div>
                                        <p className="font-medium">{post.title}</p>
                                        <p className="text-sm text-gray-600">{post.author}</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <span
                                            className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
                                            {post.category}
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

