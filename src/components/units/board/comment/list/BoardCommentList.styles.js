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