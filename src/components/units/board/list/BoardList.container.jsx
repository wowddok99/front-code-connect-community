import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { ChangeEvent, useEffect, useState } from "react";

export default function BoardList(){
    const router = useRouter();
    
    return (
        <div>
            <BoardListUI/>
        </div>
    )
}
