import React from 'react'

import LinearProgress from '@mui/material/LinearProgress';


export  const LinearProgressBar=({classes, value}) =>{

    return (

        <LinearProgress className={classes}
                        variant="determinate"
                        disableShrink
                        size={40}
                        thickness={4} value={value}/>

    )
}
