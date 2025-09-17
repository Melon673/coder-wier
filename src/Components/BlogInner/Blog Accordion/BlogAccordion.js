"use client"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { HiringCSR } from '@/utils/HiringPage/HiringCSR';

const BlogAccordion = ({ data }) => {
    const { isAccordionExpanded, handleAccordionChange } = HiringCSR();
    return (
        <>
            {data?.map((item, index) => (
                    <Accordion key={index} expanded={isAccordionExpanded} onChange={handleAccordionChange} sx={{bgcolor:"#f4faff",boxShadow:"none",borderRadius:{md:"0.45vw !important",xs:"0.45rem !important"},border:"2px solid #0486ff"}}>
                        <AccordionSummary expandIcon={isAccordionExpanded ? <RemoveIcon sx={{ background: "#0486FF", color: "white" }} /> : <AddIcon sx={{ background: "#0486FF", color: "white" }} />}>
                            <Typography variant="h3"> {item?.title} </Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Box  dangerouslySetInnerHTML={{ __html: item?.description}} />
                        </AccordionDetails>
                    </Accordion>
            ))}
        </>
    )
}

export default BlogAccordion
