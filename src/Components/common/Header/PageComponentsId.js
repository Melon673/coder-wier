"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef, useState } from "react";
import React from 'react';
import { usePathname } from "next/navigation";

const PageComponentsId = ({ data }) => {
  const pathname = usePathname();
  const scrollRef = useRef();
  const [showArrows, setShowArrows] = useState({ left: false, right: false });

  const checkArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrows({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth
    });
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
      setTimeout(checkArrows, 300);
    }
  };

  const onRef = (node) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    if (node && scrollRef.current !== node) {
      scrollRef.current = node;
      node.addEventListener("scroll", checkArrows);
      window.addEventListener("resize", checkArrows);
      checkArrows();
    }
  };

  const scrollToElComponents = (id) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        const topOffset = window.innerHeight * 0.19;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const scrollTo = elementTop - topOffset;

        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      }
    }
  };


  return (
    <>
      {!pathname.startsWith("/blog") && !pathname.startsWith("/case-studies") &&
        <Box 
        // my={{ md: "-2.2%", xs: "-1.63rem" }}
         sx={{ bgcolor: "#0486ff", py: { md: "1%", xs: "1rem" }, position: "sticky", zIndex: 4000, top: { md: "4.5vw", xs: "8%" }, width: "100%", left: 0 }}>
          <Box sx={{ width: { md: "84%", xs: "100%" }, margin: "auto", display: "flex", alignItems: "center", position: "relative", justifyContent: "space-between" }}>
            {showArrows.left && (
              <IconButton onClick={() => scroll("left")} sx={{ position: "absolute", left: 0, zIndex: 1 }}>
                <ChevronLeft sx={{ color: "white" }} />
              </IconButton>
            )}
            <Box
              ref={onRef}
              sx={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                flex: 1,
                mx: { md: "4%", xs: "1rem" },
                scrollbarWidth: "none",
                '&::-webkit-scrollbar': { display: 'none' }
              }}
            >
              {data?.map((section, index) => (
                <Typography
                  key={index}
                  onClick={() => scrollToElComponents(`${section?.idForfrontendUse}-${index}`)}
                  sx={{
                    fontSize: { md: "0.65vw", xs: "0.6rem" },
                    display: "inline-block",
                    px: "1%",
                    color: "white",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  {section?.title.slice(0, 30)}...
                </Typography>
              ))}
            </Box>

            {showArrows.right && (
              <IconButton onClick={() => scroll("right")} sx={{ position: "absolute", right: 0, zIndex: 1 }}>
                <ChevronRight sx={{ color: "white" }} />
              </IconButton>
            )}

          </Box>
        </Box>

      }

    </>
  );
};

export default PageComponentsId;
