import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import iphone from "@/public/assets/iphone.png";

const Intro = () => {
  return (
    <>
      <style jsx>{`
        .container {
          position: relative;
          height: 100%;
        }

        p {
          color: #ffffff;
          font-size: 40px;
          font-weight: bold;
        }

        .logo {
          position: absolute;
          top: 0;
          left: 0;

          margin-top: 144px;
          margin-left: 360px;
        }

        .iphone {
          position: absolute;
          top: 0;
          left: 0;

          margin-top: -185px;
        }
      `}</style>
      <div className="container">
        <div className="logo">
          <Image src={logo} alt="logo" />
          <p style={{ marginTop: "40px", width: "490px" }}>
            하나씩 이루어가는 나만의 습관!
          </p>
        </div>

        <div className="iphone">
          <Image className="iphone" src={iphone} alt="iphone" />
        </div>
      </div>
    </>
  );
};

export default Intro;