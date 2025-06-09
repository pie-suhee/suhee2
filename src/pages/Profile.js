import { motion } from 'framer-motion';

const zoomCircleVariants = {
  initial: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, borderRadius: '0%', transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Profile() {
  return (
    <motion.div
      className="profile-motion"
      variants={zoomCircleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sub">
        <div className="scroll_wrap">
          <div className="profile">
            <h1 className="title">PROFILE</h1>

            <div className="section full-name">
              <div className="info-field">Full Name</div>
              <div className="info"></div>
            </div>

            <div className="section basic-info">
              <div className="photo-box">
                <img src={require(`../assets/img/profile/profile.jpg`)} alt="프로필 사진" />
              </div>
              <div className="right-info">
                <div className="info-field">Nickname</div>
                <div className="info"></div>
                <div className="info-field">Age</div>
                <div className="info"></div>
                <div className="info-field">Nationality</div>
                <div className="info"></div>
                <div className="info-field">Sexuality</div>
                <div className="info"></div>
                <div className="info-field">Sexuality</div>
                <div className="info"></div>
              </div>
            </div>

            <div className="section type2">
              <div className="info-field">Personality</div>
              <div className="info">dddddddddd</div>
            </div>

            <div className="section traits">
              <div className="info-field">Nickname</div>
              <div className="info"></div>
              <div className="info-field">Age</div>
              <div className="info"></div>
              <div className="info-field">Nationality</div>
              <div className="info"></div>
              <div className="info-field">Sexuality</div>
              <div className="info"></div>
            </div>

            <div className="section family">
              <div className="info-field">Nickname</div>
              <div className="info"></div>
              <div className="info-field">Age</div>
              <div className="info"></div>
              <div className="info-field">Nationality</div>
              <div className="info"></div>
              <div className="info-field">Sexuality</div>
              <div className="info"></div>
            </div>

            <div className="section type2">
              <div className="info-field">Personality</div>
              <div className="info">dddddd</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
