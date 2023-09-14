import React, { useState,useEffect } from 'react';
import {Box, Link, Typography,Button} from "@mui/material";
import {getClientTrophies} from "../../Services/APIs";
    
export default function Trophies({initialState,details}) {
console.log(details, 'initialStfdateinitialState');
const [yourTrophies, setTrophies] = useState('')


useEffect(() => {    
    getYourTrophies();
   
}, [])


const getYourTrophies= () => {
    getClientTrophies().then((response) => {
        const result = response?.data;
        setTrophies(result)         

    })    }



    return (<>

 <Box className="template-list-main template-list-about">
                <Box className="trophyBoxHead"
                >
                    <Typography className='heading'>
                       Trophies
                    </Typography>
                   
                  

                    

                </Box>
                <Box className='profile-mid-section'>
                   

                    
                </Box>


            </Box>
            
    </>)
}
