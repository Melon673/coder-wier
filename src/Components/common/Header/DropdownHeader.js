import React from "react";
import { Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HiringCSR } from "@/utils/HiringPage/HiringCSR";

function NavDrawer({ pageContentData }) {
  const { drawerOpen, toggleDrawer } = HiringCSR();

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {pageContentData.map((page, index) => (
            <ListItem key={index} onClick={toggleDrawer(false)}>
              {page.title}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavDrawer;
