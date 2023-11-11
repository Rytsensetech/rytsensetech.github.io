import React, { useEffect, useRef, useState } from "react";

const ImgaeAnimation = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const image = imageRef.current;

      const imageOffsetTop = image.getBoundingClientRect().top + scrollY;

      // Calculate the initial translateX value to move the image slightly to the left
      const initialTranslateX = 500;

      // Apply the transform property with a transition for smooth movement
      image.style.transition = "transform 4.3s ease";
      image.style.transform = `translateX(-${initialTranslateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="monitor rotate move-left mb-52" ref={imageRef}>
      <picture>
        <img src="/images/bg/joshh.png" alt="Monitor" loading="lazy" />
      </picture>
    </div>
  );
};

export default ImgaeAnimation;
