import React,{useState,useEffect} from "react";
import { CustomButton,Toggle, NotificationSection,CustomLoader} from "../../Components/Common";
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
    const [isStatesUpdated,setIsStatesUpdated] = useState(false);
    const [loader,setLoader]= useState(true);

    console.log("Marketing",marketingCommunication);
 

    const handleCheck = (name,event) => {
        setNotification(name,event); 
    }

    const getInitialData = () => {
         getInitialSettings(clientId,locationId).then((response) => {
            console.log(response.data.Items[0]);  
            if(response?.data?.Items[0])  {
                console.log(response.data.Items[0]?.vaccination);
                setMarketingCommunication(response.data.Items[0]?.marketingCommunication);
                setVaccinationEnabled(response.data.Items[0]?.vaccination);
                setServiceRemainder(response.data.Items[0]?.serviceReminder);
                setServiceConfirmation(response.data.Items[0]?.serviceConfirmation);
                setConnectionAlert(response.data.Items[0]?.connectionAlert);
                setMembershipExpire(response.data.Items[0]?.membershipExpirationAlert);
                setIsStatesUpdated(true)
            } 
        })
    }

    const setNotification = (name,event) => { 
        const body = {
            marketingCommunication:marketingCommunication,
            serviceReminder:serviceRemainder,
            connectionAlert:connectionAlert,
            vaccination:vaccinationEnabled,
            serviceConfirmation:serviceConfirmation,
            membershipExpirationAlert:membershipExpire,  
            updatedBy: clientId,       
            status:"1"
        }

        switch(name) {
            case 'MarketingCommunication':
                setMarketingCommunication(event);    
                body.marketingCommunication = event;                             
                break;            
            case 'Vaccination':
                setVaccinationEnabled(event);                
                body.vaccination = event;
                break;
            case 'ServiceRemainder':
                setServiceRemainder(event);  
                body.serviceReminder = event;              
                break;
            case 'ServiceConfirmation':
                setServiceConfirmation(event);      
                body.serviceConfirmation = event;          
                break;
            case 'ConnectionAlert':
                setConnectionAlert(event);          
                body.connectionAlert = event;      
                break;
            case 'MembershipExpiration':
                setMembershipExpire(event);         
                body.membershipExpirationAlert = event;       
                break;
            default:
                break;
        }
         updateSettings(clientId,locationId,body)            
    }

    const backScreen = () =>{
        setActive(0)
        setIsStatesUpdated(false)
    }

    useEffect(() => {
        getInitialData();
    },[]);


    return (
        <>
        {/* <CustomLoader IsLoading={loader}/> */}
            <Container className='appointment-container'>
                <Box className='appointment-header'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => backScreen()}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>Notifications</Typography>
                        </Box>
                    </Box>
                    <NotificationSection/>
                </Box>
              {isStatesUpdated && (
                  <Grid container>
                  <Grid item xs={5.5} md={5.5} sm={5.5} className="display-flex">
                      <Typography className="header-text-black font-weight-700">Marketing Communication</Typography>
                      <Toggle onChange={(e) => handleCheck("MarketingCommunication",e)} value={marketingCommunication} />
                  </Grid>
                  <Grid item xs={1} md={1} sm={1}/>
                  <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex">
                      <Typography className="header-text-black font-weight-700">Vaccination</Typography>
                      <Toggle onChange={(e) => handleCheck("Vaccination",e)} value={vaccinationEnabled} />
                  </Grid>
                  <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                      <Typography className="header-text-black font-weight-700">Service Reminder</Typography>
                      <Toggle onChange={(e) => handleCheck("ServiceRemainder",e)} value={serviceRemainder} />
                  </Grid>
                  <Grid item xs={1} md={1} sm={1}/>
                  <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                      <Typography className="header-text-black font-weight-700">Service Confirmation</Typography>
                      <Toggle onChange={(e) => handleCheck("ServiceConfirmation",e)} value={serviceConfirmation}  />
                  </Grid>
                  <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                      <Typography className="header-text-black font-weight-700">Connection Alert</Typography>
                      <Toggle onChange={(e) => handleCheck("ConnectionAlert",e)}   value={connectionAlert}/>
                  </Grid>
                  <Grid item xs={1} md={1} sm={1}/>
                  <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{mt:3}}>
                      <Typography className="header-text-black font-weight-700">Membership Expiration Alert</Typography>
                      <Toggle onChange={(e) => handleCheck("MembershipExpiration",e)}  value={membershipExpire} />
                  </Grid>
              </Grid>
              )}
            </Container>
        </>
    )
}