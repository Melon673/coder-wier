"use client";

import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {!showSearch ? (
        <IconButton onClick={() => setShowSearch(true)}>
          <SearchIcon />
        </IconButton>
      ) : (
        <>
          <Autocomplete
            disablePortal
            // options={options}
            groupBy={(option) => option.title}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            onChange={(_, value) => {
              if (value?.route) {
                router.push(value.route);
                setShowSearch(false);
              }
            }}
            renderInput={(params) => <TextField {...params} label="Search..." />}
          />
          <IconButton onClick={() => setShowSearch(false)}>
            <ClearIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}
