import Image from "next/image";
import headerLogo from "@/public/assets/header-logo.svg";
import Intro from "@/components/Intro";
import Story from "@/components/Story";
import TodoUsage from "@/components/TodoUsage";
import CalendarUsage from "@/components/CalendarUsage";
import SNSPostUsage from "@/components/SNSPostUsage";

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 1920px;
          height: 1080px;
          display: flex;
          flex-direction: column;

          background-image: url("/assets/comment.svg"), url("/assets/todo.svg"),
            url("/assets/like.svg"), url("/assets/iphone.png"),
            url("/assets/gradation.png");
          background-repeat: no-repeat;
          background-position: 60% 20%, 79% 60%, 41% 80%, center, center;
        }

        .header {
          width: 1920px;
          height: 120px;

          position: absolute;
          top: 0;
          left: 0;

          opacity: 1;
          background: #ffffff1e;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }

        .divider {
          height: 0.5px;
          background: #acacac;
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
          <TodoUsage />
          <CalendarUsage />
          <div className="divider" />
          <SNSPostUsage />
        </main>
      </div>
    </>
  );
};

export default HomePage;
