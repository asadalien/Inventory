import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { grey } from "@material-ui/core/colors";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PageBase from "../PageBase";
//dropzone
import { DropzoneArea } from 'material-ui-dropzone';
//numeric input

//chekcbox
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

    <PageBase  title="Add Product" >
      <form>
      <Grid container spacing={3}>

        
        <Grid item xs={5}>
         <TextField
          hintText="Title"
          label="Title"
          fullWidth={true} />
          </Grid>

          <Grid item xs={2}>
          </Grid>
          <Grid item xs={5}>
          <TextField
          hintText="Price"
          label="Price"
          fullWidth={true}
           />
          </Grid>
         </Grid>
         <br></br>

        
         <h2 style={styles.toggledi}><b>Description</b></h2>
         <SunEditor autoFocus={true} setDefaultStyle="font-family: cursive; font-size: 15px;" name="description" placeholder="Add Discription Here..."
         enableToolbar={true} setOptions={{
          height: 120
  }} />
      
      

         <Grid container spacing={1}>
         <Grid item xs={5}>
         <FormControl fullWidth={true}>
          <InputLabel htmlFor="City">Category</InputLabel>
          <Select
            inputProps={{
              name: "Category",
              id: "Category"
            }}
            fullWidth={true}
            margin="center"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"London"}>Sports</MenuItem>
            <MenuItem value={"Paris"}>Casual</MenuItem>
            <MenuItem value={"Rome"}>Rome</MenuItem>
            </Select>
            </FormControl>
            </Grid>
      
          
          
          <Grid item xs={2}>
          <FormControlLabel
          style={styles.toggleLabel}
          value="Taxable Product"
          control={<Switch
            
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />}
          label="Taxable Product"
          labelPlacement="top"
         />
        </Grid>
        


        
        <Grid item xs={5}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="stock">Stock Status</InputLabel>
          <Select
            inputProps={{
              name: "stock",
              id: "stock"
            }}
            fullWidth={true}
            margin="center"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"London"}>In Stock</MenuItem>
            <MenuItem value={"Paris"}>Out of Stock</MenuItem>
          </Select>
          
        </FormControl>
        
      
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
            Save
          </Button>
        </div>
      </form>
      
    </PageBase>
  );
};

export default FormPage;



