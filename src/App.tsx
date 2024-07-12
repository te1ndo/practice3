import React from "react";
import { useState } from "react";
import styled, { CSSProperties } from "styled-components";

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px 20px;
  gap: 194px;

  position: absolute;
  height: 89px;
  top: 0px;
  left: 0;
  right: 0;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  position: relative;
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 86px;
  height: 54px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;

  width: 80px;
  height: 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 10px;

  position: absolute;
  height: 150px;
  left: 0%;
  right: 0%;
  top: 89px;

  @media (max-width: 1024px) {
    .content {
      width: 90%;
    }
  }

  @media (max-width: 760px) {
    .content {
      width: 95%;
    }
  }
`;

const Image = styled.div`
  background-image: url(https://s3-alpha-sig.figma.com/img/95d6/1673/95f29966487738551d9348615c41c76b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQJ1Iw0QSIg8raGDP~KZUVvxUuiWaisWDtTu2aygI-qve-XxV8WwaYDHyeoqe4q0SmlTeWZRLhKFSeziPAQDyDhE8eWaenqHV-Bznr6Dv0G1Udt9t6lDeh73VbyUQboGrf0IG-3Mj5U1z1kHjxOEiwaDuGAXe24fPOtRsFPgBMmyUjhltU0iJuTtjVjyoqNn8vPMm8R0qAf6lcU-QP0XvJPia1y0cHEaBiWk-ybqjBrzWrR5pb9YBvM1reGsRbMn5ZuwrbXNQ~XLu-JYQ0CaeCJ0ThErlhUbKbBRrIKhLLyqLa3vf6uPvBC-jf7f5Pq5vtoPTQBwOjzRedm96oqwEQ__);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 358px;
  height: 150px;
  border-radius: 20px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const MainContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 16px;
  gap: 10px;

  position: absolute;
  width: 390px;
  height: 342px;
  left: 0px;
  top: 239px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 25px 30px 22px;

  width: 310px;
  height: 260px;

  background: gray;
  border-radius: 20px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 311px;
  height: 55px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const Text = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 29px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #1a1e27;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 311px;
  height: 41px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const Frame3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 14px;
  gap: 1px;
  width: 150px;
  height: 41px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const Frame4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  gap: 10px;
  width: 53px;
  height: 30px;
  background: #f2f4f6;
  border-radius: 5px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

const Frame5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 311px;
  height: 41px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Frame6 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 311px;
  height: 41px;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  top: 0;
  right: 0;
`;

const MainContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;
  flex-wrap: nowrap;

  position: absolute;
  width: 457px;
  height: 168px;
  left: 0px;
  top: 581px;
`;

const Item = styled.div`
  padding: 23px, 20px, 20px, 20px;
  width: 135px;
  height: 168px;
  border-radius: 20px;
  gap: 10px;
  background-color: #f2f2f2;
`;

const BoldText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const NormalText = styled.span`
  font-size: 14px;
  font-weight: normal;
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const App: React.FC = () => {
  return (
    <Total>
      <Background>
        <Header>
          <MainContainer>
            <Item1>
              <svg
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 0.5L22.3253 6.75V19.25L11.5 25.5L0.674683 19.25V6.75L11.5 0.5Z"
                  fill="#B1B8C0"
                />
              </svg>
              <svg
                width="51"
                height="23"
                viewBox="0 0 51 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.58789 22H4.2041C4.11621 22 4.07227 21.9512 4.07227 21.8535V4.74414H0.175781C0.078125 4.74414 0.0292969 4.69531 0.0292969 4.59766L0.0585938 1.24316C0.0585938 1.16504 0.0976562 1.12598 0.175781 1.12598H11.5723C11.6797 1.12598 11.7334 1.16504 11.7334 1.24316V4.59766C11.7334 4.69531 11.6943 4.74414 11.6162 4.74414H7.67578L7.70508 21.8535C7.70508 21.9512 7.66602 22 7.58789 22ZM18.75 22.293C17.6855 22.293 16.7041 22.0195 15.8057 21.4727C14.917 20.9258 14.1992 20.1982 13.6523 19.29C13.1152 18.3721 12.8467 17.3662 12.8467 16.2725L12.876 6.76562C12.876 5.65234 13.1445 4.65137 13.6816 3.7627C14.209 2.86426 14.9219 2.14648 15.8203 1.60938C16.7188 1.0625 17.6953 0.789062 18.75 0.789062C19.8438 0.789062 20.8252 1.05762 21.6943 1.59473C22.5732 2.13184 23.2764 2.85449 23.8037 3.7627C24.3408 4.66113 24.6094 5.66211 24.6094 6.76562L24.6387 16.2725C24.6387 17.3662 24.375 18.3672 23.8477 19.2754C23.3105 20.1934 22.5977 20.9258 21.709 21.4727C20.8203 22.0195 19.834 22.293 18.75 22.293ZM18.75 18.6748C19.3555 18.6748 19.8828 18.4307 20.332 17.9424C20.7812 17.4443 21.0059 16.8877 21.0059 16.2725L20.9766 6.76562C20.9766 6.10156 20.7666 5.54004 20.3467 5.08105C19.9268 4.62207 19.3945 4.39258 18.75 4.39258C18.1348 4.39258 17.6074 4.61719 17.168 5.06641C16.7285 5.51562 16.5088 6.08203 16.5088 6.76562V16.2725C16.5088 16.9268 16.7285 17.4932 17.168 17.9717C17.6074 18.4404 18.1348 18.6748 18.75 18.6748ZM30.4248 22H27.0557C26.958 22 26.9092 21.9512 26.9092 21.8535L26.9678 1.24316C26.9678 1.16504 27.0068 1.12598 27.085 1.12598H36.6943C36.792 1.12598 36.8408 1.16504 36.8408 1.24316V4.62695C36.8408 4.70508 36.8018 4.74414 36.7236 4.74414H30.5713V9.40234H36.7236C36.8018 9.40234 36.8408 9.45117 36.8408 9.54883L36.8701 12.9473C36.8701 13.0254 36.8213 13.0645 36.7236 13.0645H30.5713V21.8535C30.5713 21.9512 30.5225 22 30.4248 22ZM45.0586 22.293C44.0039 22.293 43.0273 22.0195 42.1289 21.4727C41.2305 20.9258 40.5127 20.1934 39.9756 19.2754C39.4482 18.3477 39.1846 17.3369 39.1846 16.2432L39.2432 1.24316C39.2432 1.16504 39.2822 1.12598 39.3604 1.12598H42.7295C42.8076 1.12598 42.8467 1.16504 42.8467 1.24316V16.2432C42.8467 16.917 43.0615 17.4932 43.4912 17.9717C43.9209 18.4404 44.4434 18.6748 45.0586 18.6748C45.7031 18.6748 46.2402 18.4404 46.6699 17.9717C47.0996 17.4932 47.3145 16.917 47.3145 16.2432V1.24316C47.3145 1.16504 47.3535 1.12598 47.4316 1.12598H50.8008C50.8789 1.12598 50.918 1.16504 50.918 1.24316L50.9766 16.2432C50.9766 17.3467 50.7129 18.3623 50.1855 19.29C49.6484 20.208 48.9355 20.9404 48.0469 21.4873C47.1582 22.0244 46.1621 22.293 45.0586 22.293Z"
                  fill="#B1B8C0"
                />
              </svg>
            </Item1>
            <Item2>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.6336 7.33016C8.78673 5.40828 11.0217 4.0625 15 4.0625C18.9783 4.0625 21.2133 5.40828 22.3664 7.33016C23.2284 8.76685 23.3969 10.4031 23.4297 11.626C24.5114 11.7683 25.8118 12.1667 26.9542 12.9892C28.4977 14.1005 29.6875 15.9445 29.6875 18.75C29.6875 21.5555 28.4977 23.3995 26.9542 24.5108C25.4586 25.5877 23.6919 25.9375 22.5 25.9375H7.5C6.30812 25.9375 4.54144 25.5877 3.04579 24.5108C1.50234 23.3995 0.3125 21.5555 0.3125 18.75C0.3125 15.9445 1.50234 14.1005 3.04579 12.9892C4.18816 12.1667 5.48863 11.7683 6.57033 11.626C6.6031 10.4031 6.77159 8.76684 7.6336 7.33016Z"
                  fill="#B1B8C0"
                />
              </svg>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_202_79)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.08709 26.9129C3.4532 27.279 4.0468 27.279 4.41291 26.9129L12.5379 18.7879C12.904 18.4218 12.904 17.8282 12.5379 17.4621C12.1718 17.096 11.5782 17.096 11.2121 17.4621L3.08709 25.5871C2.72097 25.9532 2.72097 26.5468 3.08709 26.9129Z"
                    fill="#B1B8C0"
                  />
                  <path
                    d="M6.25009 11.8566L17.7406 23.3471L19.8619 21.2257L19.3717 16.493L26.2581 10.6514L18.946 3.33926L13.1042 10.2254L8.37141 9.73528L6.25009 11.8566Z"
                    fill="#B1B8C0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.9076 2.40255C19.1693 2.39183 19.4236 2.49111 19.6089 2.67635L26.921 9.98846C27.1062 10.1737 27.2055 10.428 27.1948 10.6898C27.1841 10.9515 27.0643 11.1968 26.8645 11.3663L20.3552 16.8881L20.7944 21.1292C20.8235 21.41 20.7244 21.689 20.5248 21.8886L18.4035 24.01C18.2277 24.1858 17.9892 24.2846 17.7406 24.2846C17.4919 24.2846 17.2535 24.1858 17.0777 24.01L5.58718 12.5195C5.22106 12.1534 5.22106 11.5598 5.58718 11.1937L7.7085 9.07237C7.90814 8.87272 8.18714 8.77368 8.46798 8.80277L12.7091 9.24199L18.231 2.73278C18.4005 2.53302 18.6458 2.41327 18.9076 2.40255ZM19.0026 4.72171L13.8191 10.8319C13.619 11.0678 13.3153 11.1898 13.0076 11.1579L8.71875 10.7138L7.57591 11.8566L17.7406 22.0212L18.8834 20.8784L18.4392 16.5895C18.4073 16.2818 18.5293 15.9782 18.7653 15.778L24.8756 10.5947L19.0026 4.72171Z"
                    fill="#B1B8C0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_202_79">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Item2>
          </MainContainer>
        </Header>
        <Banner>
          <Image />
        </Banner>
        <MainContainer1>
          <Block>
            <Frame1>
              <Text>두부뱅크</Text>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L1 11.5"
                  stroke="#B1B8C0"
                  stroke-width="1.5"
                />
              </svg>
            </Frame1>
            <Frame2>
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20.5" r="20" fill="#FF6161" />
                <path
                  d="M14.3145 28.5L12.8691 22.3672H10.7207V20.4922H12.4199L10.9746 14.3594H13.6699L14.9395 20.4922H16.834L18.2402 14.3594H20.7598L22.166 20.4922H24.0801L25.3301 14.3594H28.0254L26.5801 20.4922H28.2793V22.3672H26.1309L24.6855 28.5H21.834L20.4473 22.3672H18.5723L17.166 28.5H14.3145ZM15.3301 22.3672L15.7793 24.5742H15.8965L16.4043 22.3672H15.3301ZM19.002 20.4922H20.0176L19.5488 18.4609H19.4512L19.002 20.4922ZM22.5957 22.3672L23.1035 24.5938H23.2207L23.6895 22.3672H22.5957Z"
                  fill="white"
                />
              </svg>
              <Frame3>
                두부머니
                <br />
                2,000,000원
              </Frame3>
              <Frame4>송금</Frame4>
            </Frame2>
            <Frame5>
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20.5" r="20" fill="#3965D7" />
                <path
                  d="M19.0215 30.2773V28.6758C15.9453 28.5098 14.002 26.9375 13.9238 24.0859H16.7754C16.8633 25.3359 17.7422 26.0488 19.0215 26.1953V22.5039L18.1426 22.2891C15.7598 21.7031 14.2949 20.5117 14.2949 18.4414C14.2949 16.0391 16.2578 14.3984 19.0215 14.1836V12.582H20.1543V14.1836C22.9961 14.3594 24.8418 16.0391 24.8809 18.4023H22.0684C21.9707 17.4355 21.2773 16.8008 20.1543 16.6445V20.1406L20.8379 20.3164C23.2598 20.8633 25.0762 22.0938 25.0762 24.457C25.0762 26.918 23.2598 28.5098 20.1543 28.6758V30.2773H19.0215ZM17.3027 18.2461C17.2832 19.1055 18.0547 19.5742 19.0215 19.8477V16.6641C17.918 16.8301 17.3223 17.4453 17.3027 18.2461ZM20.1543 26.1953C21.3555 26.0391 22.1074 25.375 22.1074 24.457C22.1074 23.5977 21.4043 23.1484 20.1543 22.7773V26.1953Z"
                  fill="white"
                />
              </svg>
              <Frame3>
                두부머니
                <br />
                800원
              </Frame3>
              <Frame4>송금</Frame4>
            </Frame5>
            <br />
            <Frame6>
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20.5" r="20" fill="#F8C440" />
                <path
                  d="M17.752 24.0469C17.7715 21.625 18.416 20.8633 19.5879 20.1406C20.4277 19.5938 21.0723 18.9883 21.0723 18.0898C21.0723 17.1133 20.3105 16.4688 19.373 16.4688C18.4551 16.4688 17.6152 17.0742 17.5762 18.2266H14.8027C14.8613 15.4727 16.8926 14.1641 19.3926 14.1641C22.1074 14.1641 24.041 15.5898 24.041 17.9922C24.041 19.5938 23.2207 20.6289 21.9316 21.3906C20.8379 22.0547 20.3496 22.6797 20.3301 24.0469V24.2617H17.752V24.0469ZM19.0996 28.6758C18.1816 28.6758 17.4395 27.9336 17.459 27.0352C17.4395 26.1367 18.1816 25.4141 19.0996 25.4141C19.959 25.4141 20.7207 26.1367 20.7207 27.0352C20.7207 27.9336 19.959 28.6758 19.0996 28.6758Z"
                  fill="white"
                />
              </svg>
              <Frame3>
                공인중개사 합격은
                <br />
                <BoldText>에듀윌</BoldText>
              </Frame3>
            </Frame6>
          </Block>
        </MainContainer1>
        <MainContainer2>
          <Item>
            <NormalText>내 자산</NormalText>
            <br />
            <BoldText>두부자산 취합해 보기</BoldText>
            <br />
            <br />
            <Emoji>💰</Emoji>
          </Item>
          <Item>
            <NormalText>내 자산 아님</NormalText>
            <br />
            <BoldText>두부자산 취합해 보기</BoldText>
            <br />
            <br />
            <Emoji>💵</Emoji>
          </Item>
          <Item>
            <NormalText>사실 네 자산임</NormalText>
            <br />
            <BoldText>두부자산 취합해 보기</BoldText>
            <br />
            <br />
            <Emoji>💸</Emoji>
          </Item>
        </MainContainer2>
      </Background>
    </Total>
  );
};

export default App;
