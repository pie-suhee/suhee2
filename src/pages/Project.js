import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import projectData from '../assets/json/projectData.json';
import maskPathList from '../assets/json/maskPathList.json';

const zoomCircleVariants = {
  initial: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0 }},
  animate: { opacity: 1, scale: 1, borderRadius: '0%', transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }},
  exit: { opacity: 0, scale: 0.2, borderRadius: '50%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }},
};

function Project() {
  const location = useLocation();
  const [fromDetailPage, setFromDetailPage] = useState(location.state?.fromDetail === true);

  useEffect(() => {
    if (fromDetailPage) {
      const timer = setTimeout(() => {
        setFromDetailPage(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [fromDetailPage]);

  return (
    <motion.div
      className="page-motion"
      variants={zoomCircleVariants}
      initial={fromDetailPage ? false : 'initial'}
      animate={fromDetailPage ? false : 'animate'}
      exit={fromDetailPage ? false : 'exit'}
    >
      <div className="sub sub_project">
        <div className="scroll_wrap">
          <div className="project">
            <div className="project_title alagambe">
              project
            </div>

            <ul className="project_list">
              {projectData.map((project, index) => (
                <li key={project.id}>
                  <Link to={`/project/${index}`} key={index}>
                    <div className="img_box">
                      <svg>
                        <defs>
                          <pattern
                            id={`imgPattern_${index}`}
                            className="imgPattern"
                            patternUnits="userSpaceOnUse"
                            width="100%"
                            height="100%"
                          >
                            <image
                              href={require(`../assets/img/project/${project.img}`)}
                              preserveAspectRatio="xMidYMid slice"
                            />
                          </pattern>
                          <mask id={`number-mask_${index}`} className="number-mask">
                            <rect width="100%" height="100%" fill="white" />
                            <path d={maskPathList[index]} fill="black" />
                          </mask>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#imgPattern_${index})`}
                          mask={`url(#number-mask_${index})`}
                        />
                      </svg>
                    </div>

                    <div className="text_box">
                      <div className="title">{project.title}</div>
                      <div className="status_box">
                        <div className={`finish ${project.finish}`}>
                          <div className="dot"></div>
                          <div className="txt">{project.finish === 'y' ? '작업 완료' : '진행 중'}</div>
                        </div>
                      </div>
                      <ul className="tag_box">
                        {project.tags.map((tag) => (
                          <li key={tag} className={`tag ${tag}`}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
