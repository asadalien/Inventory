import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Switche({label,name,type}) {
 
    const [state, setState] = React.useState({
    check: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    
      <FormControlLabel
        control={<Switch checked={state.check} onChange={handleChange} name="check" />}
        label={label}
      />
      
  );
}