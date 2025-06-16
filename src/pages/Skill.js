import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

import ThreeHtmlLogo from '../components/ThreeHtmlLogo'
import ThreeCssLogo from '../components/ThreeCssLogo'
import ThreeJsLogo from '../components/ThreeJsLogo'

const zoomVariants = {
  initial: { opacity: 0, scale: 0.2, transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Skill() {

  return (
    <motion.div
      className="page-motion page-motion-skill"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_skill">
        <div className="scroll_wrap">
          <div className="skill">
            <Swiper
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next'
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="title">
                    HTML5
                  </div>
                  <div className="logo_icon">
                    <ThreeHtmlLogo />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="title">
                    CSS3
                  </div>
                  <div className="logo_icon">
                    <ThreeCssLogo />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_content">
                  <div className="title">
                    JAVASCRIPT
                  </div>
                  <div className="logo_icon">
                    <ThreeJsLogo />
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
      </div>
    </motion.div>
  );
}

export default Skill;
