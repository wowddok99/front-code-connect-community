import styled from "@emotion/styled";
import ReactPlayer from 'react-player'

export const PageLayout = styled.div`
    word-break: break-all;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 100vh; */
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 78.5rem; // 필요시 %로 width 비율 조절
    /* width: 90%; */
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
    padding-bottom: 7rem;
    padding-left: 7rem;
    padding-right: 7rem;
    border: none;
    box-shadow: 0rem 0rem 0.625rem gray;
    gap: 1.5rem;
`
export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  border-bottom: 0.0625rem solid #bdbdbd;
`

export const CardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CardHeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const WriterCreatedAtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Writer = styled.div`
  font-size: 1.5rem;
`

export const CreateAt = styled.div`
  font-size: 1rem;
`

export const ProfileIcon = styled.img`
  width: 2.9169rem;
  height: 2.9169rem;
  cursor: pointer;
`
export const LinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

export const Subject = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Contents = styled.div`
`

export const YoutubePlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const YoutubePlayer = styled(ReactPlayer)`
  margin: auto;
`

export const LikeHateButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  gap: 0.7rem;
`

export const LikeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LikeIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const HateIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const CrudButtonGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.0625rem solid #bdbdbd;
  justify-content: center;
  gap: 2rem;
`

export const ListButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 0.0625rem solid #bdbdbd;
  cursor: pointer;
  background-color: white;
`

export const EditButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 0.0625rem solid #bdbdbd;
  cursor: pointer;
  background-color: white;
`
export const DeleteButton = styled.button`
  width: 11.1875rem;
  height: 3.25rem;
  border: 0.0625rem solid #bdbdbd;
  background-color: white;
  cursor: pointer;
`

export const CommentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`