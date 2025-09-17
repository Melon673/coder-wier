"use client";
import ServicesDropdown from "@/Components/common/Header/ServicesDropdown";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarDropdown = ({ menus, setSearchOpen, setMenuOpen, menuOpen, filteredData, searchOpen }) => {
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    // pointerdown covers mouse + touch
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [setMenuOpen, setSearchOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
      setSearchOpen(false);
      setSearchText("");
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
    }
  };

  return (
    <>
      <Box ref={menuRef} sx={{ display: { md: "block", xs: "none" } }}>
        {filteredData?.submenu?.length > 0 && (
          <ServicesDropdown data={filteredData} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        )}
      </Box>

      {searchOpen && (
        <Box sx={{ position: "fixed", top: { md: "4.5vw", xs: "4.8rem" }, zIndex: 4001, right: "18%" }} ref={searchRef}>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
      )}
    </>
  );
};

export default NavbarDropdown;
