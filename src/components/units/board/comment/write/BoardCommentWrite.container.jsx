import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function BoardCommentWrite() {
    const router = useRouter();

    return (
        <div>
            <BoardCommentWriteUI/>
        </div>
    )
}