import BoardWriterUI from './BoardWrite.presenter'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from "@tanstack/react-query";
import {checkValidationImageFile} from "@/src/components/units/commons/libraries/validationFile";

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
            throw new Error('네트워크 응답이 올바르지 않습니다.');
        }

        return response.json();
    };

    const uploadImages = async (formData) => {
        const response = await fetch('http://localhost:8081/api/images', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error('이미지 업로드에 실패했습니다.');
        }
        return response.json();
    };

    // Mutation
    const createMutation = useMutation({
        mutationFn: createPost, // mutationFn으로 변경
        onSuccess: () => {},
        onError: (error) => {},
    });

    const uploadImagesMutation = useMutation({
        mutationFn: uploadImages,
        onSuccess: (data) => {
            console.log('이미지가 성공적으로 업로드되었습니다.', data);
        },
        onError: (error) => {
            console.error('이미지 업로드 오류:', error);
        },
    });

    // State Variables
    const [isActive, setIsActive] = useState(false);
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [imageFileUrls, setImageFileUrls] = useState([]);
    const [imageFileNames, setImageFileNames] = useState([]);
    const imageFileRef = useRef(null);

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

    // Event Handlers(Click Handlers)
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
            youtubeUrl,
            postAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail
            },
            imagePathList : [...imageFileUrls]
        };

        if (writer && password && title && contents) {
            try {
                createMutation.mutate(newPost, {
                    onSuccess: () => {
                        alert("게시물이 성공적으로 등록되었습니다.");
                        router.push(`http://localhost:3000/boards/list/${router.query.categoryName}/1`)
                    },
                    onError: (error) => {
                        alert(error.message);
                    }
                });
            } catch (error) {
                alert(error.message);
            }
        }
    };

    // Event Handlers(Change Handlers)
    const onChangeImageFile = (event) => {
        const newImageFileUrls = [...imageFileUrls];
        const newImageFileNames = [...imageFileNames];

        if (newImageFileUrls.length >= 3) {
            alert("이미지는 최대 3개까지만 등록할 수 있습니다.");
            return;
        }

        const file = event.target.files[0];

        // isValid가 false이면 return 실행
        const isImageFileValid = checkValidationImageFile(file);
        if (!isImageFileValid) return;

        const formData = new FormData();

        formData.append('files', file);

        // 이미지 파일 업로드
        uploadImagesMutation.mutate(formData, {
            onSuccess: (response) => {
                // console.log(response);
                const fileName = response.data[0].split('\\').pop();

                newImageFileUrls.push(response.data[0]);
                newImageFileNames.push(fileName);

                console.log(newImageFileUrls);
                console.log(newImageFileNames);

                setImageFileUrls(newImageFileUrls);
                setImageFileNames(newImageFileNames);
            },
            onError: (error) => {
                console.error('이미지 업로드 오류:', error);
            }
        });
    };

    // Helper Function
    const onToggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const onCompleteDaumPostcode = (data) => {
        setZipcode(data.zonecode);
        setAddress(data.address);
        onToggleModal();
    }

    const onOpenHiddenImageFileInput = () => {
        imageFileRef.current?.click();
    }

    const onClickDeleteImageFile = (index) => {
        const newImageFileUrls = [...imageFileUrls]
        const newImageFileNames = [...imageFileNames]

        newImageFileUrls.splice(index, 1)
        newImageFileNames.splice(index, 1)

        setImageFileUrls(newImageFileUrls)
        setImageFileNames(newImageFileNames);
    }

    return (
        <div>
            <BoardWriterUI
            isActive={isActive}
            isEdit={props.isEdit}
            isModalOpen={isModalOpen}

            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}

            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}

            imageFileRef={imageFileRef}
            imageFileUrls={imageFileUrls}
            imageFileNames={imageFileNames}

            onInputWriter={onInputWriter}
            onInputPassword={onInputPassword}
            onInputTitle={onInputTitle}
            onInputContents={onInputContents}
            onInputYoutubeUrl={onInputYoutubeUrl}
            onInputAddressDetail={onInputAddressDetail}

            onClickSubmit={onClickSubmit}

            onChangeImageFile={onChangeImageFile}

            onToggleModal={onToggleModal}
            onCompleteDaumPostcode={onCompleteDaumPostcode}
            onOpenHiddenImageFileInput={onOpenHiddenImageFileInput}
            onClickDeleteImageFile={onClickDeleteImageFile}
            />
        </div>
    )
}