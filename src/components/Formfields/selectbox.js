import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({name,type,choose,option1,option2,option3,option4}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.name,
    });
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          name={name}
          type={type}

         className={classes.selectEmpty}
          
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value={option1}>{choose}</option>
        <option >{option1}</option>
 ,,,,,,,, <option >{option2}</option>
          <option >{option3}</option>
          <option >{option4}</option>
        </NativeSelect>
        
      </FormControl>
    
    </div>
  );
}