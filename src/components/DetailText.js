import { useEffect, useRef, useState } from 'react';

const DetailText = ({ children }) => {
  const wrapperRef = useRef(null);
  const spanRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    const wrapper = wrapperRef.current;
    const span = spanRef.current;
    if (!wrapper || !span) return;

    const wrapperHeight = wrapper.clientHeight;
    const textHeight = span.scrollHeight;

    setIsOverflowing(textHeight > wrapperHeight);
  };

  useEffect(() => {
    // 최초 체크
    const raf = requestAnimationFrame(() => checkOverflow());

    // ResizeObserver
    const observer = new ResizeObserver(checkOverflow);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    if (spanRef.current) observer.observe(spanRef.current);

    window.addEventListener('resize', checkOverflow);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <div className="detail" ref={wrapperRef}>
      <span
        ref={spanRef}
        style={{opacity: isOverflowing ? 0 : 1}}
      >
        {children}
      </span>
    </div>
  );
};

export default DetailText;
