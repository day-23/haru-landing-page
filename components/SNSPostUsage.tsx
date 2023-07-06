import css from "styled-jsx/css";
import iphone1 from "@/public/assets/iphone-sns-1.png";
import iphone2 from "@/public/assets/iphone-sns-2.png";
import iphone3 from "@/public/assets/iphone-sns-3.png";
import modal from "@/public/assets/sns-modal.png";
import Image from "next/image";

const style = css`
  * {
    color: #fdfdfd;
  }

  .container {
    display: flex;
    flex-direction: row;

    position: relative;

    width: 1920px;
    height: 1080px;

    padding-top: 140px;
    padding-left: 360px;

    background: #191919;
  }

  .header {
    font-size: 50px;
    font-weight: bold;
    line-height: 70px;

    margin-bottom: 52px;
  }

  .content {
    font-size: 20px;
    font-weight: medium;
    line-height: 36px;
    letter-spacing: -0.4px;
  }

  .images {
    display: flex;
    flex-direction: row;
    gap: 13px;

    margin-top: calc(-20% + 10px);
    margin-left: calc(-20% + 20px);
    transform: scale(0.5);
  }
`;

const SNSPostUsage = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="container">
        <div className="content-wrapper">
          <p className="header">
            나의 하루를 기록하세요 <br />
            하루 쓰기, 하루 그리기
          </p>
          <p className="content">
            이미지를 포함하지 않는 하루 쓰기, 이미지를 포함한
            <br />
            하루 그리기를 구분하여 기록할 수 있습니다.
            <br />
            친구가 내 피드에 남긴 코멘트는 자유롭게 배치하고
            <br />
            공개 여부를 선택할 수 있습니다.
          </p>
        </div>
        <div className="images">
          <Image src={iphone1} alt="sns-iphone1" />
          <Image src={iphone2} alt="sns-iphone2" />
          <Image src={iphone3} alt="sns-iphone3" />
          <Image
            style={{ position: "absolute", top: "65%", left: "-7%" }}
            src={modal}
            alt="sns-modal"
          />
        </div>
      </div>
    </>
  );
};

export default SNSPostUsage;
