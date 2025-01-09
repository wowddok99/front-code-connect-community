import BoardWriter from "../../../../src/components/units/board/write/BoardWrite.container"
import { useRouter } from "next/router";

export default function BoardsEditPage() {
    const router = useRouter();

    return (
        <div>
            <BoardWriter 
            isEdit={true} 
            />
        </div>
    )
}