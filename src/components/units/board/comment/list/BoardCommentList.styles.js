import styled from "@emotion/styled";
import { MdClear } from "@react-icons/all-files/md/MdClear";
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { Modal } from "antd";

export const CommentListFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DeleteModal = styled(Modal)`
  font-family: 'NotoSansKR-Regular', sans-serif;

  .ant-modal-content {
    padding: 0rem;
  }
  
  .ant-modal-header {
    display: flex;
    justify-content: center;
    padding: 0.625rem;
    border-bottom: 0.0625rem solid #bdbdbd;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
  }

  .ant-modal-footer {
    padding: 0.625rem;
    border-top: 0.0625rem solid #bdbdbd;
  }
`;

export const EditModal = styled(Modal)`
  font-family: 'NotoSansKR-Regular', sans-serif;

  .ant-modal-content {
    padding: 0rem;
  }
  
  .ant-modal-header {
    display: flex;
    justify-content: center;
    padding: 0.625rem;
    border-bottom: 0.0625rem solid #bdbdbd;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
  }

  .ant-modal-footer {
    padding: 0.625rem;
    border-top: 0.0625rem solid #bdbdbd;
  }
`;

export const EditModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalInputLabel = styled.div`
`

export const DeleteModalContent = styled.div`
`

export const DeleteModalInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-top: 0.5rem;
  border: 0.0625rem solid #BDBDBD;
`;

export const EditModalInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0.0625rem solid #BDBDBD;
`;

export const EditModalStarWrapper = styled.div`
  display: flex;
  margin-bottom: 0.4375rem;
`

export const CommentListWrapper = styled.div`
  display: flex;
  border-bottom: 0.0625rem solid #BDBDBD;
  padding-bottom: 0.9375rem;
  margin-bottom: 1rem;
  gap: 1rem;
`

export const CommentProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`

export const CommentInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`

export const CommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WriterStarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`

export const MdClearIcon = styled(MdClear)`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  color: #bdbdbd;
`

export const MdModeEditIcon = styled(MdModeEdit)`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  color: #bdbdbd;
`

export const CommentWriter = styled.div`
  font-weight: bold;
`

export const CommentContent = styled.div`
`

export const CommentCreatedAt = styled.div`
  font-size: 0.75rem;
  color: #BDBDBDBD;
`

export const CommentEditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  height: 4.8125rem;
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
  margin-top: 4.8125rem;
  margin-left: 62.7563rem;
  border: none;
  border-bottom-right-radius: 0.15rem;
  font-size: 0.8125rem;
  color: black;
  background-color: #FFD600;
  cursor: pointer;
`

