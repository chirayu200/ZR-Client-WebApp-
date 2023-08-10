import React from "react";
import {Box} from '@mui/material';

const dog = require("../../assets/images/dogblue.svg").default;
export function CustomCardBox({className}) {
	return (
		<Box className={className}>
            <img src={dog} alt='dog' />
			<Box >
				
				
			</Box>
		</Box>
	);
}
