import BoardWriterUI from './BoardWrite.presenter'
import { ChangeEvent, useEffect, useRef, useState } from 'react' 
import { useRouter } from 'next/router'
import { Address } from 'react-daum-postcode'

export default function BoardWriter(props){
    const router = useRouter();

    return (
        <div>
            <BoardWriterUI/>
        </div>
    )
}