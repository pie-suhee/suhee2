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
                    <div className="keyword">프론트엔드 개발자로서의 지향점</div>
                    <div className="content">
                      사용자 중심의 개선과 반복을 통해 완성도 높은 결과물을 만들어가는 과정 속에서, 상황에 맞는 기술을 적용하여 편안하고 깔끔한 UX를 제공하는 프론트엔드 개발자가 되는 것을 목표로 하고 있습니다.
                    </div>
                  </li>
                  <li>
                    <div className="keyword">명확하게 소통하는 동료</div>
                    <div className="content">
                      중의적으로 해석될 수 있는 애니메이션 표현을 명확한 기준으로 분류·정리해, 고객사와 개발 간 소통 오류를 줄인 경험이 있습니다. 이 개선은 업무 효율을 높였고, 수습 기간 후 연봉 17% 인상이라는 결과로 이어졌습니다. 이 경험을 계기로, 앞으로도 사소한 오해라도 놓치지 않고 세심하게 소통하며 협업의 완성도를 높이는 개발자가 되고자 합니다.
                    </div>
                  </li>
                  <li>
                    <div className="keyword">장점</div>
                    <div className="content">
                      사람들과의 협업 속에서 균형을 잘 맞추는 편입니다. 주도적으로 방향을 잡되, 타인의 의견도 존중하고 조율하는 과정에서 오히려 에너지를 얻습니다. 이전 직장에서는 신입 교육을 맡아 개발 흐름을 정리해주거나, 팀원들이 코드를 더 쉽게 이해할 수 있도록 문서화하는 일을 도맡아 했습니다. 이런 경험은 ‘함께 잘 되게 만드는 일’에 큰 보람을 느끼는 저의 성향과도 맞닿아 있습니다.
                    </div>
                  </li>
                  <li>
                    <div className="keyword">단점</div>
                    <div className="content">
                      새로운 것을 배우고 시도하는 것을 좋아하다 보니, 때로는 ‘지금 꼭 필요한가?’를 스스로 점검하지 않으면 우선순위가 흐려질 때도 있습니다. 이를 보완하기 위해 요즘은 ‘내가 이걸 왜 하고 있는가’를 스스로 질문하며, 현재의 목표에 집중하는 습관을 들이고 있습니다.
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
