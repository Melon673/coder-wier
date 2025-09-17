"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";           // use Next Image for LCP
import { Avatar } from "@mui/material";

const ClientSideCarousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK || "";

  useEffect(() => {
    if (!images.length) return;
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % images.length);
      }, 5000);
    }
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {images.map((item, index) => {
        const src = `${imgLink}${item || "assets/noimg.webp"}`;
        const commonStyle = {
          objectFit: "cover",
          opacity: activeIndex === index ? 1 : 0,
          transition: "opacity 1.5s ease-in-out, transform 8s ease-in-out",
          transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
          position: "absolute",
          inset: 0,
          zIndex: activeIndex === index ? 1 : 0,
        };

        // 👉 First slide = LCP image, load eagerly with high priority
        if (index === 0) {
          return (
            <Image
              key={index}
              src={src}
              alt="Image"
              fill
              sizes="100vw"
              priority                // Next.js preloads
              fetchPriority="high"    // pass-through to <img>
              style={commonStyle}
            />
          );
        }

        // Other slides can stay as Avatar (no high priority)
        return (
          <Avatar
            key={index}
            src={src}
            alt="Image"
            variant="square"
            sx={{
              width: "100%",
              height: "100%",
              ...commonStyle,
            }}
            // optional: keep eager so crossfade looks instant when it becomes active
            imgProps={{ loading: "eager", decoding: "async" }}
          />
        );
      })}
    </div>
  );
};

export default ClientSideCarousel;
