"use client";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

// Custom Hook for Service Selection and Accordion Expansion
const useSelectedService = (elements) => {
  const [selected, setSelected] = useState(elements?.[0]?.title || "");
  const [expanded, setExpanded] = useState(null);

  const handleChange = (value) => setSelected(value);
  const handleAccordionChange = (panelId) => {
    setExpanded((prev) => (prev === panelId ? null : panelId));
  };

  const filteredServices = elements?.filter((item) => item.title === selected);
  return { selected, handleChange, filteredServices, expanded, handleAccordionChange };
};

// Custom Hook for Tab Management in 'EmergingInnovationCSR'
const useEmergingInnovationCSR = (services) => {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(services?.[0]?.title || "");

  const handleTabClick = (newTitle) => setActiveTab(newTitle);
  return { pathName, activeTab, handleTabClick };
};

export default useEmergingInnovationCSR;

// Custom Hook for Tab Management in 'HomeTeam'
const HomeTeamCSR = () => {
  const [value, setValue] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredArrow, setHoveredArrow] = useState(null);

  const handleChange = (event, newValue) => setValue(newValue);

  return { value, handleChange, hoveredCard, setHoveredCard, hoveredArrow, setHoveredArrow };
};

// Custom Hook for Tab Management in 'TestimonialsCarousel'
const TestimonialsCarouselCSR = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleChange = (index) => setSelectedImageIndex(index);
  return { selectedImageIndex, setSelectedImageIndex, handleChange };
};

// Custom Hook for Tab Management in 'SolutionsWeDeliverSwiper'
const SolutionsWeDeliverSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideChange = (swiper) => setActiveIndex(swiper.realIndex);

  return { activeIndex, setActiveIndex, swiperRef, hoveredIndex, handleSlideChange, setHoveredIndex };
};

// Snackbar for Registration
const RegistrationCSR = () => {
  const [open, setOpen] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleButtonClick = () => {
    setOpen(true);
    // formik.resetForm(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  return {
    open,
    setOpen,
    handleClose,
    focusedField,
    setFocusedField,
    handleFocus,
    handleBlur,
    handleButtonClick
  };
};

// Custom Hook for Accordion
const useAccordion = () => {
  const [openIndex, setOpenIndex] = useState();
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setMaxHeight(0);
    } else {
      setOpenIndex(index);
      const content = contentRef.current;
      setMaxHeight(content?.scrollHeight || 0);
    }
  };

  return { openIndex, toggleAccordion, maxHeight, contentRef };
};

// Custom Hook for Carousel State Handler (Rewritten to avoid useEffect)
const CarouselStateHandler = ({ bannerImages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef();

  const startCarousel = () => {
    if (bannerImages?.length && !timerRef.current) {
      const totalImages = bannerImages.length;
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalImages);
      }, 4000);
    }
  };

  const stopCarousel = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start carousel immediately
  startCarousel();

  return activeIndex;
};

export {
  useSelectedService,
  useEmergingInnovationCSR,
  HomeTeamCSR,
  TestimonialsCarouselCSR,
  SolutionsWeDeliverSwiper,
  RegistrationCSR,
  useAccordion,
  CarouselStateHandler
};
