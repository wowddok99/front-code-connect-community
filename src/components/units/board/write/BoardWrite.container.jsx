import BoardWriterUI from './BoardWrite.presenter'
import { ChangeEvent, useEffect, useRef, useState } from 'react' 
import { useRouter } from 'next/router'
import { Address } from 'react-daum-postcode'

export default function BoardWriter(props){
    const router = useRouter();

    // State Variables
    const [isActive, setIsActive] = useState(false);
    const [writer, setWriter] = useState();
    const [password, setPassword] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const [youtubeUrl, setYoutubeUrl] = useState();
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    // Event Handlers(Input Handlers)
    const onInputWriter = (event) => {
        setWriter(event.target.value);
        // 값 입력시 error 초기화
        if(event.target.value !== ""){
          setWriterError("");
        }

        // 각 변수들의 값이 있으면 active 값을 true로 설정, true일때때 등록 버튼 활성화
        if (event.target.value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const onInputPassword = (event) => {
        setPassword(event.target.value);

        if(event.target.value !== ""){
        setPasswordError("");
        }

        if (writer && event.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
  
    const onInputTitle = (event) => {
        setTitle(event.target.value);

        if(event.target.value !== ""){
            setTitleError("");
        }

        if (writer && password && event.target.value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
  
    const onInputContents = (event) => {
        setContents(event.target.value);
        
        if(event.target.value !== ""){
            setContentsError("");
        }

        if (writer && password && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const onInputYoutubeUrl = (event) => {
        setYoutubeUrl(event.target.value);
    }
    
    const onInputAddressDetail = (event) => {
        setAddressDetail(event.target.value);
    }

    return (
        <div>
            <BoardWriterUI
            onInputWriter={onInputWriter}
            />
        </div>
    )
}