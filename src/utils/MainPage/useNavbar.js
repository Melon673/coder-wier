'use client';
import { useState } from 'react';

const useNavebar = ({ menus = [] } = {}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const HandleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
 
  const filteredData = menus?.find(item => item.name === menuOpen);

  const handleMenuClick = (menu) => {
    setMenuOpen(menuOpen === menu ? true : menu);
  };

  return {
    menuOpen,
    handleMenuClick,
    setMenuOpen,
    HandleSearchOpen,
    setSearchOpen,
    searchOpen,
    filteredData,
  };
};

export default useNavebar;
