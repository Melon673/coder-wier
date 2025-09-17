"use client"
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useNavebar from './useNavbar';
import ServicesDropdown from '@/Components/common/Header/ServicesDropdown';
import Image from 'next/image';
import ContactButtonBlue from '@/Components/NewComponents/Registration/ContactButtonBlue';
import NavbarDropdown from './NavbarDropdown/NavbarDropdown';
import MobileMenu from '@/Components/common/Header/MobileNavbar';
import { usePathname } from 'next/navigation';

const NavbarCSR = ({ menus, imgLink, filteredSiteDetails, sideButton }) => {
    const { menuOpen, handleMenuClick, HandleSearchOpen, filteredData, setMenuOpen, searchOpen, setSearchOpen } = useNavebar({ menus });
const pathname=usePathname();
    return (
        <>
            <Box sx={{ bgcolor: "white", width: "100%", position: 'fixed', top: 0, left: 0, zIndex: 4500, py: { md: "1%", xs: "1rem" }, px: { md: 0, sm: "2%", xs: 0 }, }}>
                <Box sx={{ display: "flex", width: "96%", flexWrap: "wrap", justifyContent: { md: "center", xs: "space-between", sm: "space-between" }, alignItems: "center", columnGap: "2%", }}>
                    <Box sx={{ width: "30%", }}>
                        <Link href="/">
                            <Box
                                sx={{
                                    width: { md: '22vw', xs: '10rem' },
                                    height: '5vh',
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${imgLink}${filteredSiteDetails.websiteLogo || "/CODERS WIRE.png"}`}
                                    alt={filteredSiteDetails.websiteName || "Coders Wire Logo"}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    fetchPriority="high"
                                />
                            </Box>
                        </Link>
                    </Box>
                    <Box sx={{ display: { md: "flex", xs: "none" }, columnGap: "2%", alignItems: "center", width: "44%", justifyContent: "flex-end" }}>
                        {menus?.map(({ name, route, linkOnly }) => (
                            <Typography
                                key={name}
                                onClick={() => !linkOnly && handleMenuClick(name)}
                                variant="h5"
                                sx={{
                                    color: menuOpen === name ? '#0486ff' : '#3F3C39',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { color: '#0486ff' },
                                }}
                            >
                                {linkOnly ? (
                                    <Link href={route}>{name}</Link>
                                ) : (
                                    name
                                )}

                                {!linkOnly && (
                                    <ExpandMoreIcon
                                        sx={{
                                            fontSize: "1.1vw",
                                            transition: 'transform 0.3s ease',
                                            transform: menuOpen === name ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}
                                    />
                                )}
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{ display:pathname==="/search"?"none":"flex", alignItems: "center", cursor: "pointer", justifyContent: "flex-end", width: { md: "auto", xs: "50%" } }} onClick={() => HandleSearchOpen()}>
                        <SearchIcon sx={{ fontSize: { md: "2vw", xs: "2rem" } }} />
                    </Box>
                    <Box sx={{ display: { md: "block", xs: "none" }, }}>

                        {sideButton?.name  &&
                            <Link href={sideButton?.link || "/contact" } passHref>
                                <ContactButtonBlue label={sideButton.name} />
                            </Link>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', zIndex: 4500, }}>
                        <MobileMenu menus={menus} />
                    </Box>

                </Box>
            </Box>
            <NavbarDropdown menus={menus} setSearchOpen={setSearchOpen} setMenuOpen={setMenuOpen} searchOpen={searchOpen} menuOpen={menuOpen} filteredData={filteredData} />


        </>
    );
};

export default NavbarCSR;
