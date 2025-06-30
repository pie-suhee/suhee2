import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

import ThreeHtmlLogo from '../components/ThreeHtmlLogo'
import ThreeCssLogo from '../components/ThreeCssLogo'
import ThreeJsLogo from '../components/ThreeJsLogo'
import ThreeReactLogo from '../components/ThreeReactLogo'
import ThreeHeart from '../components/ThreeHeart'
import '../assets/css/components.css';

const zoomVariants = {
  initial: { opacity: 0, scale: 0.2, transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Skill() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // 현재 실제 슬라이드 index
  };

  const heartCounts = [[4, 4], [4, 3], [3, 3], [3, 2]];

  return (
    <motion.div
      className="page-motion page-motion-skill"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_skill">
        <div className="skill">
          <div className="alarm_txt">
            ✅ 해당 페이지는 Three.js를 이용하여 만들었습니다.
          </div>

          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="skill-card">
                {activeIndex === 0 && (
                  <ThreeHtmlLogo />
                )}
                <div className="name">HTML</div>
                <div className="detail">
                  AI·DT 교과서 프로젝트 참여,<br />
                  웹 표준 및 접근성 가이드라인을 반영한 실무 경험 보유
                </div>
                <div className="heart-box">
                  {activeIndex === 0 && (
                    [...Array(5)].map((_, i) => (
                      <ThreeHeart
                        key={i}
                        color1={i < heartCounts[0][0] ? "DC143C" : "C3C3C3"}
                        color2={i < heartCounts[0][1] ? "DC143C" : "C3C3C3"}
                      />
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill-card">
                {activeIndex === 1 && (
                  <ThreeCssLogo />
                )}
                <div className="name">CSS3</div>
                <div className="detail">
                  React 모바일 커머스 앱 메인 화면 개발 참여<br />
                  Tailwind CSS 및 Sass(SCSS)로 스타일링 구조화
                </div>
                <div className="heart-box">
                  {activeIndex === 1 && (
                    [...Array(5)].map((_, i) => (
                      <ThreeHeart
                        key={i}
                        color1={i < heartCounts[1][0] ? "DC143C" : "C3C3C3"}
                        color2={i < heartCounts[1][1] ? "DC143C" : "C3C3C3"}
                      />
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill-card">
                {activeIndex === 2 && (
                  <ThreeJsLogo />
                )}
                <div className="name">JAVASCRIPT</div>
                <div className="detail">
                  JavaScript 기본 문법과 핵심 개념에 익숙하며<br />
                  실무 적용이 가능한 수준의 구현 경험 보유
                </div>
                <div className="heart-box">
                  {activeIndex === 2 && (
                    [...Array(5)].map((_, i) => (
                      <ThreeHeart
                        key={i}
                        color1={i < heartCounts[2][0] ? "DC143C" : "C3C3C3"}
                        color2={i < heartCounts[2][1] ? "DC143C" : "C3C3C3"}
                      />
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="skill-card">
                {activeIndex === 3 && (
                  <ThreeReactLogo />
                )}
                <div className="name">REACT</div>
                <div className="detail">
                  React 기반 UI 구현 및 컴포넌트 구성에 익숙하며<br />
                  Props를 활용한 데이터 흐름 및 구조 설계 경험 보유
                </div>
                <div className="heart-box">
                  {activeIndex === 3 && (
                    [...Array(5)].map((_, i) => (
                      <ThreeHeart
                        key={i}
                        color1={i < heartCounts[3][0] ? "DC143C" : "C3C3C3"}
                        color2={i < heartCounts[3][1] ? "DC143C" : "C3C3C3"}
                      />
                    ))
                  )}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="custom-button custom-prev">
            <img src={require(`../assets/img/skill/prevBtn.png`)} alt="이전 버튼" />
          </div>

          <div className="custom-button custom-next">
            <img src={require(`../assets/img/skill/nextBtn.png`)} alt="다음 버튼" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
