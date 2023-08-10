import React, { useEffect, useState} from "react";
import Alert from '@mui/material/Alert';


export const Popup = ({type, errorText}) => {
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
          setAlert(false);
        }, 5000);
        setAlert(true);
      }, []); 

    console.log(type, errorText);
	return (
        <>
       {alert && 
          <Alert className="popups" variant="outlined" severity={type} >
           {errorText}
          </Alert>
       }
       </>
	);
};


