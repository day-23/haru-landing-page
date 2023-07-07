import Image from "next/image";
import css from "styled-jsx/css";
import appIcon from "@/public/assets/app-icon.svg";

const style = css`
  * {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .container {
    width: 1920px;
    height: 1080px;
    background-color: #f2f5f9;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 140px;
  }

  .header {
    font-size: 40px;
    font-weight: bold;
    line-height: 58px;
    text-align: center;

    color: #191919;

    margin-bottom: 93px;
  }

  .buttons {
    display: flex;
    gap: 20px;

    margin-top: 40px;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 60px;
    background: #1dafff 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;

    color: #ffffff;
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
    text-decoration: none;

    margin-bottom: 117px;
  }

  .divider {
    width: 1200px;
    height: 0px;
    border: 2px solid #646464;
    opacity: 1;
  }

  .information {
    display: flex;
    width: 1200px;
    padding-top: 32px;
    justify-content: space-between;
  }

  .information > .content {
    display: flex;
    flex-direction: column;
  }

  .information p,
  .information a {
    font-size: 20px;
    font-weight: medium;
    line-height: 40px;
    color: #646464;
  }

  .information > .policy {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

const Footer = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="container">
        <p className="header">
          하나씩 이루어가는 나만의 습관!
          <br />
          지금 시작해 볼까요?
        </p>

        <Image src={appIcon} alt="icon" />

        <div className="buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.dayset.haru"
            target="_blank"
            className="button"
          >
            Google play
          </a>
          <a
            href="https://apps.apple.com/app/%ED%95%98%EB%A3%A8-haru/id6450260497"
            target="_blank"
            className="button"
          >
            App store
          </a>
        </div>

        <div className="divider" />
        <div className="information">
          <div className="content">
            <p>TEAM. 데이셋</p>
            <p>사업자등록번호</p>
            <p>CONTACT. mmj9808@gmail.com</p>
            <p>23haru.com</p>
          </div>
          <div className="policy">
            <a
              href="https://github.com/day-23/policy/blob/main/%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80.md"
              target="_blank"
            >
              서비스 이용약관
            </a>
            <a
              href="https://github.com/day-23/policy/blob/main/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8.md"
              target="_blank"
            >
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
