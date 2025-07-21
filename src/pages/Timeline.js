import { motion } from 'framer-motion';

import Card from '../components/Card';

import '../assets/css/timeline.css';

const zoomVariants = {
  initial: { opacity: 0, scale: 0.2, transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Timeline() {
  return (
    <motion.div
      className="page-motion"
      variants={zoomVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_timeline">
        <div className="scroll_wrap">
          <div className="timeline">
            <div className="timeline_title alagambe">
              timeline
            </div>
            <div className="card_layout">
              <Card>
                <Card.Front>
                  <img src={require(`../assets/img/timeline/2021.jpg`)} alt="2021" />
                </Card.Front>
                <Card.ExpandedTop>
                  <div className="title">The first step</div>
                  <div className="year">2021</div>
                </Card.ExpandedTop>
                <Card.ExpandedBtm>
                  <ul>
                    <li>2021.08 / 웹 디자인 기능사 취득</li>
                    <li>2021.10 / H* 그룹(웹 에이전시) 입사</li>
                  </ul>
                </Card.ExpandedBtm>
              </ Card>
              <Card>
                <Card.Front>
                  <img src={require(`../assets/img/timeline/2022.jpg`)} alt="2022" />
                </Card.Front>
                <Card.ExpandedTop>
                  <div className="title">Gaining experience</div>
                  <div className="year">2022</div>
                </Card.ExpandedTop>
                <Card.ExpandedBtm>
                  <ul>
                    <li>2022.04 / K*S 반응형 이벤트 페이지 제작</li>
                    <li>2022.06 / P*B 반응형 웹 사이트 제작</li>
                    <li>2022.09 / B*D 반응형 이벤트 페이지 제작</li>
                  </ul>
                </Card.ExpandedBtm>
              </ Card>
              <Card>
                <Card.Front>
                  <img src={require(`../assets/img/timeline/2023.jpg`)} alt="2023" />
                </Card.Front>
                <Card.ExpandedTop>
                  <div className="title">Time for a revamp</div>
                  <div className="year">2023</div>
                </Card.ExpandedTop>
                <Card.ExpandedBtm>
                  <ul>
                    <li>2023.07 / 강남 그린 아카데미 프론트엔드 SW개발자 양성과정 수료</li>
                    <li>2023.07 / 제로베이스 프론트엔드 스쿨 수료</li>
                  </ul>
                </Card.ExpandedBtm>
              </ Card>
              <Card>
                <Card.Front>
                  <img src={require(`../assets/img/timeline/2024.jpg`)} alt="2024" />
                </Card.Front>
                <Card.ExpandedTop>
                  <div className="title">Shaped by experience</div>
                  <div className="year">2024</div>
                </Card.ExpandedTop>
                <Card.ExpandedBtm>
                  <ul>
                    <li>2024.03 / *플러 입사</li>
                    <li>2024.04 / *CO(React) 페이지</li>
                    <li>2024.03 ~ 2024.08 / *진 개정수학 (테블릿 적용 컨텐츠)</li>
                    <li>2024.08 ~ / *래엔 엠티쳐</li>
                  </ul>
                </Card.ExpandedBtm>
              </ Card>
              <Card>
                <Card.Front>
                  <img src={require(`../assets/img/timeline/2025.jpg`)} alt="2025" />
                </Card.Front>
                <Card.ExpandedTop>
                  <div className="title">Update underway</div>
                  <div className="year">2025</div>
                </Card.ExpandedTop>
                <Card.ExpandedBtm>
                  <ul>
                    <li>2025.02 / 헬스노트 (개인 프로젝트)</li>
                    <li>2025.02 / 모노브레인 입사</li>
                    <li>2025.03 / *이스크림 교육 컨텐츠 작업</li>
                    <li>2025.07 / 정보처리산업기사 준비 중</li>
                  </ul>
                </Card.ExpandedBtm>
              </ Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Timeline;
