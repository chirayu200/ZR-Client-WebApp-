import React from "react";
import "../../App.css"
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import {CustomButton} from "../../Components/Common";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from '@mui/material/Button';

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const nextArrow = require("../../assets/images/chevron-up-orange.svg").default;



const ProfilePersonal = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleTeam = ()=>{
    navigate('your-team')
  }

  const handleNewUser = ()=>{
    navigate('add-user')
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px",
          gap: "15px",
          fontFamily: "Univers LT Std",
          fontWeight: "700",
        }}
      >
        <Box className="top-header shop-header">
          <Box className="first-box">
            <CustomButton
              className="arrow-btn"
              icon={backArrow}
              backgroundColor="#E7EFF9"
              onClick={() => {
                if (active === 0) {
                  navigate("/");
                } else {
                  setActive(active - 1);
                }
              }}
            />
          </Box>

          <Box sx={{ width:"37px",height:"37px", borderRadius:"37px", marginRight:"10px"}} className="profile-cart">
            <PersonAddOutlinedIcon onClick={handleNewUser} />
          </Box>
        </Box>

        <Box className="notification-section">
          <Badge color="error" variant="dot">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </Box>
      </Box>

      <Stack
        direction="column"
        sx={{}}
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Avatar
          alt="John Smith"
          src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#000",
              fontfamily: "Univers LT Std",
              fontsize: "28px",
              fontstyle: "normal",
              fontweight: "700",
            }}
          >
            {" "}
            John Smith{" "}
          </span>

          <span
            style={{
              color: "#003087",
              fontfamily: "Univers LT Std",
              fontsize: "14.857px",
              fontstyle: "normal",
              lineheight: "normal",
            }}
          >
            Reward Points: 3102
          </span>

          <span
            style={{
              color: "#E35205",
              fontFamily: "Univers LT Std",
              fontSize: "17.333px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginTop:"5px"
            }}
          >
            Gold Membership
          </span>

          {/* --ProfilePersonal--Progressbar */}

<Box sx={{ marginTop:"-10px"}}>

<Box><span style={{color: "#003087",
fontFamily: "Univers LT Std",
fontSize: "14.857px",
fontStyle: "normal",
fontWeight: "400",
marginBottom:"20px",
marginTop:"-20px"
}}
>Body - Universe</span></Box>

<Box sx={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"center" ,marginRight:"-76px",gap:"15px",marginTop:"-10px" ,fontFamily:"Univers LT Std",fontWeight:"700"}}>

<Box sx={{ width: '60%', color: "#E35205", marginTop:"10px" }}>
      <LinearProgress  style={{borderRadius:"100px", width:"100%", padding: "4px"}}  color='inherit' variant="determinate" value={45} />
    </Box>

<Box sx={{color:"#E35205",  textUnderline:"30px", display:"flex",  width:"400px",  marginTop:"10px"  }}>  <Typography sx={{textDecoration: 'underline',fontWeight: '400'}}>Complete Profile</Typography>  </Box>

</Box>

</Box>

{/* --ProfilePersonal Progressbar end-- */}

        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "20px",
              gap: "15px",
              fontFamily: "Univers LT Std",
              fontWeight: "700",
            }}
          >
            <CustomButton color="#003087" title={"About"} />

            <CustomButton
              // color={'#fff'}
              color="#003087"
              title={"Profiles"}
              className="slots active"
            />
            <CustomButton color="#003087" title={"Trophies"} />
            
          </Box>
        </Box>

      
 {/* secondhalf */}

        {/* 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
        

<Box className="purchaseCard" sx={{width:"820px", height:"236px", marginLeft:"-10px"}}>
              <Box className="top">
                
                <Box sx={{ display:"flex", flexDirection:"row" ,justifyContent:"space-around", alignItems:"center"}}> 
                 
                  <Typography>Your Team</Typography>

                  <div className="vbtn">
                  <CustomButton sx={{fontSize:"10px"}}
                    className=".viewall-btn"
                    title="View All"
                    color="#fff"
                    backgroundColor="#32B2AC"
                    

                    
                    />
                   
                   <CustomButton
                                            className='viewAllBtn'
                                            title={"View All"}
                                            color='#fff'
                                            backgroundColor='#32B2AC'
                                            onClick={handleTeam}

                                        />

                  </div>


                </Box>
                

              </Box>
              <Box>
                <Box
                  className="item"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                    <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between"}} >
                <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"110px"}} >
                <Avatar
                    alt="John Smith"
                    src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  />

                 

                  
                  <Box>
                  <Typography>Ralph Edwards</Typography>
                <Typography><span style={{color: "#003087"}}>Reward Points: 3214</span></Typography>
                  </Box>
                </Box>

                  
                  <Box> <CustomButton sx={{width: "50px"}}
                                            className='arrow-btn'
                                            icon={nextArrow}
                                            
                                        
              /> </Box>
              
                  </Box>

                </Box>


                <Box
                  className="item"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                    <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
                <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"110px"}} >
                <Avatar
                    alt="John Smith"
                    src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  />

                 

                  
                  <Box>
                  <Typography>Therese Webb</Typography>
                <Typography><span style={{color: "#003087"}}>Reward Points: 3214</span></Typography>
                  </Box>
                </Box>

                  
                  <Box>
                  <CustomButton
                                            className='arrow-btn'
                                            icon={nextArrow}
                                            // onClick={() => setActive(0)}
                                        />                  </Box>
                  </Box>

                </Box>
              </Box>
           
          </Box>
 {/* 2 */}
          
            <Box className="purchaseCard" sx={{width:"820px", height:"236px", marginLeft:"-10px"}}>
              <Box className="top">
                <Box sx={{ display:"flex", flexDirection:"row" ,justifyContent:"space-around", alignItems:"center"}}>
                  <Typography>Your Pack</Typography>
                  
                  <div className="vbtn">
                  <CustomButton sx={{display: "flex", fontSize:"10px"}}
                    className=".viewall-btn"
                    title={"View All"}
                    
                    color="#fff"
                    backgroundColor="#32B2AC"
                    />
                   

                  </div>
       
                </Box>
              </Box>
              <Box>
                <Box
                  className="item"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                    
                  }}
                >
                    <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
                <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"110px"}} >
                <Avatar
                    alt="John Smith"
                    src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  />

                 

                  
                  <Box>
                    <Typography>Cooper</Typography>
                  <Typography><span style={{color: "#003087"}}>Marvin McKinney</span></Typography>
                  </Box>
                </Box>

                  
                  <Box>
                  <Typography><span style={{color: "#E35205"}}>Firedog</span></Typography>
                  </Box>

                  <div className="arrow-btn">
                  <CustomButton
                                            className='arrow-btn'
                                            icon={nextArrow}
                                            backgroundColor='#fff'
                                            // onClick={() => setActive(0)}
                                        />   
</div>  
                  </Box>

                </Box>


                <Box
                  className="item"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                    <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", }} >
                <Box sx={{display:"flex",justifyContent:"space-around" ,width:"100%", marginRight:"110px"}} >
                <Avatar
                    alt="John Smith"
                    src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  />

                 

                  
<Box>
                    <Typography>Max</Typography>
                  <Typography><span style={{color: "#003087"}}>Theresa Web</span></Typography>
                  </Box>
                </Box>

                  
                  <Box>
                  <Typography><span style={{color: "#E35205"}}>Underdog</span></Typography>
                  </Box>

                  <div className="arrow-btn">
                  <CustomButton
                                            className='arrow-btn'
                                            color='#red'
                                            icon={nextArrow}
                                            backgroundColor='#fff'
                                            // onClick={() => setActive(0)}
                                        />   
</div>  
                  </Box>

                </Box>
              </Box>
           
          </Box>

          {/* end */}
          <Box>
          <span
            style={{
              display: "flex",
              flexdirection: "column",
              justifycontent: "center",
              alignitems: "center",
              borderRadius: "80px",
              background: "#003087",
              padding: "8px",
              position: "absolute",
              right: "50px",
              bottom:"30px"
            }}
          >
            <ChatIcon sx={{ color: "white", fontSize: "30px"}} />
          </span>
        </Box>

        </Box>
      </Stack>
    </div>
  );
};

export default ProfilePersonal;
