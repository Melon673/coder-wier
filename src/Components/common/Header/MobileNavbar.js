'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MobileMenu = ({ menus }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleAccordionToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <IconButton onClick={() => setMenuOpen(true)} sx={{ color: '#0486ff' }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        transitionDuration={400}
        ModalProps={{
          sx: { zIndex: 4001 },
        }}
      >
        <Box
          sx={{
            width: 280,
            bgcolor: '#fafafa',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Dynamic Menu Accordions */}
          <Box sx={{ p: 1 }}>
            {menus.map((menu) => (
              <Accordion
                key={menu.name}
                expanded={expanded === menu.name}
                onChange={handleAccordionToggle(menu.name)}
                sx={{
                  bgcolor: '#fff',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  sx={{ padding: '0.6rem', minHeight: '0 !important' }}
                  expandIcon={<ExpandMoreIcon sx={{ color: '#0486ff' }} />}
                >
                  <Typography sx={{ fontWeight: 500 }}>{menu.name}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: '0.6rem', mt: '-0.6rem' }}>
                  {menu.submenu?.length > 0 && (
                    <List disablePadding>
                      {menu.submenu.map((category) => (
                        <Box key={category.name}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 'bold',
                              color: '#555',
                              my: '0.4rem',
                            }}
                          >
                            {category.name}
                          </Typography>

                          {category.submenu?.map((item) => (
                            <Link
                              key={item.id}
                              href={`/${item.link || '#'}`}
                              onClick={() => setMenuOpen(false)}
                              passHref
                            >
                              <Typography
                                sx={{ my: '0.5rem', cursor: 'pointer' }}
                              >
                                {item.name}
                              </Typography>
                            </Link>
                          ))}

                          <Divider />
                        </Box>
                      ))}
                    </List>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
