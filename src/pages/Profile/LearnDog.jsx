import React, {useState} from 'react'
import {Accordion, Box, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import { CustomButton} from "../../Components/Common";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomDialogue} from "../../Components/Modals";


export default function LearnDog({handleNext}) {
    const [expanded, setExpanded] = React.useState(false);
    const [alignment, setAlignment] = React.useState('Yes');
    const [open, setOpen] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleToggleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Box className="learnDogScreen">
            <Typography>Tell Us About Your Dog</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    < HelpOutlineIcon />
                    <Typography >
                        Is your dog afraid of strangers or certain groups of people?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="Yes">Yes</ToggleButton>
                        <ToggleButton value="No">No</ToggleButton>

                    </ToggleButtonGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    < HelpOutlineIcon />
                    <Typography >
                    Is your dog very possessive about his/her  food or toys? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="Yes">Yes</ToggleButton>
                        <ToggleButton value="No">No</ToggleButton>

                    </ToggleButtonGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    < HelpOutlineIcon />
                    <Typography >
                    Has your dog ever bitten a person or another dog, regardless or injury (not including nipping or play biting)? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="Yes">Yes</ToggleButton>
                        <ToggleButton value="No">No</ToggleButton>

                    </ToggleButtonGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    < HelpOutlineIcon />
                    <Typography >
                    Does your dog bark at other dogs when out on a walk or at you for attention? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="Yes">Yes</ToggleButton>
                        <ToggleButton value="No">No</ToggleButton>

                    </ToggleButtonGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    < HelpOutlineIcon />
                    <Typography >
                    Do you believe your dog is able to skip basic obedience and take advanced classes or agility? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="Yes">Yes</ToggleButton>
                        <ToggleButton value="No">No</ToggleButton>

                    </ToggleButtonGroup>
                </AccordionDetails>
            </Accordion>
            <CustomButton
               
               className='book-btn'
               title={"Continue"}
               color='#fff'
               backgroundColor='#32B2AC'
               iconJsx={<ChevronRightIcon />}
               fullWidth
               onClick={() => setOpen(true)}
           />
           <CustomDialogue
                type={'profile'}
                open={open}
                className={'checkoutModal'}
                handleClose={() => setOpen(false)}
                fullWidth
                handleNext={() => {

                    setOpen(false)
                }}

            />
        </Box>
    )
}
