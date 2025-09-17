// app/components/TypewriterField.js
"use client";

import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const TypewriterField = ({ subTitles }) => (
    <Box
        component="fieldset"
        sx={{
            px: 3,
            py: 1.5,
            borderRadius: "8px",
            border: "2px solid white",
            minWidth: "250px",
        }}
    >
        <legend style={{ textAlign: "left", padding: "0 20px", fontSize: "0.9rem" }}>
            Action
        </legend>
        <Typography
            sx={{
                color: "#ffb347",
                fontSize: { xs: "1.25rem", md: "1.6rem" },
                fontWeight: "bold",
            }}
        >
            <Typewriter
                words={subTitles}
                loop={3}
                cursor
                cursorStyle="|"
                typeSpeed={55}
                deleteSpeed={30}
                delaySpeed={1200}
            />
        </Typography>
    </Box>
);

export default TypewriterField;
