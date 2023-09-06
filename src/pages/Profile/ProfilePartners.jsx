import React from "react";
import "../../App.css"

import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { CustomButton } from "../../Components/CustomButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const nextArrow = require("../../assets/images/chevron-up-orange.svg").default;



const ProfilePartners = () => {

  // progress bar logic
  // ..

  // ..
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // progress bar logic end

  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleTeam = () => {
    navigate('your-team')
  }

  const handleNewUser = () => {
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


            <Typography sx={{ color: "#003087", fontSize: "18px", margin: "10px", fontWeight: "700" }}> Profile</Typography>
          </Box>
          <Box sx={{ width: "37px", height: "37px", borderRadius: "37px", marginRight: "10px" }} className="profile-cart">
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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ margin: "20px", display: "flex", alignItems: "center" }}> <Avatar alt="John Smith" src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" sx={{ width: "130px", height: "130px" }} /></Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <span style={{
              color: "#000",
              fontFamily: "Univers LT Std",
              fontSize: "30px",
              fontStyle: "normal",
              // fontweight: "700",
              fontWeight: 'bold'
            }}
            > John Smith </span>

            <span style={{
              color: "#003087",
              fontFamily: "Univers LT Std",
              fontSize: "14.857px",
              fontStyle: "normal",
              lineHeight: "normal"
            }}
            >Reward Points: 3102</span>

            <span style={{
              color: "#E35205",
              fontfamily: "Univers LT Std",
              fontSize: "17.333px",
              fontStyle: "normal",
              lineHeight: "normal",
              marginBottom: "20px",
              fontWeight: 'bold',
              marginTop: "5px"
            }}
            >Gold Membership</span>

            {/* --ProfilePersonal--Progressbar */}

            {/* <Box sx={{ marginTop:"-10px"}}>

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

</Box> */}

            {/* --ProfilePersonal Progressbar end-- */}

          </Box>



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
            {/* <CustomButton color="#003087" title={"About"} />

            <CustomButton
              // color={'#fff'}
              color="#003087"
              title={"Profiles"}
              className="slots active"
            />
            <CustomButton color="#003087" title={"Trophies"} /> */}


            <Button
              style={{
                width: "273px",
                height: "63px",
                borderRadius: 35,
                backgroundColor: "#FFFFFF",
                padding: "18px 36px",
                color: "#003087",
                textAlign: "center",
                fontFamily: "Univers LT Std",
                fontSize: "21.238px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                textTransform: "none"
              }}
              variant="contained"
            >
              About
            </Button>

            <Button
              style={{
                width: "273px",
                height: "63px",
                borderRadius: 35,
                backgroundColor: "#003087",
                padding: "18px 36px",
                color: "#FFFFFF",
                textAlign: "center",
                fontFamily: "Univers LT Std",
                fontSize: "21.238px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                textTransform: "none"
              }}
              variant="contained"
            >
              Profiles
            </Button>

            <Button
              style={{
                width: "273px",
                height: "63px",
                borderRadius: 35,
                backgroundColor: "#FFFFFF",
                padding: "18px 36px",
                color: "#003087",
                textAlign: "center",
                fontFamily: "Univers LT Std",
                fontSize: "21.238px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                textTransform: "none"
              }}
              variant="contained"
            >
              Trophies
            </Button>






          </Box>
        </Box>


        {/* secondhalf */}

        {/* 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            justifyContent: "space-around"
          }}
        >


          <Box className="purchaseCard" sx={{ width: "820px", height: "236px", marginLeft: "-10px" }}>
            <Box className="top">

              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Typography sx={{
                  fontWeight: 'bold',
                  fontFamily: "Univers LT Std",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}>Your Team</Typography>

                <div className="vbtn" style={{}}>
                  {/* <CustomButton sx={{fontSize:"10px",marginRight:"-300px", fontWeight:"bold",height:"30px"}}
                    className=".viewall-btn"
                    title="View All"
                    color="#fff"
                    backgroundColor="#32B2AC"
                    onClick={handleTeam}

                    
                    /> */}

                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      fontSize: "12px",
                      height: "30px",
                      width: "106px",
                      padding: "7px 23px",
                      marginRight: "-730px"
                    }}
                    onClick={handleTeam}
                    variant="contained"
                  >
                    View All
                  </Button>

                </div>


              </Box>


            </Box>
            <Box>
              <Box
                className="item"
                sx={{
                  display: "flex", flexDirection: "column", alignItems: "center"
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: "-200px", gap: "100px" }} >

                  <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", marginRight: "200px" }} >
                    <Avatar
                      alt="John Smith"
                      src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      sx={{ marginRight: "15px" }}
                    />




                    <Box>
                      <Typography>Ralph Edwards</Typography>
                      <Typography><span style={{ color: "#003087" }}>Reward Points: 3214</span></Typography>
                    </Box>
                  </Box>


                  <Box sx={{ marginRight: "-200px" }}>
                    {/* arrow */}
                    <CustomButton sx={{ width: "50px", marginLeft: "160px" }}
                      className='arrow-btn'
                      icon={nextArrow} />
                  </Box>

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
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: "-200px", gap: "100px" }}  >

                  <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", marginRight: "200px" }} >

                    <Avatar
                      alt="John Smith"
                      src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      sx={{ marginRight: "15px" }}
                    />




                    <Box>
                      <Typography>Therese Webb</Typography>
                      <Typography><span style={{ color: "#003087" }}>Reward Points: 3214</span></Typography>
                    </Box>
                  </Box>


                  <Box sx={{ marginRight: "-200px" }}> <CustomButton sx={{ width: "50px", marginLeft: "160px" }}
                    className='arrow-btn'
                    icon={nextArrow} />
                  </Box>
                </Box>

              </Box>
            </Box>

          </Box>
          {/* 2 */}

          <Box className="purchaseCard" sx={{ width: "820px", height: "236px", marginLeft: "-10px" }}>
            <Box className="top">
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Typography sx={{
                  fontWeight: 'bold',
                  fontFamily: "Univers LT Std",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}>Your Pack</Typography>

                <div className="vbtn">

                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      fontSize: "12px",
                      height: "30px",
                      width: "106px",
                      padding: "7px 23px",
                      marginRight: "-730px"
                    }}

                    variant="contained"
                  >
                    View All
                  </Button>



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
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }} >

                  <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", marginRight: "200px" }} >
                    <Avatar
                      alt="John Smith"
                      src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      sx={{ marginRight: "15px" }}
                    />




                    <Box>
                      <Typography>Cooper</Typography>
                      <Typography><span style={{ color: "#003087" }}>Marvin McKinney</span></Typography>
                    </Box>
                  </Box>


                  <Box sx={{ marginLeft: "150px" }}>
                    <Typography><span style={{ color: "#E35205" }}>Firedog</span></Typography>
                  </Box>

                  <div className="arrow-btn">
                    <CustomButton sx={{ width: "50px", marginLeft: "10px" }}
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
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }} >

                  <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", marginRight: "200px" }} >
                    <Avatar
                      alt="John Smith"
                      src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      sx={{ marginRight: "15px" }}
                    />




                    <Box>
                      <Typography>Max</Typography>
                      <Typography><span style={{ color: "#003087" }}>Theresa Web</span></Typography>
                    </Box>
                  </Box>


                  <Box sx={{ marginLeft: "150px" }}>
                    <Typography><span style={{ color: "#E35205" }}>Underdog</span></Typography>
                  </Box>

                  <div className="arrow-btn">
                    <CustomButton sx={{ width: "50px", marginLeft: "10px" }}
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
            <Box
              style={{
                display: "flex",
                width: "77px",
                height: "77px",
                flexdirection: "column",
                justifycontent: "center",
                alignitems: "center",
                borderRadius: "80px",
                background: "#003087",
                padding: "8px", position: "absolute",
                right: "50px",
                bottom: "80px"
              }}
            >
              <ChatIcon sx={{ color: "white", fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", margin: "16px" }} />
            </Box>
          </Box>

        </Box>
      </Stack>
    </div>
  );
};

export default ProfilePartners;
