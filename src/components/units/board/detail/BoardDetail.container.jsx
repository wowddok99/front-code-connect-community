import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useState } from "react";

export default function BoardDetail(){
    const router = useRouter();
    
    return (
        <div>
            <BoardDetailUI/>
        </div>
        )
}