import BoardWriter from "../../../../src/components/units/board/write/BoardWrite.container"
export default function BoardsWritePage() {
    return (
        <div>
            <BoardWriter isEdit={false}></BoardWriter>
        </div>
    )
}