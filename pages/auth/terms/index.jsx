import { useState } from "react"
import { useRouter } from "next/navigation"
import { MdChevronRight } from "@react-icons/all-files/md/MdChevronRight";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import TermsModal from "../../../src/components/units/commons/modals/TermsModal"

const termsContent = {
    // 서비스 이용 약관
    terms: [
        { title: "1. 서비스 제공", content: "Code Connect(이하 코드커넥트)는 사용자에게 개발자 커뮤니티 서비스를 제공합니다." },
        { title: "2. 사용자 의무", content: "사용자는 서비스 이용 시 관련 법규 및 이용약관을 준수해야 합니다." },
        { title: "3. 지적재산권", content: "서비스 내 모든 콘텐츠의 지적재산권은 코드커넥트에 귀속됩니다." },
        { title: "4. 서비스 변경 및 중단", content: "코드커넥트는 필요에 따라 서비스를 변경하거나 중단할 수 있습니다." },
        { title: "5. 책임 제한", content: "코드커넥트는 사용자의 귀책사유로 인한 손해에 대해 책임을 지지 않습니다." },
    ],

    // 개인정보 처리방침
    privacy: [
        { title: "1. 수집하는 개인정보 항목", content: "이름, 이메일 주소, 비밀번호, 휴대폰 번호 등" },
        { title: "2. 개인정보의 수집 및 이용 목적", content: "회원 식별, 서비스 제공, 고객 지원 및 서비스 개선" },
        { title: "3. 개인정보의 보유 및 이용 기간", content: "회원 탈퇴 시까지 (법령에 따른 보존 기간 준수)" },
        { title: "4. 개인정보의 파기 절차 및 방법", content: "전자적 파일 형태로 저장된 정보는 기술적 방법을 사용하여 안전하게 삭제합니다." },
        { title: "5. 개인정보 보호 책임자", content: "성명: 홍길동\n연락처: privacy@codeconnect.com" },
    ],

    // 마케팅 정보 수신 동의
    marketing: [
        {
            title: "1. 마케팅 정보 수신 동의",
            content: "사용자는 코드커넥트의 새로운 서비스, 이벤트 및 혜택에 대한 정보를 수신하는 데 동의할 수 있습니다.",
        },
        { title: "2. 수신 방법", content: "이메일, SMS, 앱 푸시 알림 등 다양한 방법으로 정보를 수신하실 수 있습니다." },
        { title: "3. 수신 거부", content: "사용자는 언제든지 마케팅 정보 수신을 거부할 수 있습니다." },
        {
            title: "4. 미동의 시 불이익",
            content: "마케팅 정보 수신에 동의하지 않으셔도 기본적인 서비스 이용에는 제한이 없습니다.",
        },
    ],
}

export default function Terms() {
    const router = useRouter()
    const [agreements, setAgreements] = useState({
        all: false,
        terms: false,
        privacy: false,
        marketing: false,
    })
    const [modalContent, setModalContent] = useState(null)

    const handleAllCheck = () => {
        const newValue = !agreements.all
        setAgreements({
            all: newValue,
            terms: newValue,
            privacy: newValue,
            marketing: newValue,
        })
    }

    const handleSingleCheck = (key) => {
        const newAgreements = {
            ...agreements,
            [key]: !agreements[key],
        }

        newAgreements.all = newAgreements.terms && newAgreements.privacy && newAgreements.marketing

        setAgreements(newAgreements)
    }

    const handleSubmit = () => {
        if (agreements.terms && agreements.privacy) {
            router.push("/auth/signUp")
        }
    }

    const openModal = (key) => {
        setModalContent({
            title: key === "terms" ? "서비스 이용약관" : key === "privacy" ? "개인정보 수집 및 이용" : "마케팅 정보 수신",
            content: termsContent[key],
        })
    }

    const CheckBox = ({ checked, onClick }) => (
        <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
        ${checked ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}
            onClick={onClick}
        >
            {checked && <FaCheck className="w-[0.75rem] h-[0.75rem] text-white" />}
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col gap-[2.5rem] items-center justify-center p-4">
            <img src="/images/codeConnect_logo.png" alt={"로고"} className="h-[4.5rem] cursor-pointer"
                 onClick={() => window.location.href = 'http://localhost:3000/'}></img>

            <div className="w-full max-w-md space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h1 className="text-2xl font-bold mb-8">약관 동의</h1>

                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer" onClick={handleAllCheck}>
                            <CheckBox checked={agreements.all} onClick={handleAllCheck}/>
                            <span className="ml-3 font-bold">모든 약관에 동의합니다</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                                <div className="flex items-center">
                                    <CheckBox checked={agreements.terms} onClick={() => handleSingleCheck("terms")}/>
                                    <span className="ml-3">서비스 이용약관 동의 (필수)</span>
                                </div>
                                <MdChevronRight className="w-5 h-5 text-gray-400" onClick={() => openModal("terms")}/>
                            </div>

                            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                                <div className="flex items-center">
                                    <CheckBox checked={agreements.privacy} onClick={() => handleSingleCheck("privacy")}/>
                                    <span className="ml-3">개인정보 수집 및 이용 동의 (필수)</span>
                                </div>
                                <MdChevronRight className="w-5 h-5 text-gray-400" onClick={() => openModal("privacy")}/>
                            </div>

                            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                                <div className="flex items-center">
                                    <CheckBox checked={agreements.marketing} onClick={() => handleSingleCheck("marketing")}/>
                                    <span className="ml-3">마케팅 정보 수신 동의 (선택)</span>
                                </div>
                                <MdChevronRight className="w-5 h-5 text-gray-400" onClick={() => openModal("marketing")}/>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={!agreements.terms || !agreements.privacy}
                        className={`w-full mt-8 py-4 rounded-xl text-white font-medium
                        ${
                            agreements.terms && agreements.privacy 
                                ? "bg-blue-500 hover:bg-blue-600" 
                                : "bg-gray-300 cursor-not-allowed"
                        }
                        `}
                    >
                        다음
                    </button>
                </div>
            </div>

            <TermsModal isOpen={!!modalContent} onClose={() => setModalContent(null)} title={modalContent?.title}>
                {modalContent?.content.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-bold mb-1.5">{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </TermsModal>
        </div>
    )
}


