import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {useNavigate} from "react-router-dom";

const back = require("../../assets/images/chevron-up.svg").default;

export const CustomDialogue = ({open, handleClose, fullWidth,className}) => {

    const navigate = useNavigate();
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={fullWidth ? "md" : ""}
                open={open}
                onClose={handleClose}
                className={className}
            >
                <DialogContent>
<Box>

</Box>
                </DialogContent>
            </Dialog>
        </>
    );
};
