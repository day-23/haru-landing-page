import Image from "next/image";
import headerLogo from "@/public/assets/header-logo.svg";
import Intro from "@/components/Intro";

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;

          background-size: cover;
          background-position: center;
          background-image: url("/assets/iphone.png"),
            url("/assets/gradation.png");
        }

        .header {
          height: 120px;
          width: 100vw;

          position: absolute;
          top: 0;
          left: 0;

          opacity: 1;
          background: #ffffff1e;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }

        main {
          margin-top: 120px;
        }
      `}</style>

      <div className="container">
        <header className="header">
          <Image
            src={headerLogo}
            alt="logo"
            style={{ marginLeft: "60px", marginTop: "34px" }}
          />
        </header>

        <main>
          <Intro />
        </main>
      </div>
    </>
  );
};

export default HomePage;
