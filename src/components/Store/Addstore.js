import React from "react";
//textfield
import TextField from '../Formfields/TextField'
//discription Box
import SunEditor from 'suneditor-react';
//address id dilogue
import AllertDilogue from '../Formfields/AddressidDilogue'
//headings
import Typography from '../Formfields/Typography'
//select box
import Selectbox from '../Formfields/selectbox'
//switch
import Switch from '../Formfields/switch'
//for database select
//decimal number
import Decimal from '../Formfields/decimalfield'
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import 'suneditor/dist/css/suneditor.min.css';
import Grid from '@material-ui/core/Grid';

import PageBase from "../PageBase";


const FormPage = () => {

  const styles = {
    root: {
      height: 500,
      width: 200,
    },buttons: {
      marginTop: 10,
      float: "right"
    },decimal: {
      width:800,
    }
    
  };

  
  return (

    <PageBase  title="Add Store" >
      <form  styles={styles.form} >
           
           <TextField label="Title" name="title" type="string"></TextField>
            <br></br>
            <br></br>

            <Grid container spacing={1}>
            <Grid item xs={6}>
            <TextField name="url"  label="Url" type="string"></TextField>
            </Grid>

            <Grid item xs={6}>
            <TextField name="website"  label="Website" type="string"></TextField>
            </Grid>
            </Grid>
            <br></br>
          

             <h2 style={styles.toggledi}><b>Description</b></h2>
             <SunEditor name="desc" autoFocus={true} type="text" setDefaultStyle="font-family: cursive; font-size: 15px;" placeholder="Add Discription Here..."
             enableToolbar={true} setOptions={{
             height: 120
             }} />
            <br></br>
          
           <AllertDilogue></AllertDilogue>
        <br></br>
        <br></br>
        
            <Typography heading="Delivery Fields"></Typography>
            <br></br>

         
            <TextField name="domain"  label="Domain Name" type="string"></TextField>
            <br></br>
            <br></br>
        
        
            <Selectbox type="string" name="currency" choose="Currency" option1="American Doller" option2="Euro" option3="Australian Doller" option4="Rupees"></Selectbox>
         
        
        
         <br></br>
         <h2 style={styles.toggledi}><b> Delivery Description</b></h2>
             <SunEditor autoFocus={true} type="string" setDefaultStyle="font-family: cursive; font-size: 15px;" name="description" placeholder="Add Discription Here..."
             enableToolbar={true} setOptions={{
             height: 120
             }} />
            <br></br>
             

            <Typography heading="Smtp Fields"></Typography>
            <br></br>

            <TextField   label="Smtp_host" type="string"></TextField>
            <br></br>
            <br></br>

            
            <TextField   label="User Name" type="string"></TextField>
            <br></br>
            <br></br>

            
            <TextField   label="Password" type="string"></TextField>
            <br></br>
            <br></br>
            <Switch  classes={styles.root} label="Smtp_Auth_Server" ></Switch>
      <br></br>  
      <br></br> 

      <TextField   label="Port Number" type="number"></TextField>
      <br></br>  
      <br></br> 

      <TextField   label="Secured Id" type="number"></TextField>
      <br></br>  
      <br></br> 

      <TextField   label="Email-from" type="string"></TextField>
      <br></br>  
      <br></br> 

      <TextField   label="Email-to" type="string"></TextField>
      <br></br>  
      <br></br> 

      <TextField   label="Google-Map-Link" type="text"></TextField>
      <br></br>  
    
      <Typography heading="Sucharge Fields"></Typography>
            <br></br>

<Decimal  style={styles.decimal} name="Amount" ></Decimal>
      <br></br>  
      <br></br> 


      <TextField   label="Type" type="number"></TextField>
      <br></br>  
      <br></br> 

      <TextField   label="Status" type="number"></TextField>

<br></br>
<br></br>
<TextField   label="Token" type="string"></TextField>
      <br></br>  
    
<Selectbox name="Currency" choose="Currency Symbol" option1="$" option2="€" option3="฿" option4="¥"></Selectbox>
<br>
</br>
<br></br>
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



