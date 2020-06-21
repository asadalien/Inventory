import React from 'react'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default function MyComponent(name) {

  const [value, setValue] = React.useState();

  return (
    <CurrencyTextField
		label=" Surcharge Amount"
		variant="standard"
        value={value}
        name={name}
		currencySymbol="$"
		//minimumValue="0"
        outputFormat="string"
        
		decimalCharacter="."
		digitGroupSeparator=","
		onChange={(event, value)=> setValue(value)}
    />
  );
}