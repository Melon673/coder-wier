"use client";
import { useState } from "react";

const HiringCSR = (data) => {
    //Find Experts in hiring page
    const [activeTab, setActiveTab] = useState(0);
    const [activeAnswer, setActiveAnswer] = useState(data?.ChipsData?.[activeTab]?.detail[0]?.Answer);
    const [activeQuestion, setActiveQuestion] = useState(data?.ChipsData?.[activeTab]?.detail[0]?.Question);
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const handleTabClick = (index) => {
        setActiveTab(index);
        setActiveAnswer(data?.ChipsData[index]?.detail[0]?.Answer);
        setActiveQuestion(data?.ChipsData[index]?.detail[0]?.Question);
    };

    const handleAnswerClick = (question, answer) => {
        setActiveQuestion(question);
        setActiveAnswer(answer);
    };

    // Blogs accordion
    const [isAccordionExpanded, setAccordionExpanded] = useState(false);

    const handleAccordionChange = () => {
        setAccordionExpanded(!isAccordionExpanded);
    };
    //Drawer Dropdown for Header
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return {
        activeTab, activeAnswer, activeQuestion, expanded,
        handleChange, handleTabClick, handleAnswerClick,
        isAccordionExpanded, handleAccordionChange,
        drawerOpen, toggleDrawer
    };
};


export { HiringCSR };



