import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function TextFields({label,type,name,value,hint}) {
 
  return (
    
      <TextField hintText={hint} id="outlined-basic" name={name} value={value}  label={label} fullWidth="true" variant="outlined" type={type} />
      
    
  );
}