import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Card = ({ children }) => {
  const cardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [isMeasured, setIsMeasured] = useState(false);
  const [zIndex, setZIndex] = useState(-1);
  const [useVW, setUseVW] = useState(true);

  const front = children.find(child => child.type === Card.Front);
  const expandedTop = children.find(child => child.type === Card.ExpandedTop);
  const expandedBtm = children.find(child => child.type === Card.ExpandedBtm);

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setOrigin({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    const timer = setTimeout(() => {
      measure();

      setTimeout(() => {
        setIsMeasured(true);
      }, 20);
    }, 1000);

    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    const checkAspect = () => {
      setUseVW(window.innerWidth < window.innerHeight);
    };

    checkAspect();
    window.addEventListener('resize', checkAspect);
    return () => window.removeEventListener('resize', checkAspect);
  }, []);

  const handleOpen = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setOrigin({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setZIndex(1000);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setZIndex(-1), 500);
  };

  return (
    <div className={`card${isOpen ? ' on' : ''}`} ref={cardRef} onClick={handleOpen}>
      <motion.div
        className="card_area"
        style={{
          zIndex,
          display: isMeasured ? 'flex' : 'none',
        }}
        animate={
          isOpen
            ? {
                top: '50%',
                left: '50%',
                width: useVW ? '80vw' : '70vh',
                height: useVW ? '80vw' : '70vh',
                transform: 'translate(-50%, -50%)',
              }
            : origin
            ? {
                top: origin.top,
                left: origin.left,
                width: origin.width,
                height: origin.height,
                transform: 'translate(0, 0)',
              }
            : {}
        }
        transition={{
          duration: 0.6,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        <div className="card_front">
          {front}
        </div>
        {isOpen && (
          <>
            <div className="card_expanded_top">
              {expandedTop}
            </div>
            <div className="card_expanded_btm">
              {expandedBtm}
            </div>
          </>
        )}
      </motion.div>

      <div className="overlay"/>
    </div>
  );
};

Card.Front = ({ children }) => children;
Card.ExpandedTop = ({ children }) => children;
Card.ExpandedBtm = ({ children }) => children;

export default Card;