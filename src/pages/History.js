import { motion } from 'framer-motion';

const zoomCircleVariants = {
  initial: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, borderRadius: '0%', transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function History() {
  return (
    <motion.div
      className="profile-motion"
      variants={zoomCircleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub sub_history">
        <div className="scroll_wrap">
          <div className="history">
            <div className="history-item"></div>
            <div className="history-item line"></div>
            <div className="history-item title">
              Suhee's <br />
              Career <br />
              <span className="red">Timeline</span>
            </div>

            <div className="history-item right">
              <ul>
                <li>
                  <div className="date">2021.08</div>
                  <div className="content">웹 디자인 기능사 취득</div>
                </li>
                <li>
                  <div className="date">2021.10</div>
                  <div className="content">H* 그룹 입사</div>
                  <ul className="detail">
                    <li>*비아 유지 보수</li>
                    <li>반응형 이벤트 페이지</li>
                    <li>*손명가 통합 페이지</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="history-item line left">20<br />21</div>
            <div className="history-item"></div>

            <div className="history-item"></div>
            <div className="history-item line right">20<br />23</div>
            <div className="history-item left">
              <ul>
                <li>
                  <div className="date">2023.07</div>
                  <div className="content">강남 그린 아카데미 프론트엔드 SW개발자 양성과정</div>
                  <div className="content">제로베이스 프론트엔드 스쿨</div>
                  <ul className="detail">
                    <li>Frontend Frameworks(React)</li>
                    <li>SCSS</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="history-item right">
              <ul>
                <li>
                  <div className="date">2024.03</div>
                  <div className="content">*플러 입사</div>
                  <ul className="detail">
                    <li>*CO(React) 페이지</li>
                    <li>*진 개정수학 (테블릿 적용 컨텐츠)</li>
                    <li>*래엔 엠티쳐</li>
                    <li>헬스노트 (서브 프로젝트)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="history-item line left">20<br />24</div>
            <div className="history-item"></div>

            <div className="history-item"></div>
            <div className="history-item line right">20<br />25</div>
            <div className="history-item left">
              <ul>
                <li>
                  <div className="date">2025.02</div>
                  <div className="content">**브레인 입사</div>
                  <ul className="detail">
                    <li>*이스크림 교과서</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="history-item"></div>
            <div className="history-item line"></div>
            <div className="history-item"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default History;
