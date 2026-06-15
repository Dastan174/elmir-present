"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "../components/slider/Slider";
import Balloons from "@/components/baloons/Baloons";
import Typewritter from "../components/typewritter/Typewritter";
import OpenChat from "../components/openChat/OpenChat";
import LastChat from "../components/lastChat/LastChat";
import PhotoReveal from "../components/photoReveal/PhotoReveal";
import VideoAdil from "../components/videoAdil/VideoAdil";
import Story from "../components/stories/Story";
import Insta from "../components/insta/Insta";
import HoldHeart from "../components/holdHeart/HoldHeart";
import MemoryButton from "../components/memoryButton/MemoryButton";

const Page = () => {
  const [showMemory, setShowMemory] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showRest, setShowRest] = useState(false);

  // Скролл вниз с анимацией
  const smoothScrollDown = () => {
    setShowRest(true);

    const start = window.scrollY;
    const target = start + window.innerHeight;
    const duration = 1000;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + (target - start) * easing);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // включаем музыку после клика на открытку
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .catch((e) => console.log("Ошибка воспроизведения:", e));
    }
  };

  // Включение аудио после любого взаимодействия (click, scroll, keydown)
  useEffect(() => {
    const enableSound = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .catch((e) => console.log("Ошибка воспроизведения:", e));
    };

    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("scroll", enableSound, { once: true });
    document.addEventListener("keydown", enableSound, { once: true });

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Аудио */}
      <audio ref={audioRef} loop preload="auto" muted>
        <source src="/music.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>

      {/* Картинка для начала */}
      <div
        onClick={smoothScrollDown}
        className={styles.img3}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image priority src="/images/play.webp" fill alt="open" />
      </div>

      {/* Остальные блоки */}
      {showRest && (
        <>
          <Typewritter />
          <HoldHeart />
          <div className={styles.img3}>
            <Image
              src="/images/six.webp"
              fill
              alt="open"
              loading="lazy"
              priority={false}
            />
          </div>
          <Story />
          <Insta />
          <PhotoReveal />
          <OpenChat />
          <div className={styles.img1}>
            <Image
              src="/images/love.webp"
              fill
              alt="open"
              loading="lazy"
              priority={false}
            />
          </div>
          {showMemory && (
            <MemoryButton onClose={() => setShowMemory(false)} /> // ✅ передаем функцию
          )}
          <Slider />
          <VideoAdil link="https://www.youtube.com/embed/Zjm4cycc2SY?autoplay=0&mute=1&controls=1&rel=0" />
          <Balloons />
          <div className={styles.img3}>
            <Image
              src="/images/four.webp"
              fill
              alt="open"
              loading="lazy"
              priority={false}
            />
          </div>
          <VideoAdil link="https://www.youtube.com/embed/vpuCVn0EQgU?autoplay=0&mute=1&controls=1&rel=0" />
          <LastChat />
          <div className={styles.img2}>
            <Image
              src="/images/last.webp"
              fill
              alt="open"
              loading="lazy"
              priority={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
