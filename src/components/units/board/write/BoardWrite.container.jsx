import BoardWriterUI from './BoardWrite.presenter'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Address } from 'react-daum-postcode'
import { useMutation } from "@tanstack/react-query";

export default function BoardWriter(props){
    const router = useRouter();

    // API 요청 함수
    const createPost = async (newPost) => {
        const response = await fetch(`http://localhost:8081/api/posts/${router.query.categoryName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };

    // Mutation
    const createMutation = useMutation({
        mutationFn: createPost, // mutationFn으로 변경
        onSuccess: () => {
            console.log('게시글이 성공적으로 작성되었습니다.');
        },
        onError: (error) => {
            console.error('게시글 작성 오류:', error);
        },
    });

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

    const onClickSubmit = () => {
        // writer에 값이 없으면 WriterError에 에러원인 저장
        if(!writer){
            setWriterError("작성자를 입력해주세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (!title) {
            setTitleError("제목을 입력해주세요.");
        }
        if (!contents) {
            setContentsError("내용을 입력해주세요.");
        }

        const newPost = {
            writer,
            password,
            title,
            contents,
            youtubeUrl
        };

        if (writer && password && title && contents) {
            try {
                createMutation.mutate(newPost);
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <div>
            <BoardWriterUI
            isActive={isActive}
            isEdit={props.isEdit}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onInputWriter={onInputWriter}
            onInputPassword={onInputPassword}
            onInputTitle={onInputTitle}
            onInputContents={onInputContents}
            onInputYoutubeUrl={onInputYoutubeUrl}
            onClickSubmit={onClickSubmit}
            />
        </div>
    )
}