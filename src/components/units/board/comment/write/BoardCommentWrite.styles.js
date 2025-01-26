import styled from "@emotion/styled";
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots";
import { IoMdStar } from "@react-icons/all-files/io/IoMdStar";

export const CommentWriteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CommentSectionTitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`

export const FaRegCommentDotsIcon = styled(FaRegCommentDots)`
  margin-top: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #FFD600;
`

export const CommentLabel = styled.label`
  width: 2.125rem;
  height: 1.6875rem;
  font-size: 1.125rem;
`

export const CommentInsertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const CommentInputHeaderWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`

export const CommentInputWriter = styled.input`
  width: 7.5rem;
  height: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border: 0.0625rem solid #bdbdbd;
  border-radius: 0.1875rem;
`

export const CommentInputPassword = styled.input`
  width: 7.5rem;
  height: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border: 0.0625rem solid #bdbdbd;
  border-radius: 0.1875rem;
`

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentInputContent = styled.input`
  width: 100%;
  height: 6.8125rem;
  border: 0.0625rem solid #bdbdbd;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
  padding-left: 1.25rem;
`

export const CommentInputFooter = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.0625rem solid #bdbdbd;
  border-left: 0.0625rem solid #bdbdbd;
  border-right: 0.0625rem solid #bdbdbd;
  border-bottom-left-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
  padding-left: 1.25rem;
  font-size: 0.75rem;
  color: #888;
  align-items: center;
`

export const CommentSubmitButton = styled.button`
  position: absolute;
  width: 5.6875rem;
  height: 2.44rem;
  margin-top: 6.8125rem;
  margin-left: 62.7563rem;
  border: none;
  border-bottom-right-radius: 0.15rem;
  font-size: 0.8125rem;
  color: white;
  background-color: black;
  cursor: pointer;
`