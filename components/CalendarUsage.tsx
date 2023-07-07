import iphone1 from "@/public/assets/iphone-calendar-1.png";
import iphone2 from "@/public/assets/iphone-calendar-2.png";
import iphone3 from "@/public/assets/iphone-calendar-3.png";
import Image from "next/image";
import css from "styled-jsx/css";

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
    position: absolute;
    top: 0;

    margin-left: 80px;
    margin-top: -8%;

    display: flex;
    flex-direction: row;
    gap: 13px;

    transform: scale(0.5);
  }
`;

const CalendarUsage = () => {
  return (
    <>
      <style jsx>{style}</style>

      <div className="container">
        <div className="content-wrapper">
          <p className="header">
            월 달력에서 할 일과 <br />
            일정을 확인해요
          </p>

          <p className="content">
            카테고리별 할 일과 일정을 유동적으로 확인하고,
            <br />
            카테고리 관리를 통해 선택적으로 표시할 수 있습니다.
          </p>
        </div>

        <div className="images">
          <Image
            src={iphone1}
            alt="iphone-calendar-1"
            style={{ marginTop: "-16.5%", marginRight: "12px" }}
          />
          <Image src={iphone2} alt="iphone-calendar-2" />
          <Image src={iphone3} alt="iphone-calendar-3" />
        </div>
      </div>
    </>
  );
};

export default CalendarUsage;
