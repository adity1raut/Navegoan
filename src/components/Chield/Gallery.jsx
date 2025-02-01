import React, { useEffect, useState } from "react";
import "../../styles/Gallery.css"

const Gallery = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  imageWidth = 350,
  imageHeight = 200
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }

  return (
    <div
      className={`overflow-hidden relative w-full ${className}`}
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setStart(false)}
      onMouseLeave={() => pauseOnHover && setStart(true)}
    >
      <div
        className={`flex transition-transform duration-500 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} ${speed === "fast" ? "duration-5000" : "duration-20000"} ${start ? "start" : ""}`}
        ref={scrollerRef}
        style={{ width: `${items.length * imageWidth}px` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-none" style={{ width: imageWidth, height: imageHeight }}>
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;