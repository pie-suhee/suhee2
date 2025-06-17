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
import ThreeHeart from '../components/ThreeHeart'
import '../css/components.css';

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
              {activeIndex === 0 && (
                <div className="swiper_content">
                  <div className="top_box">
                    <div className="title">
                      HTML5
                    </div>
                    <div className="logo_icon">
                      <ThreeHtmlLogo />
                    </div>
                  </div>

                  <div className="skill_content">
                    <div className="scroll_wrap">
                      <div className="explane">
                        ai dt 교과서 작업 중<br />
                        웹 표준 및 접근성을 반영한<br />
                        프로젝트 수행 경험 보유
                      </div>

                      <div className="heart_box">
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="C3C3C3" color2="C3C3C3" />
                      </div>

                      <div className="project_box">
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {activeIndex === 1 && (
                <div className="swiper_content">
                  <div className="top_box">
                    <div className="title">
                      CSS3
                    </div>
                    <div className="logo_icon">
                      <ThreeCssLogo />
                    </div>
                  </div>

                  <div className="skill_content">
                    <div className="scroll_wrap">
                      <div className="explane">
                        모바일 쇼핑몰 앱 메인 작업 중<br />
                        tailwind.css를 사용 경험 보유<br />
                        sass 중 scss 사용 가능
                      </div>

                      <div className="heart_box">
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="C3C3C3" />
                        <ThreeHeart color1="C3C3C3" color2="C3C3C3" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {activeIndex === 2 && (
                <div className="swiper_content">
                  <div className="top_box">
                    <div className="title">
                      JAVASCRIPT
                    </div>
                    <div className="logo_icon">
                      <ThreeJsLogo />
                    </div>
                  </div>

                  <div className="skill_content">
                    <div className="scroll_wrap">
                      <div className="explane">
                        기본 문법과 주요 개념에 익숙하며,<br />
                        실무에서 활용 가능한 수준의<br />
                        구현 경험 보유
                      </div>

                      <div className="heart_box">
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="DC143C" color2="DC143C" />
                        <ThreeHeart color1="C3C3C3" color2="C3C3C3" />
                        <ThreeHeart color1="C3C3C3" color2="C3C3C3" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
