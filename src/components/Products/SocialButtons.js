import React from 'react';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import { makeStyles } from '@material-ui/core/styles';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 9,
  },div:{
    color:"secondary"
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      
      <Button
        variant="contained"
    
        size="small"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Import
      </Button>
 
      <Button
        variant="contained"
    color="secondary"
        className={classes.button}
        startIcon={<PrintIcon/>}
      >
        Print
      </Button>
      <Button
        variant="contained"
    
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Export
      </Button>
      
    </div>
  );
}