import {Box, Button} from "@mui/material";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


import React, {useState} from "react";
import NotificationSidebar from "../Sidebar/NotificationSidebar";
import DynamicSidebar from "../Sidebar/DynamicSidebar";

const notifications = require("../../assets/images/notification0.png");

export const NotificationSection = ({handleOpen}) => {
    const [notifyOpen, setNotifyOpen] = useState(false);
    return (<>
        <Button className='notification-section' onClick={() => setNotifyOpen(true)}>
            {/* <Badge>
                <Notifications/>
            </Badge> */}


            <Box sx={{ paddingLeft: '15px' }}>
                                        <img src={notifications} alt="Notification" className="setting-image" />
                                    </Box>
        </Button>
        <DynamicSidebar open={notifyOpen} handleClose={() => setNotifyOpen(false)}
                        Component={<NotificationSidebar handleClose={() => setNotifyOpen(false)}/>}/>
    </>)
}