// src/components/HeroSection.js
import React, { useRef, useEffect, Fragment, useContext } from "react";
import heroStyles from "@/section/home/heroSection/Hero.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import genai from "@/assets/home/genai.logo.png";
import productImage from "@/assets/home/productImage.png";
import { ModalContext } from "@/context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const videoRef = useRef(null);
  const homeVideoRef = useRef(null);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.disablePictureInPicture = true;
    }

    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const applyGsapAnimation = () => {
      if (mediaQuery.matches) {
        gsap.fromTo(
          videoRef.current,
          {
            y: "0%",
            scale: 1,
            opacity: 1,
          },
          {
            y: "20%",
            scale: 1.1,
            opacity: 1,
            scrollTrigger: {
              trigger: homeVideoRef.current,
              start: "top bottom",
              end: "top center",
              scrub: true,
              markers: false,
            },
          }
        );

        gsap.fromTo(
          videoRef.current,
          {
            y: "20%",
            scale: 1.1,
            opacity: 1,
          },
          {
            y: "52%",
            scale: 1.2,
            opacity: 1,
            scrollTrigger: {
              trigger: homeVideoRef.current,
              start: "top center",
              end: "top top",
              scrub: true,
              markers: false,
            },
          }
        );
        gsap.set(videoRef.current, { y: "0%" });
      } else {
        gsap.killTweensOf(videoRef.current);
        gsap.set(videoRef.current, { y: "0%", top: "90%" });
      }
    };

    applyGsapAnimation();

    mediaQuery.addEventListener("change", applyGsapAnimation);

    return () => {
      mediaQuery.removeEventListener("change", applyGsapAnimation);
    };
  }, []);

  return (
    <Fragment>
      <div className={heroStyles.hero}>
        <div className={heroStyles.hero_container}>
          <div className={heroStyles.hero_img_container}>
            <img src={genai.src} alt="img" />
          </div>
          <p>
            &quot;Empowering enterprises with cutting-edge omnichannel
            communication strategies and actionable analytics through our
            AI-driven B2B platform.&quot;
          </p>
          <button onClick={openModal}>Create with Genstrat.ai</button>
        </div>
      </div>
      <div className={heroStyles.home_video} ref={homeVideoRef} id="product">
        <div className={heroStyles.home_video_container} ref={videoRef}>
            {/* <video
            width="100%"
            height="100%"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
          >
            <source src="/assets/homeVideo-1.mp4" type="video/mp4" />
          </video> */}
          <img width="100%" height="100%" src={productImage.src} alt="img" />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
