import React from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Badge } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CustomInput } from "../../Components/Common";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useState, useRef } from "react";
import { InputLabel, TextField, Link } from "@mui/material";

import { CustomButton, CustomDropdown } from "../../Components/Common";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;

const backArrow = require("../../assets/images/orangeArrow.svg").default;

const options = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

// **

const AddUser = () => {
  const [value, setValue] = useState("");

  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("profile-partner");
  };

  const handleNewUser = () => {
    navigate("add-user");
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleBoxClick = () => {
    fileInputRef.current.click();
  };
  
  // **
  return (
    <Container>
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

              <Typography
                sx={{
                  color: "#003087",
                  fontSize: "18px",
                  margin: "10px",
                  fontWeight: "700",
                }}
              >
                {" "}
                Add Dog
              </Typography>
            </Box>

            <Box className='profile-cart'>
  <PersonAddRoundedIcon  />  
                   </Box>
          </Box>

          <Box className="notification-section">
            <Badge color="error" variant="dot">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </Box>
        </Box>
      </div>

      {/* main */}
      <div className="container" >
        {/* for image*/}

        <Box>
          <img
            src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            className="adduserimg"
          />
        </Box>

        {/* for form*/}

        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
              marginTop: "5px",
            }}
          >
            <Box className="appointment-dropdown" sx={{width:"597px"}}>
              <InputLabel>First Name</InputLabel>
              <CustomInput
                type="text"
                name="Name"
                placeholder="First Name"
                fullWidth
                className="card-input"
              />
            </Box>

            <Box className="appointment-dropdown" sx={{width:"597px"}}>

            <InputLabel>Last Name</InputLabel>
            <TextField  sx={{width:"550px", height:"50px", backgroundColor:"#fff", borderRadius:"60px",color:"#E35205"}} className='blue-field' value='Smith'  />
            {/* <CustomInput
              type="text"
              name="Name"
              placeholder="Last Name"
              fullWidth
              className="card-input"
            /> */}
        </Box>

 {/* date */}
 <Box className='field-section'>
				<Box className='appointment-dropdown'>
					<InputLabel>Date of Birth</InputLabel>
					<CustomDropdown
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={dateIcon}
						date
					/>
				</Box>
        </Box>
            {/* date end*/}

            {/* gender */}
            
            <Box className='appointment-main'>
			<Box className='field-section'>
				
				<Box className='appointment-dropdown' >
					<InputLabel>Gender</InputLabel>
					<CustomDropdown
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={downArrow}
					/>
				</Box>
			</Box>
      </Box>

     {/* gender end*/}
     <Box className="appointment-dropdown" sx={{width:"597px"}}>

     <InputLabel>Breed</InputLabel>

            <CustomInput sx={{fontFamily: "Univers LT Std",
fontSize: "14px",
fontStyle: "normal",
fontWeight: "400"}}
                type="text"
                name="Breed"
                placeholder="Breed"
                fullWidth
                className="card-input"
              />
              </Box>

          </div>

          {/* button */}
          <Box className="footer-section" sx={{marginTop:"30px"}}>
            <CustomButton
              className="book-btn"
              title={"Continue"}
              color="#fff"
              backgroundColor="#32B2AC"
              iconJsx={<ChevronRightIcon />}
              fullWidth
              onClick={handleNext}
            />
          </Box>
        </Box>

        {/* out */}
      </div>
    </Container>
  );
};

export default AddUser;
