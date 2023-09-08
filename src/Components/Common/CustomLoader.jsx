import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { Blocks, ColorRing } from 'react-loader-spinner';
import loaderImg from "../../assets/images/loader.gif";

// const loaderImg = require("../../assets/images/loader.gif").default;
export function CustomLoader(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [loaderMsg, setLoaderMsg] = useState('Loading...');
    // useEffect(() => {
    //   NProgress.start();

    //   return () => {
    //     NProgress.done();
    //   };
    // }, []);
    useEffect(() => {
        setIsLoading(props.IsLoading);
        setLoaderMsg('Loading...');
    }, [props.IsLoading]);

    // let isLoading = false;
    // console.log("props", props, props.IsLoading);
    // isLoading = props.IsLoading;

    return (
        <Box>
            {isLoading ?
                <div className='loader-container'>
                    <img src={loaderImg} className='loader-img' alt="loader" />
                    <Box className='loader-msg'>{loaderMsg}</Box>
                </div>
                : null}
        </Box>
    );
}

// export default CustomLoader;
