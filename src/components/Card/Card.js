import React from 'react';
import styles, {css} from "styled-components";
const StyleCard = styles.div`
    position: relative;
    width: 500px; /* Đặt kích thước cho card */
    height:500px;
    margin: 20px; /* Khoảng cách giữa các card */
`;
const CardImgAvt = styles.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    // overflow: hidden; /* Đảm bảo ảnh không vượt ra khỏi khung */
`;
const StyleCardImg = styles.div`
    height: 200px; /* Đặt kích thước cho ảnh */
    border-radius: 20px;
    overflow: hidden; /* Đảm bảo ảnh không vượt ra khỏi khung */
`;

const CardImg = styles.img`
    width: 100%; /* Đảm bảo ảnh chiếm đủ kích thước của phần tử cha */
    height: auto;
    display: block;
`;

const CardContent = styles.div`
    border-radius: 0 0 20px 20px; /* Kích thước bo tròn cho phần nội dung dưới */
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const AvatarContainer = styles.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CardInfo = styles.div`
    margin-left: 15px; /* Khoảng cách giữa avatar và nội dung text */
`;

const Username = styles.div`
    font-size: 18px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(135deg,
        #f6d365 0%,
        #fda085 50%,
        #f6d365 100%);
    -webkit-background-clip: text; /* Thêm thuộc tính để clip màu nền chỉ cho phần văn bản */
    background-clip: text;

    ${props => props.secondary && css`
    font-size: 18px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(
        135deg,
        #3a7bd5 0%,
        #00d2ff 50%,
        #6fff98 100%
    );
    -webkit-background-clip: text; /* Thêm thuộc tính để clip màu nền chỉ cho phần văn bản */
    background-clip: text;
    `}

`;

const Followers = styles.div`
    font-size: 14px;
    color: #999999;
    margin-top: 5px;
`;

const ContentInfo = styles.div`
    margin-top: 15px;
`;

const Title = styles.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Price = styles.span`
    font-size: 16px;
    color: #ff4500;
`;

const Card = (props) => {
    return (
        <StyleCard>
            <StyleCardImg>
                <CardImg src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center' alt="Card Image" />
            </StyleCardImg>
            
            <CardContent>
                <AvatarContainer>
                    <CardImgAvt>
                        <img src='https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?resize=1000x750&vertical=center' alt="Avatar" />
                    </CardImgAvt>
                    <CardInfo>
                        <Username secondary>Btngan</Username>
                        <Followers>256 followers</Followers>
                    </CardInfo>
                </AvatarContainer>
                <ContentInfo>
                    <Title>Product Title</Title>
                    <Price>$11.20</Price>
                </ContentInfo>
            </CardContent>
        </StyleCard>
    );
};

export default Card;
