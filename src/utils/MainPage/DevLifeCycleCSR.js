"use client";
import React from 'react';
import {
    Grid,
    Typography,
    Button,
    FormControl,
    Select,
    MenuItem,
    useMediaQuery,
    Box
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import useEmergingInnovationCSR from '@/utils/MainPage/MainPageCSRFunctions';
import { useStyles } from '@/utils/MainPage/MainPgstyles';
import stripHtml from '../stripHtml';

const DevLifeCycleCSR = ({ data,isLightVersion }) => {
    const styles = useStyles();
    const { activeTab, handleTabClick } = useEmergingInnovationCSR(data.elements);
    const filteredServices = data.elements?.filter(item => item.title === activeTab);
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

    const getGridWidth = () => {
        const len = data?.elements?.length || 0;
        if (len > 7) return 1.52;
        if (len > 6) return 1.72;
        if (len > 5) return 2;
        if (len > 4) return 2.4;
        return 2;
    };

    return (
        <>
            {isMobile && (
                <Grid item xs={11.5} display="flex" justifyContent="center">
                    <FormControl fullWidth variant="standard" margin="dense">
                        <Select
                            value={activeTab}
                            onChange={(e) => handleTabClick(e.target.value)}
                            className={isLightVersion?"m_port_dropdown":"m_port_dropdownWhite"}
                            sx={{
                                
                                '& .MuiSelect-icon': styles.selectIcon,
                                '& .MuiSelect-icon.Mui-expanded': styles.expandedIcon
                            }}
                            IconComponent={ExpandMoreIcon}
                            MenuProps={{ PaperProps: { sx: styles.menuPaper } }}
                        >
                            {data?.elements?.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    value={item.title}
                                    className={activeTab === item.title ? "all_project_links_active" : "all_project_links"}
                                >
                                    {item.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            )}
            {!isMobile && (
                <Grid container justifyContent="center" mt="2%">
                    {data?.elements?.map((item, index) => (
                        <Grid item md={getGridWidth()} key={index} sx={{ display: 'flex', ml: "-0.2vw" }}>
                            <Button
                                onClick={() => handleTabClick(item.title)}
                                sx={{
                                    borderRadius: "0 !important",
                                    ...styles.button,
                                    borderBottom: "0.15vw solid #0486ff",
                                    border: activeTab === item.title ? "0.15vw solid #0486ff" : styles.button.border,
                                    color: activeTab === item.title ? "#0486ff" :styles.button.color,
                                }}
                            >
                                {item.title}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Content */}
            <Grid item md={12} xs={11.5} mt="2%">
                {filteredServices?.map((item, index) => (
                    <Box key={index}>
                        <Typography variant={item.headingType?.title?.toLowerCase()} className={isLightVersion?"blackColor":"whiteColor"}>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" mt="1%" className={isLightVersion?"blackColor":"whiteColor"}>
                            {stripHtml(item.shortDescription)}
                        </Typography>
                    </Box>
                ))}
            </Grid>
        </>
    );
};

export default DevLifeCycleCSR;
