import styled from "@emotion/styled"
import { Carousel } from 'antd';

const CustomCarousel = styled(Carousel)`
    .slick-prev {
        left: 3%;
    }

    .slick-next {
        right: 3%;
    }
`;

const BannerWrapper = styled.div`
    position: relative;
`

const BannerImage = styled.img`
    width: 100vw;
    height: 300px;
`

const BannerTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    color: white;
`

const BannerTextTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
`

const BannerTextDescription = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export default function LayOutBanner(){
    return (
        <CustomCarousel arrows infinite={true} autoplay={false} autoplaySpeed={4000} speed={1000} fade={true}>
            <BannerWrapper>
                <BannerImage src="/images/banner1.png"/>
                <BannerTextWrapper>
                    <BannerTextTitle>함께 성장하는 개발 커뮤니티, Code Connect</BannerTextTitle>   
                    <BannerTextDescription>개발자들이 잠시 쉬어갈수 있는 개발 커뮤니티 입니다.</BannerTextDescription>
                </BannerTextWrapper>
            </BannerWrapper>
            <BannerWrapper>
                <BannerImage src="/images/banner2.png"/>
                <BannerTextWrapper>
                    <BannerTextTitle>함께 성장하는 개발 커뮤니티, Code Connect</BannerTextTitle>   
                    <BannerTextDescription>개발자들이 잠시 쉬어갈수 있는 개발 커뮤니티 입니다.</BannerTextDescription>
                </BannerTextWrapper>
            </BannerWrapper>
            <BannerWrapper>
                <BannerImage src="/images/banner3.png"/>
                <BannerTextWrapper>
                    <BannerTextTitle>함께 성장하는 개발 커뮤니티, Code Connect</BannerTextTitle>   
                    <BannerTextDescription>개발자들이 잠시 쉬어갈수 있는 개발 커뮤니티 입니다.</BannerTextDescription>
                </BannerTextWrapper>
            </BannerWrapper>
        </CustomCarousel>
    )
}