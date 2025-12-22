import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../assets/css/project_detail.css';

import projectData from '../assets/json/projectData.json';

function parseDescription(desc) {
  const parts = desc
    .split('$')
    .map((line, lineIdx) => {
      const lineElements = [];
      let remaining = line;
      const highlightRegex = /\^(.+?)\^/;
      let match;

      while ((match = highlightRegex.exec(remaining))) {
        const [fullMatch, highlightText] = match;
        const before = remaining.slice(0, match.index);
        const after = remaining.slice(match.index + fullMatch.length);

        if (before) lineElements.push(before);
        lineElements.push(
          <span key={`highlight-${lineIdx}-${match.index}`} className="highlight">
            {highlightText}
          </span>
        );

        remaining = after;
      }

      if (remaining) lineElements.push(remaining);

      return (
        <>
          {lineElements}<br />
        </>
      );
    });

  return parts;
}

function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  return (
    <div className="npage-motion">
        <div className="sub sub_project_detail">
            <div className="scroll_wrap">
              <div className="project_detail">
                <button className="backBtn" onClick={() => navigate('/project', { state: { fromDetail: true } })} aria-label="뒤로 가기 버튼"></button>

                <div className="contents">
                  <div className="block">
                    <div className="title">
                      {projectData[projectId].title}
                    </div>

                    {projectData[projectId].desc && (
                      <div className="explanation">
                        {parseDescription(projectData[projectId].desc)}
                      </div>
                    )}
                  </div>

                  <div className="block">
                    <div className="title">
                      주요 정보
                    </div>

                    <ul>
                      {projectData[projectId].date && (
                      <li>
                        <div className="index">기간</div>
                        <div className="date">{projectData[projectId].date}</div>
                      </li>
                      )}
                      {projectData[projectId].action && (
                        <li>
                          <div className="index">주요 기능</div>
                          <div className="action">{projectData[projectId].action}</div>
                        </li>
                      )}
                      <li>
                        <div className="index">주요 기술</div>
                        <div className="skill">{projectData[projectId].skill}</div>
                      </li>
                      {projectData[projectId].contribution && (
                        <li>
                          <div className="index">기여도</div>
                          <div className="contribution">{projectData[projectId].contribution}</div>
                        </li>
                      )}
                      {projectData[projectId].plan && (
                        <li>
                          <div className="index">기획서</div>

                          <button
                            className="plan"
                            onClick={() => window.open(projectData[projectId].plan, '_blank')}
                          >
                            기획서 URL
                          </button>
                        </li>
                      )}
                      {projectData[projectId].git && (
                        <li>
                          <div className="index">깃허브</div>

                          <button
                            className="git"
                            onClick={() => window.open(projectData[projectId].git, '_blank')}
                          >
                            깃허브 URL
                          </button>
                        </li>
                      )}
                      {projectData[projectId].url && (
                        <li>
                          <div className="index">URL</div>

                          <button
                            className="url"
                            onClick={() => window.open(projectData[projectId].url, '_blank')}
                          >
                            배포 URL
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>

                  {projectData[projectId].trouble && (
                    <div className="block">
                      <div className="title">트러블슈팅</div>

                      <div className="trouble">
                        {parseDescription(projectData[projectId].trouble)}
                      </div>
                    </div>
                  )}

                  {projectData[projectId].screen && (
                    <div className="block">
                      <div className="title">
                        스크린 샷
                      </div>

                      <ul className="screen_ul">
                        {projectData[projectId].screen.map((src, idx) => (
                          <li key={idx}>
                            <img
                              src={require(`../assets/img/project/${src}`)}
                              alt={`스크린샷 ${idx + 1}`}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default ProjectDetail;