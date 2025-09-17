"use client"
import { Box } from '@mui/material';
import React from 'react'
import { useAccordion } from './MainPageCSRFunctions';

const ExpertQAServiceCSR = ({ data }) => {
    const { openIndex, toggleAccordion, maxHeight, contentRef } = useAccordion();
    const onToggle = (index) => toggleAccordion(index);
  
    return (
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {data.detail1?.map((item, index) => (
          <article key={index} className={openIndex === index ? "selected" : ""}>
            <h4
              className="whiteColor whiteheading4accordion"
              data-accordion-element-trigger
              onClick={() => onToggle(index)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </h4>
            <div
              ref={contentRef}
              data-accordion-element-content
              className="content"
              style={{
                maxHeight: openIndex === index ? maxHeight : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease",
              }}
            >
              <p
                className="whiteColor whiteparaaccordion"
                textAlign="left"
                style={{ margin: "0.5vh" }}
              >
                {item.para}
              </p>
            </div>
          </article>
        ))}
      </Box>
    );
  };
  
  export default ExpertQAServiceCSR;
  


