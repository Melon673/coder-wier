"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter, Inter), sans-serif",
    h1: {
      fontSize: "2.4vw",
      fontWeight: 600,
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "2.4rem",
      },
    },
    h2: {
      fontSize: "2vw",
      fontWeight: 600,
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.5vw",
      fontWeight: 600,
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.05vw",
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "1.05rem",
      },
    },
    h5: {
      fontSize: "0.94vw",
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "0.94rem",
      },
    },
    h6: {
      fontSize: "0.73vw",
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "0.73rem",
      },
    },
    body1: {
      fontSize: "0.84vw",
      color: "#3F3C39",
      "@media (max-width:900px)": {
        fontSize: "0.84rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "var(--font-inter, Inter), sans-serif",
          color: "#3F3C39",
        },
        h1: {
          fontSize: "2.4vw",
          fontWeight: 600,
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "2.4rem",
          },
        },
        h2: {
          fontSize: "2vw",
          fontWeight: 600,
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "2rem",
          },
        },
        h3: {
          fontSize: "1.5vw",
          fontWeight: 600,
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "1.5rem",
          },
        },
        h4: {
          fontSize: "1.05vw",
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "1.05rem",
          },
        },
        h5: {
          fontSize: "0.94vw",
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "0.94rem",
          },
        },
        h6: {
          fontSize: "0.73vw",
          color: "#3F3C39",
          "@media (max-width:900px)": {
            fontSize: "0.73rem",
          },
        },
        p: {
          fontSize: "0.84vw",
          color: "#3F3C39",
          margin: "0 0 1rem",
          "@media (max-width:900px)": {
            fontSize: "0.84rem",
          },
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { variant: "blueBackgroundButton" },
          style: {
            color: "#fff",
            backgroundColor: "#0486ff",
            fontSize: "0.84vw",
            minWidth: "none",
            borderRadius: "0.54vw",
            textTransform: "capitalize",
            padding: "0.45rem 1rem",
            "&:hover": {
              backgroundColor: "#0486ff",
            },
            "@media (max-width:900px)": {
              fontSize: "0.84rem",
              borderRadius: "0.54rem",
            },
          },
        },
        {
          props: { variant: "navyblueBackgroundButton" },
          style: {
            color: "#fff",
            backgroundColor: "#0F256E",
            fontSize: "0.84vw",
            minWidth: "none",
            borderRadius: "0.54vw",
            textTransform: "capitalize",
            padding: "0.45rem 1rem",
            "&:hover": {
              backgroundColor: "#0F256E",
            },
            "@media (max-width:900px)": {
              fontSize: "0.84rem",
              borderRadius: "0.54rem",
            },
          },
        },
        {
          props: { variant: "blueBorderButton" },
          style: {
            color: "#0486ff",
            backgroundColor: "transparent",
            border: "2px solid #0486ff",
            fontSize: "0.84vw",
            minWidth: "none",
            borderRadius: "0.54vw",
            textTransform: "capitalize",
            padding: "0.45rem 1rem",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "@media (max-width:900px)": {
              fontSize: "0.84rem",
              borderRadius: "0.54rem",
            },
          },
        },
        {
          props: { variant: "whiteBorderButton" },
          style: {
            color: "#fff",
            backgroundColor: "transparent",
            border: "2px solid #fff",
            fontSize: "0.84vw",
            minWidth: "none",
            borderRadius: "0.54vw",
            textTransform: "capitalize",
            padding: "0.45rem 1rem",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "@media (max-width:900px)": {
              fontSize: "0.84rem",
              borderRadius: "0.54rem",
            },
          },
        },
      ],
    },
  },
});

export { theme };
