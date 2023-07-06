import Image from "next/image";
import css from "styled-jsx/css";
import iphone1 from "@/public/assets/iphone-todo-1.png";
import iphone2 from "@/public/assets/iphone-todo-2.png";

const style = css`
  * {
    color: #fdfdfd;
  }

  .container {
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
  }

  .content {
    font-size: 20px;
    font-weight: medium;
    line-height: 36px;
    letter-spacing: -0.4px;

    margin-top: 52px;
  }

  .images {
    position: absolute;
    top: 0%;

    display: flex;
    transform: scale(0.5);
  }
`;

const TodoUsage = () => {
  return (
    <>
      <style jsx>{style}</style>

      <div className="container">
        <p className="header">하루, 이렇게 활용해요!</p>
        <p className="header" style={{ width: "620px", marginTop: "276px" }}>
          하나의 할 일에 여러 태그를 붙여 다양하게 관리해요
        </p>
        <p className="content">
          할 일에 태그를 붙이면 상단바에서 쉽게 분류할 수 있습니다.
          <br />
          여러 개의 태그를 붙이고 손쉽게 정렬해 보세요!
        </p>

        <div className="images">
          <Image
            style={{
              position: "relative",
              top: "20px",
              left: "35%",
            }}
            src={iphone1}
            alt="iphone1"
          />
          <Image src={iphone2} alt="iphone2" />
        </div>
      </div>
    </>
  );
};

export default TodoUsage;
