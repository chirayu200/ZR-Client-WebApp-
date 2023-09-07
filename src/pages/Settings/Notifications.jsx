import React,{useState,useEffect} from "react";
import { CustomButton,Toggle, NotificationSection } from "../../Components/Common";
import { Box, Container,Grid, Typography } from "@mui/material";
import {getInitialSettings,updateSettings} from '../../Services/APIs/nofication';
import { getLocalData } from "../../Utils";

const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Notifications({setActive,franchiseeId}) {

     const clientId = getLocalData('clientId');
     const locationId = getLocalData('locationId');
     
    const [marketingCommunication,setMarketingCommunication] = useState(false);
    const [vaccinationEnabled, setVaccinationEnabled] = useState(false);
    const [serviceRemainder, setServiceRemainder] = useState(false);
    const [serviceConfirmation, setServiceConfirmation] = useState(false);
    const [connectionAlert, setConnectionAlert] = useState(false);
    const [membershipExpire, setMembershipExpire] = useState(false);
    // const [dataMembership,setMembership] = useState({
    //     location:locationId,
    //     marketingCommunication:marketingCommunication,
    //     serviceReminder:serviceRemainder,
    //     connectionAlert:connectionAlert,
    //     vaccination:vaccinationEnabled,
    //     serviceConfirmation:serviceConfirmation,
    //     membershipExpirationAlert:membershipExpire,
    //     updatedBy:clientId,
    //     status:2
    // })

    useEffect(() => {
        getInitialData()
    },[])
    const handleCheck = (name,event) => {
        switch(name){
            case 'MarketingCommunication':
                setMarketingCommunication(event);
                // setMembership(...dataMembership, ['MarketingCommunication']:event)
                break;
            
            case 'Vaccination':
                setVaccinationEnabled(event);
                break;
            case 'ServiceRemainder':
                setServiceRemainder(event);
                break;
            case 'ServiceConfirmation':
                setServiceConfirmation(event);
                break;
            case 'ConnectionAlert':
                setConnectionAlert(event);
                break;
            case 'MembershipExpiration':
                setMembershipExpire(event);
                break;
            default:
                break;
        }
        // const dataMembershipString = JSON.stringify(dataMembership);
        // console.log(dataMembershipString)
    }

    const getInitialData = () => {
        getInitialSettings(clientId,locationId).then((response) =>{
            console.log(response.data.Items[0].connectionAlert);
            let value=response.data.Items[0].connectionAlert
            setConnectionAlert(value)
        })
    }

    const setNotification = () =>{
        const body = JSON.stringify({
            location:locationId,
            marketingCommunication:marketingCommunication,
            serviceReminder:serviceRemainder,
            connectionAlert:connectionAlert,
            vaccination:vaccinationEnabled,
            serviceConfirmation:serviceConfirmation,
            membershipExpirationAlert:membershipExpire,
            updatedBy:clientId,
            status:2
        }
            )

            updateSettings(clientId,franchiseeId,body)
            setActive(0);
    }
    return (
        <>
            <Container className='appointment-container'>
                <Box className='appointment-header'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => setNotification()}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>Notifications</Typography>
                        </Box>

                    </Box>
                    <NotificationSection/>
                </Box>
                <Grid container>
                    <Grid item xs={5.5} md={5.5} sm={5.5} className="display-flex">
                        <Typography className="header-text-black font-weight-700">Marketing Communication</Typography>
                        <Toggle onChange={(e) => handleCheck("MarketingCommunication",e)} checked={!!marketingCommunication}/>
                    </Grid>
                    <Grid item xs={1} md={1} sm={1}/>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex">
                        <Typography className="header-text-black font-weight-700">Vaccination</Typography>
                        <Toggle onChange={(e) => handleCheck("Vaccination",e)}  checked={vaccinationEnabled}/>
                    </Grid>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                        <Typography className="header-text-black font-weight-700">Service Reminder</Typography>
                        <Toggle onChange={(e) => handleCheck("ServiceRemainder",e)}  checked={serviceRemainder}/>
                    </Grid>
                    <Grid item xs={1} md={1} sm={1}/>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                        <Typography className="header-text-black font-weight-700">Service Confirmation</Typography>
                        <Toggle onChange={(e) => handleCheck("ServiceConfirmation",e)}  checked={serviceConfirmation}/>
                    </Grid>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                        <Typography className="header-text-black font-weight-700">Connection Alert</Typography>
                        <Toggle onChange={(e) => handleCheck("ConnectionAlert",e)}   value={connectionAlert}/>
                    </Grid>
                    <Grid item xs={1} md={1} sm={1}/>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                        <Typography className="header-text-black font-weight-700">Membership Expiration Alert</Typography>
                        <Toggle onChange={(e) => handleCheck("MembershipExpiration",e)}  checked={membershipExpire}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}