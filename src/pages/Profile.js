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
                    <div className="keyword">기술에 대한 호기심에서 시작된 커리어</div>
                    <div className="content">
                      처음에는 공무원 시험을 준비하다가 우연히 접한 컴퓨터 과목에서 큰 흥미를 느꼈고, 그 길로 방향을 바꿔 웹디자인기능사 자격증을 취득하며 웹 퍼블리싱을 배우기 시작했습니다. 당시에는 HTML과 CSS만으로도 배워야 할 것이 무궁무진하다고 느낄 만큼 모든 것이 새롭고 재미있었습니다. 하지만 점차 기술 발전에 대한 요구가 높아지는 상황 속에서, 더 나아가기 위한 방향이 내부적으로 제한적이라고 느꼈고, 스스로 React를 다시 공부하며 기술 스택을 확장하게 되었습니다. 이후 새로운 회사에서는 불필요한 JavaScript를 줄이고 CSS로 문제를 해결하는 방식, 코드 효율성과 유지보수성에 대한 시야를 넓힐 수 있었습니다. 다만 시간이 흐르며 회사의 주력 방향이 점차 교육 콘텐츠 중심으로 전환되었고, 그 과정에서 실제 서비스형 웹 프로젝트, 반응형 환경, 프레임워크 기반 개발에서 점점 멀어지게 되었습니다. 저 역시 더 성장하고 싶은 마음에 현재의 기술 흐름과 실무 경험을 계속 이어갈 수 있는 환경을 찾고자 이직을 결심하게 되었습니다.
                    </div>
                  </li>
                  <li>
                    <div className="keyword">React 기반 개발과 UI/UX 개선 경험</div>
                    <div className="content">
                      그동안의 기술 경험으로는 fakestore API를 활용해 데이터를 연동하고, Redux로 상태 관리를 구현한 React 기반의 쇼핑몰 프로젝트를 진행하며 실제 흐름에 맞춘 데이터 처리 경험을 쌓았습니다. 또한 반응형 이벤트 페이지를 작업하며 다양한 뷰포트 환경에 맞춰 UI를 조정하고, 사용자 흐름을 고려한 퍼블리싱에도 집중해왔습니다. 그리고 디자이너 1명, 프론트엔드 개발자 3명이 함께 사적으로 기획한 ‘피움’ 프로젝트를 통해 코드의 컴포넌트화와 UI/UX를 다시 고민하게 되었고, 재사용성과 유지보수성을 고려한 구조 설계의 중요성을 실감하는 계기도 얻었습니다.
                    </div>
                  </li>
                  <li>
                    <div className="keyword">3D 기술에 대한 관심과 실습 경험</div>
                    <div className="content">
                      요즘은 사용자 경험의 몰입도를 높이기 위해 웹에서도 3D 요소를 적극적으로 활용하는 추세입니다. 저 역시 WebGL에 대한 관심을 갖고 Three.js를 학습하게 되었고, SVG의 path 데이터를 기반으로 Shape을 만들거나 glTF 파일을 불러와 3D 오브젝트를 표현하는 방법 등을 실습해보았습니다. 특히 카메라 각도나 조명 위치를 세밀하게 조정해야 하고, 물질의 특성까지 고려해야 한다는 점에서 이 기술이 매우 섬세하고 매력적으로 느껴졌습니다. 이렇게 습득한 기술은 실제로 제 포트폴리오 사이트의 기술 로고 구현에 직접 적용해보며, 학습한 내용을 실제 UI에 녹여내는 경험도 할 수 있었습니다.
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
