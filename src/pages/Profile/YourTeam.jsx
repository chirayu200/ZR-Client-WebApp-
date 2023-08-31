// import React from "react";
// import "../../App.css"
// import Button from '@mui/material/Button';
// import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { Box } from "@mui/material";
// import {CustomButton} from "../../Components/CustomButton";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import { Badge } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ChatIcon from "@mui/icons-material/Chat";
// import { Typography } from "@mui/material";

// import AvatarGroup from '@mui/material/AvatarGroup';

// const backArrow = require("../../assets/images/orangeArrow.svg").default;
// const nextArrow = require("../../assets/images/chevron-up-orange.svg").default;

// const YourTeam = () => {

//     const [active, setActive] = useState(0);
//     const navigate = useNavigate();

   

//   const handleNewUser = ()=>{
//     navigate('add-user')
//   }

//   return (

// <div>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           margin: "20px",
//           gap: "15px",
//           fontFamily: "Univers LT Std",
//           fontWeight: "700",
//         }}
//       >
//         <Box className="top-header shop-header">
//           <Box className="first-box">
//             <CustomButton
//               className="arrow-btn"
//               icon={backArrow}
//               backgroundColor="#E7EFF9"
//               onClick={() => {
//                 if (active === 0) {
//                   navigate("/");
//                 } else {
//                   setActive(active - 1);
//                 }
//               }}
//             />
          
          
//           <Typography sx={{color:"#003087",fontSize:"18px", margin:"10px", fontWeight:"700"}}> Profile</Typography>
//           </Box>
//           <Box sx={{ width:"37px",height:"37px", borderRadius:"37px", marginRight:"10px"}} className="profile-cart">
//             <PersonAddOutlinedIcon />
//           </Box>
//         </Box>

//         <Box className="notification-section">
//           <Badge color="error" variant="dot">
//             <NotificationsNoneOutlinedIcon />
//           </Badge>
//         </Box>
//       </Box>

//       <Stack
//         direction="column"
//         sx={{}}
//         justifyContent="center"
//         alignItems="center"
//         spacing={4}
//       >
//        <div className='team-avtr'>
//                 <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center"}}>

//             <Box>
//                 <AvatarGroup max={3}>
//       <Avatar className= "MuiSlider-root" alt="Remy Sharp" src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" sx={{ width: "89px", height: "89px" }} />
//       <Avatar alt="Travis Howard" src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" sx={{ width: "89px", height: "89px", marginLeft:"20px"}}/>
//     </AvatarGroup>
//     </Box>

//     <Box>

//     <Typography sx={{ width:"500px", disply:"flex",justifyContent:"center", marginLeft:"-70px", marginTop:"10px",fontFamily: "Univers LT Std",
// fontSize: "24px",
// fontStyle: "normal",
// fontWeight: 'bold',
// }}>Your Team</Typography>
//     </Box>

//                 </Box>
//                 </div>
   
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
          
//         </Box>

        

      
//  {/* secondhalf */}

//         {/* 1 */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
        
//         <div className='team-avtr'>
//                 <Box sx={{display:"flex", flexDirection:"row"}}>

            
                

//                 </Box>
//                 </div>



// <Box className="purchaseCard" sx={{width:"800px", height:"236px", marginLeft:"-70px"}}>
//               <Box className="top">
                
//                 <Box sx={{ display:"flex", flexDirection:"row" ,justifyContent:"space-around", alignItems:"center"}}> 
                 

                  


//                 </Box>
                

//               </Box>
//               <Box>
                
//                 <Box
//                   className="item"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",marginTop:"50px"
//                   }}
//                 >
//                     <Box sx={{display:"flex", flexDirection:"row",alignItems:"center" }} >
//                 <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"260px"}} >
//                 <Avatar
//                     alt="John Smith"
//                     src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
//                     sx={{marginRight:"15px"}}
//                   />

                 

                  
//                   <Box >
//                   <Typography>Ralph Edwards</Typography>
//                 <Typography><span style={{color: "#003087"}}>Reward Points: 3214</span></Typography>
//                   </Box>
//                 </Box>

                  
//                   <Box >
//                   <CustomButton sx={{width: "50px", marginLeft:"120px"}}
//                                             className='arrow-btn'
//                                             icon={nextArrow}
//                                             backgroundColor='#fff'
//                                             // onClick={() => setActive(0)}
//                                         />   
//                   </Box>
//                   </Box>

//                 </Box>


//                 <Box
//                   className="item"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                     <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
//                 <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"260px"}} >
//                 <Avatar
//                     alt="John Smith"
//                     src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
//                     sx={{marginRight:"15px"}}
//                   />

                 

                  
//                   <Box>
//                   <Typography>Therese Webb</Typography>
//                 <Typography><span style={{color: "#003087"}}>Reward Points: 3214</span></Typography>
//                   </Box>
//                 </Box>

                  
//                   <Box>
//                   <CustomButton sx={{width: "50px", marginLeft:"120px"}}
//                                             className='arrow-btn'
//                                             icon={nextArrow}
//                                             backgroundColor='#fff'
//                                             // onClick={() => setActive(0)}
//                                         />                  </Box>
//                   </Box>

//                 </Box>
//               </Box>
           
//           </Box>



//  {/* 2 */}

          
//             <Box className="purchaseCard" sx={{width:"800px", height:"236px"}}>

//               <Box className="top">
//                 <Box sx={{ display:"flex", flexDirection:"row" ,justifyContent:"space-around", alignItems:"center"}}>
                  
//                   <Typography sx={{fontWeight: 'bold',
//                 fontFamily: "Univers LT Std",
//                 fontSize: "16px",
//                 fontStyle: "normal",
//                 }}>
//                   Your Pack
//                   </Typography>
                  
//                   <div className="vbtn">
                  
//                   <Button
//    style={{
//        borderRadius: 35,
//        backgroundColor: "#21b6ae",
//        fontSize: "12px",
//        height:"30px",
//        width:"106px",
//        padding: "7px 23px",
//        marginRight:"-700px"
//    }}
//    variant="contained"
// >
//    View All
// </Button>
                   

//                   </div>
       
//                 </Box>
//               </Box>
//               <Box>

//                 <Box
//                   className="item"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                     <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
//                 <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"200px"}} >
//                 <Avatar
//                     alt="John Smith"
//                     src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
//                     sx={{marginRight:"15px"}}
//                   />

                
//                   <Box>
//                     <Typography>Cooper</Typography>
//                   <Typography><span style={{color: "#003087"}}>Marvin McKinney</span></Typography>
//                   </Box>
//                 </Box>

                  
//                   <Box sx={{ marginLeft:"150px"}}>
//                   <Typography><span style={{color: "#E35205"}}>Firedog</span></Typography>
//                   </Box>

//                   <div className="arrow-btn">
//                   <CustomButton sx={{width: "50px", marginLeft:"10px"}}
//                                             className='arrow-btn'
//                                             icon={nextArrow}
//                                             backgroundColor='#fff'
//                                             // onClick={() => setActive(0)}
//                                         />   
// </div>  
//                   </Box>

//                 </Box>


//                 <Box
//                   className="item"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                     <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
//                 <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"200px"}} >
//                 <Avatar
//                     alt="John Smith"
//                     src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
//                     sx={{marginRight:"15px"}}
//                   />

                 

                  
// <Box>
//                     <Typography>Max</Typography>
//                   <Typography><span style={{color: "#003087"}}>Theresa Web</span></Typography>
//                   </Box>
//                 </Box>

                  
//                   <Box sx={{ marginLeft:"150px"}}>
//                   <Typography><span style={{color: "#E35205"}}>Underdog</span></Typography>
//                   </Box>

//                   <div className="arrow-btn">
//                   <CustomButton sx={{width: "50px", marginLeft:"10px"}}
//                                             className='arrow-btn'
//                                             icon={nextArrow}
//                                             backgroundColor='#fff'
//                                             // onClick={() => setActive(0)}
//                                         />   
// </div>  
//                   </Box>

//                 </Box>
//               </Box>
           
//           </Box>

//           {/* end */}
//           <Box>
//           <Box
//              style={{display: "flex",
//              width: "77px",
//              height: "77px",
//                 flexdirection: "column",
//                 justifycontent: "center",
//                 alignitems: "center",
//                 borderRadius: "80px",
//                 background: "#003087",
//                 padding: "8px",position:"absolute",
//                 right:"50px",
//                 bottom:"80px"
//                 }}
//           >
//  <ChatIcon sx={{color:"white",fontSize:"30px",display:"flex", alignItems:"center", justifyContent:"center", width:"32px", height:"32px",margin:"16px"}}/>
//           </Box>
//         </Box>

//         </Box>
//       </Stack>
//     </div>
//                  )
// }

// export default YourTeam