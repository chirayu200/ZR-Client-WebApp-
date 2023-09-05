/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Switch, FormControlLabel, FormHelperText, Box } from '@mui/material';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#b8d2f4' : '#65C466',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

export function Toggle({
  value,
  onChange,
  name,
  disabled,
  label,
  labelPlacement,
  fullWidth,
  spaceBetween,
  spaceEvenly,
  spaceAround,
  
}) {
  const handleToggle = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        className={`custom-switch ${fullWidth && 'toggle-fullWidth'} ${
          spaceBetween && 'toggle-spaceBetween'
        } ${spaceEvenly && 'toggle-spaceEvenly'} ${
          spaceAround && 'toggle-spaceAround'
        } ${labelPlacement === 'start' && 'custom-switch-start'} ${
          labelPlacement === 'end' && 'custom-switch-end'
        }  ${labelPlacement === 'top' && 'custom-switch-top'}  ${
          labelPlacement === 'bottom' && 'custom-switch-bottom'
        }}`}
        label={label}
        labelPlacement={labelPlacement}
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked={value} />}
        disabled={disabled}
        value={value}
        onChange={handleToggle}
      />
      <span>
        {/* <FormHelperText sx={{paddingLeft:'16px'}}>Be careful</FormHelperText> */}
      </span>
    </Box>
  );
}
