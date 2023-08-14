import React from "react";
import {Box, Button, CircularProgress} from "@mui/material";

export const CustomButton = ({
                                 title,
                                 className,
                                 color,
                                 backgroundColor,
                                 onClick,
                                 width,
                                 icon,
                                 iconJsx,
                                 height,
                                 borderRadius,
                                 isLoading,
                                 ...restProps
                             }) => {
    const buttonStyle = {
        color: color || "white",
        backgroundColor: backgroundColor || "white",
         width: "50px",
        border: `${backgroundColor === "#E7EFF9" ? "2px" : "1px"} solid ${color}`,
        padding: "17px 89px",
        height:"50px",
        borderRadius:"50px",
        title:"50px",
       
    };

    return (
        <Button
            style={buttonStyle}
            onClick={onClick}
            className={className}
            {...restProps}
        >
            {icon && title ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        alignItems: "center",
                    }}
                >

                    <img src={icon} alt='icon'/>
                    {isLoading && <CircularProgress sx={{color: color || 'white'}}/>}
                    {title}
                </Box>
            ) : icon ? (
                <img src={icon} alt='icon'/>


            ) : iconJsx ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {title}
                    {isLoading && <CircularProgress sx={{color: color || 'white'}}/>}
                    {iconJsx}
                </Box>
            ) : (<>
                    {isLoading && <CircularProgress sx={{color: color || 'white'}}/>}
                    {title}
                </>
            )}
        </Button>
    );
};
