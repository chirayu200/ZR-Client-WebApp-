import React from "react";
import {Box, Button, CircularProgress} from "@mui/material";

export const CustomButton = ({
                                 title,
                                 className,
                                 color,
                                 backgroundColor,
                                 fullWidth,
                                 onClick,
                                 width,
                                 icon,
                                 iconJsx,
                                 maxWidth,
                                 isLoading,
                                 fontWeight,
                                 fontSize,
                                 disabled,
                                 ...restProps
                             }) => {
    const buttonStyle = {
        color: color || "white",
        backgroundColor: backgroundColor || "white",
        width: fullWidth ? "100%" : width || "auto",
        maxWidth: maxWidth || "none",
        border: `${backgroundColor === "#E7EFF9" ? "2px" : "1px"} solid ${color}`,
        borderRadius: backgroundColor === "#32B2AC" ? "37px" : "10px",
        padding: isLoading ? '10px' : "17px 89px",
        textTransform:'Capitalize',
        fontWeight:"bold",
        fontSize:fontSize,
        opacity: disabled ? 0.5 : 1,
    };

    return (
        <Button
            style={buttonStyle}
            onClick={onClick}
            className={className}
            disabled={disabled}
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
                        width: fullWidth ? '100%' : width || "auto",
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
