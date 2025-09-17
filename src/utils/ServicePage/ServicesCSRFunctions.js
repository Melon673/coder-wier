"use client";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const ServiceBannerCSR = (data) => {
  // Tabs
  const [selectedHeading, setSelectedHeading] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (newValue) => {
    setActiveTab(newValue);
  };
  // Hover
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hovered, setHovered] = useState(null);

  // Loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Modal
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // Tabs

  //livemap
  const [visibleCards, setVisibleCards] = useState(6);
  const loadMoreCount = 6;

  const handleViewAllClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + loadMoreCount);
  };

  //blogs All articles
  const [selectedChips, setSelectedChips] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(9);
  const [cardsToAdd, setCardsToAdd] = useState(9);
  const router = useRouter();

  const handleButtonClick = (route) => () => {
    router.push(route);
  };
  // Memoized handleFilteredData with useCallback
  const handleFilteredData = useCallback(() => {
    if (selectedChips === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item?.type === selectedChips);
      setFilteredData(filtered);
    }
  }, [selectedChips, data]);

  useEffect(() => {
    handleFilteredData();
  }, [handleFilteredData, cardsToShow]);


  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + cardsToAdd);
  };
  //inner Blogs
  const [isplaying, setIsPlaying] = useState(false);
  const audioElem = useRef();
  useEffect(() => {
    if (isplaying) {
      audioElem?.current?.play();
    }
    else {
      audioElem?.current?.pause();
    }
  }, [isplaying]);

  const PlayPause = () => {
    setIsPlaying(!isplaying)
  }

  // Inner Blogs Filtering
  const { blogDetail } = useParams();
  const [filterData, setFilterData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // const handleFilterData = useCallback(() => {
  //   const filtered = blogData?.filter((item) =>
  //     item?.route?.includes(blogDetail)
  //   ) || [];

  //   setFilterData(filtered[0] || null);
  //   setIsLoading(false);
  // }, [blogDetail]); 


  // useEffect(() => {
  //   handleFilterData();
  // }, [handleFilterData]);

  // const handleFilteredCard = () => {
  //   const filteredCard = blogData?.filter((item) => item?.type == filterData?.type && item?.id !== filterData?.id);
  //   return filteredCard
  // };
  return {
    open, setOpen, handleClose, selectedHeading, setSelectedHeading,
    activeTab, handleTabClick, loading, hoveredCard, setHoveredCard,
    visibleCards, loadMoreCount, handleViewAllClick, selectedChips, setSelectedChips,
    filteredData, cardsToShow, handleLoadMore, handleButtonClick, isplaying, audioElem, PlayPause,
    filterData, isLoading, blogDetail, hovered, setHovered

  };
};


export { ServiceBannerCSR };

