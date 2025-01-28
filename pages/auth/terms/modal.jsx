import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-auto flex-grow">
          <div className="prose prose-sm max-w-none">{children}</div>
        </div>
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white rounded-xl py-3 px-4 hover:bg-blue-600 font-medium"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

