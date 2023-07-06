import Image from "next/image";
import headerLogo from "@/public/assets/header-logo.svg";
import Intro from "@/components/Intro";
import Story from "@/components/Story";

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;

          background-image: url("/assets/comment.svg"), url("/assets/todo.svg"),
            url("/assets/like.svg"), url("/assets/iphone.png"),
            url("/assets/gradation.png");
          background-repeat: no-repeat;
          background-position: 57vw 20vh, 75vw 53vh, 40vw 73vh, center, center;
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
          <Story />
        </main>
      </div>
    </>
  );
};

export default HomePage;
