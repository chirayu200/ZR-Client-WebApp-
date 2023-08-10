import * as React from 'react';
import { Drawer} from "@mui/material";

export default function DynamicSidebar({open,handleClose,Component}) {

    return (
        <Drawer className='notifySidebar'
            anchor={"right"}
            open={open}
            onClose={handleClose}
        >
           {Component}
        </Drawer>
    );
}