import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Countryselect from '../Formfields/Countryselect'
//textfield
import TextField from '../Formfields/TextField'

import { grey } from "@material-ui/core/colors";

import PageBase from "../PageBase";

import 'suneditor/dist/css/suneditor.min.css';

const FormPage = () => {

  
  const styles = {

    toggleDiv: {
      marginTop: 5,
      marginBottom: 1
    },
    toggleDive: {
      
      height:60
    },
    toggleLabel: {
      color: grey[4000],
      fontWeight: 50
    },
    buttons: {
      marginTop: 10,
      float: "right"
    },
    saveButton: {
      marginLeft: 3
    },
  dropzone: {
    
      height: 2
      }  ,
      title:{
color:"secondary"
      } 
  };

  
  return (

    <PageBase  title="Customer Edit Details" >
      <form>
        
        <TextField label="Complete Address" name="Address" type="text"></TextField>
        

         <br></br>
         <br></br>
          
        <TextField label="Address Line 1" hint="e.g. 25 Darwin Street" name="address1"  type="string"></TextField>
         <br></br>
         <br></br>
        
        <TextField label="Address Line 2" hint="e.g. appartment,suit,floor..." name="address2"  type="string"></TextField>
         <br></br>
         <br></br>
           
         <TextField label="Town/City"  name="city"  type="string"></TextField>
         <br></br>
         <br></br>
     
         <TextField label="state"  name="state"  type="string"></TextField>
         <br></br>
         <br></br>
     

         <TextField label="Post Code"  name="code"  type="string"></TextField>
         <br></br>
         <br></br>
     

        <Countryselect></Countryselect>


      


             <div style={styles.buttons}>
          <Link to="/">
            <Button variant="contained">Cancel</Button>
          </Link>

          <Button
            style={styles.saveButton}
            variant="contained"
            type="submit"
            color="primary"
          >
            Update
          </Button>
        </div>
      </form>
      
    </PageBase>
  );
};

export default FormPage;



