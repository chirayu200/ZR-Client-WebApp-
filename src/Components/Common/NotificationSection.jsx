import {Badge, Button} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import React, {useState} from "react";
import NotificationSidebar from "../Sidebar/NotificationSidebar";
import DynamicSidebar from "../Sidebar/DynamicSidebar";


export const NotificationSection = ({handleOpen}) => {
    const [notifyOpen, setNotifyOpen] = useState(false);
    return (<>
        <Button className='notification-section' onClick={() => setNotifyOpen(true)}>
            <Badge variant='dot' >
                <NotificationsNoneOutlinedIcon/>
            </Badge>
        </Button>
        <DynamicSidebar open={notifyOpen} handleClose={() => setNotifyOpen(false)}
                        Component={<NotificationSidebar handleClose={() => setNotifyOpen(false)}/>}/>
    </>)
}