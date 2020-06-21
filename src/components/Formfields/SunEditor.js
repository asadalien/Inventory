import React from "react";
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
const SunEditor = (name,type) => {

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
        <SunEditor name={} autoFocus={true} type={type} setDefaultStyle="font-family: cursive; font-size: 15px;"  placeholder="Add Discription Here..."
        enableToolbar={true} setOptions={{
        height: 120
        }} />
      
       );
    };
export default SunEditor;