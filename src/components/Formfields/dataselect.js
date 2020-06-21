import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 22213123,
  },
  {
    value: 243232434,
  },
  {
    value: 234234242,

  },
  {
    value: 3242342343,
 
  },
];

export default function MultilineTextFields(label) {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
  
        <TextField
          id="standard-select-currency"
          select
          label="Parent_Id"
          value={currency}
          onChange={handleChange}
          helperText="Please select your "
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
     
  );
}