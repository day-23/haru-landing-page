import Image from "next/image";
import css from "styled-jsx/css";
import scrollTags from "@/public/assets/scroll-tags.png";
import iphone from "@/public/assets/iphone-sns-tags.png";

const style = css`
  * {
    color: #fdfdfd;
  }

  .container {
    display: flex;
    flex-direction: column;

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
`;

const SNSDailyUsage = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="container">
        <div>
          <p className="header">
            새로운 친구들의 하루와
            <br />
            일별 인기 태그를 둘러보세요
          </p>
          <p className="content">
            둘러보기 탭에는 일일 인기 태그 10종이 표시됩니다.
            <br />
            다른 친구들의 다양한 하루를 자유롭게 둘러보고 구경할 수 있습니다.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            transform: "scale(0.5)",
            left: "-25%",
            marginTop: "50px",
          }}
        >
          <Image src={scrollTags} alt="tags" />
        </div>
        <div
          style={{
            position: "relative",
            transform: "scale(0.5)",
            left: "25%",
            marginTop: "-40%",
            marginLeft: "-12.5%",
          }}
        >
          <Image src={iphone} alt="iphone-tags" />
        </div>
      </div>
    </>
  );
};

export default SNSDailyUsage;
