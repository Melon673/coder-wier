"use client";
import {  Box } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  const bars = Array.from({ length: 6 });

  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/CODERS%20WIRE.webp?alt=media&token=d4fdaddb-d9ce-4cfa-91f5-7416990164f4"
        alt="Coders Wire Logo"
        width={1600}
        height={600}
        style={{
          width: "50vw",
          height: "auto",
          marginBottom: "2rem",
          display: "block",
        }}
      />

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {bars.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "6px",
              height: "30px",
              backgroundColor: "#007bee",
              marginX: "4px",
              animation: `scaleYAnim 0.7s infinite alternate`,
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </Box> */}

      {/* Add keyframes globally */}
      {/* <style jsx global>{`
          @keyframes scaleYAnim {
            0%, 100% {
              transform: scaleY(1);
            }
            50% {
              transform: scaleY(3);
            }
          }
        `}</style> */}
    </Box>
  );
}


