import React from 'react'
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import {Box, Button, Link, Typography} from "@mui/material";


export default function LinearProgressBar({classes}) {
   
  return (
 
    <LinearProgress className={classes} 
    variant="determinate"
        disableShrink 
        size={40}
        thickness={4}  value={50}/>
   
  )
}
