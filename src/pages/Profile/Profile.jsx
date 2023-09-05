import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
import {CustomButton} from "../../Components/CustomButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {Badge} from "@mui/material";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from '@mui/material/Button';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
const backArrow = require("../../assets/images/orangeArrow.svg").default;

const Profile = () => {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();

  const handleNext = ()=>{
    navigate('profile-partner')
  }

  const handleNewUser = ()=>{
    navigate('add-user')
  }
  return (
    
<Container>
<div>
        <Box sx={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"center" ,marginRight:"-240px",marginLeft:"-260PX",gap:"15px",marginTop:"50px" ,fontFamily:"Univers LT Std",fontWeight:"700"}} >
        <Box className='top-header shop-header'>
        <Box className='first-box'>
                        <CustomButton
                            className='arrow-btn'
                
                            icon={backArrow}
                            backgroundColor='#E7EFF9'
                            onClick={() => {
                                if (active === 0) {
                                    navigate('/')
                                } else {
                                    setActive(active - 1)
                                }
                            }}
                        />
                        
                        <Typography sx={{color:"#003087",fontSize:"18px", margin:"10px", fontWeight:"700"}}> Profile</Typography>

                        

                    </Box>

                    <Box className='profile-cart' sx={{ width:"37px",height:"37px", borderRadius:"37px", marginRight:"10px"}}>
  <PersonAddOutlinedIcon  onClick={handleNewUser} />  
                   </Box>

        </Box>

        <Box className='notification-section' >
                    <Badge color='error' variant='dot'>
                        <NotificationsNoneOutlinedIcon/>
                    </Badge>
                </Box>
  
                </Box>


    <Stack  sx={{ display:"flex", flexDirection:"column", justifyContent:"center",
  alignItems:"center",justifyContent:"center" }}
  spacing={4}>

    {/* 1 */}

    <Box sx={{ display:"flex", flexDirection:"row"}}>
    <Box sx={{ margin:"20px",display:"flex", alignItems:"center"}}> <Avatar alt="John Smith" src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" sx={{ width: "130px", height: "130px" }}/></Box>

<Box sx={{display: "flex", flexDirection:"column", justifyContent:"center"}}>

<span style={{color:"#000",
fontFamily: "Univers LT Std",
fontSize: "30px",
fontStyle: "normal",
// fontweight: "700",
fontWeight: 'bold'
}}
> John Smith </span>

<span style={{color: "#003087",
fontFamily: "Univers LT Std",
fontSize: "14.857px",
fontStyle: "normal",
lineHeight: "normal"
}}
>Reward Points: 3102</span>

<span style={{color: "#E35205",
fontfamily: "Univers LT Std",
fontSize: "17.333px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
marginBottom:"20px",
marginTop:"0px",
fontWeight: 'bold'
}}
>Gold Membership</span>

</Box>

</Box>

     <Box sx={{display: "flex", flexDirection:"column" }}>


<Box sx={{display:"flex",flexDirection:"row", alignItems:"center", margin:"20px",gap:"15px", fontFamily:"Univers LT Std",fontWeight:"700"}} >
{/* <CustomButton
                        color='#FFFFFF'
                        title={"About"} /> */}

<Button
   style={{
    width:"273px",
    height:"63px",
       borderRadius: 35,
       backgroundColor: "#FFFFFF",
       padding: "18px 36px",
       color:"#003087", 
textAlign: "center",
fontFamily: "Univers LT Std",
fontSize: "21.238px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
 textTransform:"none"
   }}
   variant="contained"
>
   About
</Button>


{/* <CustomButton
// color={'#fff'}
color='#003087'
title={"Profiles"}

className='slots active'
							/> */}

<Button
   style={{
    width:"273px",
    height:"63px",
       borderRadius: 35,
       backgroundColor: "#003087",
       padding: "18px 36px",
       color:"#FFFFFF", 
textAlign: "center",
fontFamily: "Univers LT Std",
fontSize: "21.238px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
 textTransform:"none"
   }}
   variant="contained"
>
   Profiles
</Button>

<Button
   style={{
    width:"273px",
    height:"63px",
       borderRadius: 35,
       backgroundColor: "#FFFFFF",
       padding: "18px 36px",
       color:"#003087", 
textAlign: "center",
fontFamily: "Univers LT Std",
fontSize: "21.238px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
textTransform:"none"
   }}
   variant="contained"
>
   Trophies
</Button>
</Box>



<Box sx={{marginTop:"40px", textAlign:"center"}} >

<span style={{color: "#000",
fontfamily: "Univers LT Std",
fontsize: "18px",
fontstyle: "normal",
fontweight: "400",
lineheight: "150%"
}} >There’s nothing to see here.</span>
</Box>

{/* <Box sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
<CustomButton sx={{borderRadius:"400px",display: "flex", marginTop:"40px", alignItems:"center", justifyContent:"center"}}
className='viewAllBtn'
width={40}
title={"Connect"}
color='#fff'
backgroundColor='#E35205'
onClick={handleNext}
/>
</Box> */}

{/* .. */}

<Box sx={{display:"flex",alignItems:"center", justifyContent:"center", marginRight:"-220px",marginTop:"50px"}}>
<Button
   style={{
    color:'#ffff',
    backgroundColor:'#E35205',
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
width: "257px",
height: "61px",
padding: "6px 16px",
marginRight:"200px",
gap: "10px",
textTransform:"none",
fontWeight:"bold",
fontFamily: "Univers LT Std",
fontSize: "20px",
fontStyle: "normal"
   }}
   variant="contained"
   onClick={handleNext}
>
   Connect
</Button>
</Box>
{/* .. */}

      </Box>
      
      <Box>
 
 <Box style={{display: "flex",
 width: "77px",
 height: "77px",
    flexdirection: "column",
    justifycontent: "center",
    alignitems: "center",
    borderRadius: "80px",
    background: "#003087",
    padding: "8px",position:"absolute",
    right:"50px",
    bottom:"80px"
    }}>
 <ChatIcon sx={{color:"white",fontSize:"30px",display:"flex", alignItems:"center", justifyContent:"center", width:"32px", height:"32px",margin:"16px"}}/>
    </Box> 

   </Box>

    </Stack>

    

    </div>

    
    </Container>
    
  )
}

export default Profile