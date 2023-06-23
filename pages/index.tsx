import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .container {
          background: linear-gradient(to right, #d2d7ff, #aad7ff);
          background-clip: initial;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: all;
          -webkit-user-select: none;
          font-size: 32px;
        }

        .container h1 {
          font-family: "Pretendard", sans-serif;
        }
      `}</style>

      <div className="container">
        <h1>Hello, Haru is comming soon.</h1>
      </div>
    </>
  );
};

export default HomePage;
