import * as React from "react";
import {useRef, useState,useEffect} from "react";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from "react-router-dom";
import {Box, Button, Checkbox, Divider, InputLabel, Link, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton, CustomDropdown, CustomInput} from "../Common";
import SignaturePad from "react-signature-canvas";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { searchTeamMembers,AddTeamMembers } from "../../Services/APIs";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ReactComponent as TeamSearchIcon} from "../../assets/images/teamSearch.svg"
import { Padding } from "@mui/icons-material";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;

const options = [
    {label: "Option 1", value: "option1"},
    {label: "Option 2", value: "option2"},
    {label: "Option 3", value: "option3"},
    {label: "Select Client", value: "Select Client"},
];
const back = require("../../assets/images/chevron-up.svg").default;

export const ProfileModals = ({
                                  open, handleClose, fullWidth, type, setFormData,
                                  formData,
                                  handleActionBtn,
                                  handleNext,getclientOptions,clientDetail
                              }) => {
    const [isSign, setIsSign] = useState(false);
    const [showList, setList] = useState(false);
    const [error, setError] = useState(false);
    const [signError, setSignError] = useState(false);
    const [isCheck, setCheck] = useState (false);
    const [isAgree, setAgreeCheck] = useState (false);

    const [clientList, setClientOptions] = useState ([]);
    const [openConfirmation, setConfirmation] = useState (false);
    let sigCanvas = useRef(null);
    const navigate = useNavigate();
   
    const handleCloseModal = () => {
        if(isSign){
            setIsSign(true)
            setSignError(false)
        const image = sigCanvas?.toDataURL();
        setFormData({...formData, signature: image, isLiabilityWaiverSigned: true});
            handleClose()
        }else{
            setIsSign(false)
            setSignError(true);
        }
        // if (!isAgree) {
        //     setAgreeCheck("Please accept agrement");
        //   } else {
        //     setFormData({...formData, signatureImage: image, isLiabilityWaiverSigned: true});
        //     handleClose()
        //   }
       
       
    }
    const clearSignature = () => {
        sigCanvas?.current !== null && sigCanvas.clear();
        setFormData({...formData, signature: null});
        setIsSign(false)
    }

    const handleDropdownChange = (event) => {
       // setSelectedData();
     
    }
    
  
    const handleCategoryChange = (e,key) => {
        if(key && key === true){
            setAgreeCheck(false)
        }else{
            setAgreeCheck(true)
 
        }
        console.log('chage value---', e.target.value,)
        console.log('chage key---', key)
        setClientOptions(key)    
        //setSelectedData(value)
       // setSelectedData((prevState) => ({ ...prevState, data: value }));
    
      };

    
    
    const openConfirmationModal = (name) => {
       if(isAgree){
        setError(true)
        setConfirmation(false)
       }else{
        setError(false)
        setConfirmation(true)
       }
       // setCheck(true);
        
        
        
    }
    const filterData = (text) => {
        const newData = getclientOptions.filter((item) => {
          const itemData = `${item.firstName} ${item.lastName} ${item.email}`;
          const textData = text;
          return itemData.toLowerCase().includes(textData.toLowerCase());
        });
    
        setClientOptions(newData);
      };
    
    const AddTeam = () => {
      
       //const res = selectedData.data.selectedClient
       //console.log('ressssssss',res)
        const result = {
            franchiseeId: clientList.franchiseeId,
            locationId: clientDetail.locationId,
            addresseeId: clientList.sortKey,
            requesterId: clientDetail.sortKey,
            createdBy: clientDetail.firstName,
            status: 1,
          };
         // console.log(res)
        AddTeamMembers(result).then((response) => {
           if(response.statusCode === 200){
            handleNext()
           }else{
            //setConfirmation(true)
            //handleClose()
           }
           
        })
    }
       
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={fullWidth ? "md" : ""}
                open={open}
                onClose={handleClose}
                className={`global-modal-main ${type === 'team' || type === 'invite' ? openConfirmation?'confirm-team-box': 'teams-main-wrap' : type === 'confirm' || type === 'dog' ? 'confirm-main-wrap' : ""}`}
            >
                {type === 'confirm' || type === 'dog' ?
                    <>
                        <Box className='confirm-main'>
                            <Typography className='modal-heading '>Profile Completed</Typography>
                            <Typography className='modal-description'>
                                {type === 'dog' ? "You have successfully completed your dog profile. Do you want to add another dog?" : "You have successfully completed your profile. Do you want to build your team now? Before adding someone to your team, they should already have an account created."}

                            </Typography>

                        </Box>
                        <DialogActions>
                            <Button className='red-btn' onClick={() => handleActionBtn('notNow')}>
                                Not Now
                            </Button>
                            <Divider className='profile-btn-divider'/>
                            <Button className='blue-btn' onClick={() => handleActionBtn('yes')}>Yes</Button>
                        </DialogActions></>

                    : type === 'team' || type === 'invite' ?
                        <>
                            {openConfirmation ? '' :<Box className='modal-header'>
                                <Button onClick={handleClose} className='close-button'><CloseIcon/></Button>
                            </Box>}
                            <Box className={`team-main ${type === 'invite' && 'invite-main'}`}>
                                {type === 'invite' && <GroupsOutlinedIcon/>}

                                <Typography
                                    className='team-main-heading'>{type === 'invite' ? "Invite Team Members" : openConfirmation ? '' :"Build Your Team"}</Typography>
                                <Box className='teams-content'>
                                    {type === 'invite' ?
                                        <Typography className='invite-para'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies
                                            accumsan aliquet.
                                        </Typography> : <>
                                        {
                                          openConfirmation
                                        ?
                                        <>
                         <Box >
                           <Box className='confirm-team-box'>
                            <Typography className='modal-description-confirm'>
                                {`Are you sure you want to add ${'Alex'} to your family?`}

                            </Typography>

                        </Box>
                        <DialogActions style={{marginBottom:'2px'}}>
                            <Button className='red-btn' style={{color:'#d13a00',textTransform: 'capitalize',fontWeight: '700'}} onClick={handleNext}> No </Button>
                            <Divider className='profile-btn-divider'/>
                            <Button className='blue-btn' style={{color:'#003087', textTransform: 'capitalize',fontWeight: '700'}}  onClick={AddTeam}>Yes</Button>
                        </DialogActions>
                        </Box>   
                                        </>
                                           :
                                           <Box className='teamSearch'>
                                           {/* <InputLabel>Select Client</InputLabel> */}
                    
                                    {/* <CustomDropdown
                                        placeholder='Select Client'
                                        onChange={handleDropdownChange}
                                        name='SearchClient'
                                        value={clientList.value}
                                            options={clientList}
                                            icon={downArrow}
                                        /> */}


<div className="search-team">
      <Autocomplete
        className='card-input search-bar'
        id="free-solo-demo"
        name='searchTeam'
        freeSolo
        options={getclientOptions}
        getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
        onChange={handleCategoryChange}
        onInputChange={(event, newInputValue) => {
          filterData(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
          
          className="autocomplete-list-boxx"
            {...params}
            InputLabelProps={{
                className: 'autocomplete-list-box'
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <SearchIcon style={{ cursor: 'pointer', color: 'orangered' }} />
              ),
            }}
          />
        )}
        renderOption={(props, option) => {
            const { firstName,lastName ,email} = option;
            return (
               <div {...props}>
                 <span style={{padding:'10px 10px 0px 15px'}} >
                <span style={{ color: "rgba(0, 0, 0, 1)", fontSize: 16 }}>{firstName + ' ' + lastName}</span><br></br>
                <span style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 14 }}>{email}</span> <br/>
                <span style={{ color: "rgba(0, 0, 0, 0.2)", width:'100px!important' }}><hr ></hr></span>
                </span>  
                </div>
          );
        }}
        icon={<SearchIcon />}
        
        
      />
    
    </div>

                   


                                         <Box className='save-car' sx={{ mt: 2 }}>
                                           <label style={{ display: 'flex', alignItems: 'center' }}>
                                           <Checkbox style={{marginBottom : '6em',color: '#003087' }} name="agreeBox" className="agree-select"
                                            onChange={handleCategoryChange}
                                        //    onChange={(e) => handleDropdownChange({
                                             
                                        //     agreeBox: e.target.checked
                                        //    })}

                                           />
                                           <p style={{ marginLeft: '8px' }}>
                                           By proceeding with adding a person into your family, you acknowledge that you are granting them control over your credit,
                                           which may also be utilized for their dog's needs.
                                           </p>
                                           </label>
                                           </Box>
                                           {(error) && (
                                           <Typography
                                           style={{
                                               color: "red",
                                               marginVertical: 5,
                                               marginStart: 8,
                                           }}
                                           >
                                           {"Please Accept Terms&condition"}
                                           </Typography>
                                       )}
                                       </Box>


                                        }
                                        </>}

                                </Box>
                                {type === 'invite' ? <CustomButton
                                        className='book-btn'
                                        title={"Invite Now"}
                                        color='#fff'
                                        backgroundColor='#32B2AC'
                                        onClick={handleNext}
                                    /> :
                                   openConfirmation ? '' :
                                   <CustomButton
                                   className='book-btn'
                                   title={"Add To Your Team"}
                                   color='#fff'
                                   backgroundColor='#003087'
                                   fullWidth
                                   onClick={openConfirmationModal}
                               />
                                   
                                   }


                            </Box>
                        </>
                        :

                        <DialogContent>
                            <Box className='modal-content-wrap'>
                                <Box className='modal-header'>
                                    <Typography className='heading'>Liability Wavier</Typography>
                                    <Button onClick={handleClose}><CloseIcon/></Button>
                                </Box>
                                <Box className='terms-box'>
                                    <Typography>I have voluntarily applied to participate in programs and activities at
                                        the
                                        Zoom
                                        Room. I am aware that there are inherent risks and hazards involved in
                                        activities
                                        and
                                        around dogs, and I am voluntarily participating in these activities with
                                        knowledge
                                        of
                                        potential dangersI have voluntarily applied to participate in programs and
                                        activities at
                                        the Zoom Room. I am aware that there are inherent risks and hazards involved in
                                        activities and around dogs, and I am voluntarily participating in these
                                        activities
                                        with
                                        knowledge of potential dangersI have voluntarily applied to participate in
                                        programs
                                        and
                                        activities at the Zoom Room. I am aware that there are inherent risks and
                                        hazards
                                        involved in activities and around dogs, and I am voluntarily participating in
                                        these
                                        activities with knowledge of potential dangers</Typography>
                                </Box>

                                <Box className='save-card'>
                                    <Checkbox checked={formData.policyCheck} onChane={(e) => setFormData({
                                        ...formData,
                                        policyCheck: e.target.checked
                                    })}/>
                                    <Typography>I agree to Zoom Room’s liability waiver and terms and
                                        conditions.</Typography>
                                </Box>
                                <Box className='booking-notes signature-box'>

                                    {formData.signature ?
                                        <img src={formData.signature} alt='signature' width={'300px'}
                                             height={'104px'}/> : isSign ? <SignaturePad
                                                penColor="black"
                                                ref={(ref) => {
                                                    sigCanvas = ref
                                                }}
                                                canvasProps={{className: 'signature-canvas',}}
                                            />
                                            :
                                            <Link className='see-more' onClick={() => setIsSign(true)}> Sign
                                                Here</Link>}


                                </Box>
                                <Box className='clear-link'>
                                    <Button onClick={clearSignature}>Clear</Button>
                                </Box>
                                {signError ? (<Typography color="error" variant="body2">Accept terms & sign</Typography>):''}             


                                <CustomButton
                                    className='book-btn'
                                   // disabled={(!formData.policyCheck)}
                                    title={"Submit"}
                                    color='#fff'
                                    backgroundColor='#32B2AC'
                                    iconJsx={<ChevronRightIcon/>}
                                    fullWidth
                                    onClick={handleCloseModal}

                                />
                            </Box>
                        </DialogContent>
                }
                
            </Dialog>
        </>
    );
};
