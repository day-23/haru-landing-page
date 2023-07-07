import characterImage from "@/public/assets/characters.png";
import explain1 from "@/public/assets/explain-hagi.png";
import explain2 from "@/public/assets/explain-ruri.png";
import Image from "next/image";
import css from "styled-jsx/css";

const style = css`
  * {
    color: #222222;
  }

  .container {
    display: flex;
    justify-content: center;

    background-color: #ffffff;
    padding-top: 140px;

    width: 1920px;
    height: 1080px;
  }

  .header {
    font-size: 50px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
  }

  .content {
    font-size: 20px;
    font-weight: medium;
    line-height: 30px;
    letter-spacing: -0.4px;
    text-align: center;
  }

  .characters {
    display: flex;

    position: relative;
    transform: scale(0.5);
    top: -25%;
  }

  .wrapper {
    width: 1920px;

    display: flex;
    align-items: center;

    margin-left: -5%;
  }
`;

const CharacterDescription = () => {
  return (
    <>
      <style jsx>{style}</style>
      <div className="container">
        <div>
          <p style={{ marginBottom: "52px" }} className="header">
            하기와 루리
          </p>
          <p className="content">
            할 일 실천을 위해 노력하는 하기와
            <br />
            외계 행성에서 불시착한 루리의 동상이몽 공생 이야기,
            <br />
            ‘하루’에서 만나보세요!
          </p>

          <div className="wrapper">
            <div
              style={{ position: "relative", marginTop: "-2%", left: "22%" }}
            >
              <Description character="hagi" />
            </div>
            <div className="characters">
              <Image
                src={explain1}
                alt="explain-hagi"
                style={{ marginTop: "15%", marginRight: "10%" }}
              />
              <Image src={characterImage} alt="hari-ruri" />
              <Image
                src={explain2}
                alt="explain-ruri"
                style={{ marginTop: "30%" }}
              />
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "15%",
                marginLeft: "-20%",
              }}
            >
              <Description character="ruri" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Description = ({ character }: { character: "hagi" | "ruri" }) => {
  const name = character == "hagi" ? "하기" : "루리";

  return (
    <>
      <style jsx>{`
        .name {
          color: ${character == "hagi" ? "#1DAFFF" : "#9EA9FF"};
          font-size: 30px;
          font-weight: bold;
          line-height: 50px;
          letter-spacing: -0.6px;
          text-align: center;
          margin-bottom: 20px;
        }

        .description {
          color: #222222;
          font-size: 20px;
          font-weight: medium;
          line-height: 30px;
          letter-spacing: -0.4px;
          text-align: center;
        }
      `}</style>

      <div style={{ width: "300px" }}>
        <p className="name">{name}</p>
        {character == "hagi" ? (
          <p className="description">
            낙관적이고 우유부단한 덜렁이지만
            <br />
            바뀌기 위해 노력하는 중이에요
          </p>
        ) : (
          <p className="description">
            꼼꼼하고 단호한 성격으로
            <br />
            하기의 할 일과 일정 관리를 도와줘요
          </p>
        )}
      </div>
    </>
  );
};

export default CharacterDescription;
