import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//textfield
import TextField from '../Formfields/TextField'
//switch
import Switch from '../Formfields/switch'
//select box
import Selectbox from '../Formfields/selectbox'
import { grey } from "@material-ui/core/colors";

import PageBase from "../PageBase";
//dropzone
import { DropzoneArea } from 'material-ui-dropzone';
//numeric input

//chekcbox
import Grid from '@material-ui/core/Grid';
import SunEditor from 'suneditor-react';
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

    <PageBase  title="Edit Product" >
      <form>
        
     <TextField label="Title" name="title" type="string"></TextField>
        

         <br></br>
         <br></br>
          
     <TextField label="Price" name="price" type="number"></TextField>
         <br></br>
         <br></br>
        
         <h2 style={styles.toggledi}><b>Description</b></h2>
         <SunEditor autoFocus={true} setDefaultStyle="font-family: cursive; font-size: 15px;" name="description" placeholder="Add Discription Here..."
         enableToolbar={true} setOptions={{
          height: 120
  }} />
      <br></br>
      
      

         <Grid container spacing={1}>
         <Grid item xs={5}>
       
<Selectbox name="category" choose="Category" option1="sports" option2="shirts" option3="stock" option4="rome"></Selectbox>    </Grid>
  
          
          
          <Grid item xs={3}>
          <Switch label="Texable Product"></Switch>
          </Grid>

        
          <Grid item xs={4}>
          <Selectbox name="Stock" choose="Choose stock type" option1="Out of stock" option2="In stock" ></Selectbox>
           </Grid>
           </Grid>  
        <br></br>
        
      



          <DropzoneArea
             acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop or Select Image to upload"}
  onChange={(files) => console.log('Files:', files)}
/>
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



