const Story = () => {
  return (
    <>
      <style jsx>{`
        .container {
          background-image: url("/assets/water-drop.png");
          background-repeat: no-repeat;
          background-position: 0 -40vh;
          background-size: cover;

          width: 1920px;
          height: 1080px;

          padding-top: 140px;
          padding-left: 360px;
        }

        .content {
          color: #222222;
        }

        .content .header {
          font-size: 50px;
          font-weight: bold;

          line-height: 70px;
          margin-bottom: 54px;
        }

        .content p {
          font-size: 20px;
          font-weight: medium;

          line-height: 30px;
          letter-spacing: -0.4px;
        }
      `}</style>

      <div className="container">
        <div className="content">
          <p className="header">하루 이야기</p>
          <p>
            ‘하루’는 일정 및 할 일 관리를 돕는 신개념 SNS 애플리케이션입니다.
            <br />
            사용자가 계획 실행과 이행을 부담스럽지 않게 시작하고
            <br />
            이를 습관화할 수 있도록 돕기 위해 탄생했습니다.
            <br />
            <br />
            팀 데이셋은 할 일과 일정을 직관적으로 확인하고,
            <br />
            가까운 친구들과 일상을 공유함으로써 체계적인 하루를 가꾸는 일에
            집중합니다.
            <br />
            <br />
            나의 하루를 기록할 수 있는 SNS 기능과
            <br />
            본인의 할 일, 일정을 유동적으로 관리하는 유저 프로세스를
            <br />
            하나의 애플리케이션에서 실현하고자 합니다.
            <br />
            <br />
            ‘하루’에서 작은 실천을 이루며 당신의 미래를 빛낼 수 있도록
            응원합니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Story;
