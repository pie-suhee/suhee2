import { motion } from 'framer-motion';

const zoomVariants = {
  initial: { opacity: 0, scale: 0.2, transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Profile() {
  return (
    <motion.div
      className="page-motion"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_profile">
        <img className="sticker sticker2" src={require(`../assets/img/profile/sticker2.png`)} alt="스티커" />
        <img className="sticker sticker3" src={require(`../assets/img/profile/sticker3.png`)} alt="스티커" />

        <div className="scroll_wrap">
          <div className="profile">
            <h1 className="title playfair">PROFILE</h1>

            <div className="section full-name">
              <div className="info-field">지원분야</div>
              <div className="info">퍼블리셔 / Front-End 개발</div>
            </div>

            <div className="section basic-info">
              <div className="photo-box">
                <img src={require(`../assets/img/profile/profile.jpg`)} alt="프로필 사진" />
              </div>
              <div className="right-info">
                <div className="info-field">이름</div>
                <div className="info">임수희</div>
                <div className="info-field">생년월일</div>
                <div className="info">2000.03.14</div>
                <div className="info-field">전화번호</div>
                <div className="info">010-7227-2783</div>
                <div className="info-field">이메일</div>
                <div className="info">tngmltngml4@naver.com</div>
                <div className="info-field">학교/전공</div>
                <div className="info">한양대학교사범대학부속여자고등학교</div>
              </div>
            </div>

            <div className="section company type2">
              <div className="info-field gray">경력</div>
              <div className="info">
                <div className="name">H* 그룹</div>
                <div className="date">2021.10 ~ 2022.11</div>
                <div className="name">*플러</div>
                <div className="date">2024.03 ~ 2025.01</div>
                <div className="name">**브레인 (프리랜서)</div>
                <div className="date">2025.02 ~ 2025.05</div>
              </div>
            </div>

            <div className="section introduce type2">
              <img className="sticker sticker1" src={require(`../assets/img/profile/sticker1.png`)} alt="스티커" />

              <div className="info-field">자기소개</div>
              <div className="info">
                <ul>
                  <li>
                    <div className="content">
                      막히면 오래 고민하기보다는 직접 움직입니다.
                      모르는 게 생기면 바로 자리에 일어나 디자이너나 개발자에게 먼저 물어보는 편이고,
                      작은 이슈라도 빠르게 공유하고 해결점을 찾아가는 걸 중요하게 생각합니다.<br />
                      &nbsp;&nbsp;퍼블리셔는 혼자만의 작업이 아닌, 디자인 의도를 정확히 구현하고, 사용자에게 매끄럽게 전달되도록 다듬는 일이라고 생각합니다.
                      그래서 혼자 빠르게 일하는 것보다, 다른 팀원과 일의 흐름을 끊기지 않게 이어가는 방식에 더 익숙합니다.<br />
                      &nbsp;&nbsp;실무에서는 의미 없는 반복 작업보다 구조화된 퍼블리싱, 유지보수 가능한 마크업,
                      상황에 맞는 CSS 설계 방식이 얼마나 중요한지도 몸으로 배워왔습니다.
                      React와 Tailwind CSS 환경에서 컴포넌트 기반으로 퍼블리싱을 진행해본 경험이 있으며,
                      웹 접근성과 시맨틱 마크업에 대한 이해를 바탕으로 QA 대응이나 개발 연동에서도 안정적인 작업을 지향합니다.<br />
                      &nbsp;&nbsp;'몸이 가볍다'는 건 단순히 빠르다는 의미가 아니라,
                      함께 일하는 사람들에게 부담 없이 움직이고 연결되는 사람이라는 뜻으로 기억되었으면 좋겠습니다.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
