import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PageBase from "../PageBase";
import styled from 'styled-components';






const FormPage = () => {
  const styles = {



    
    toggleDiv: {
      marginTop: 20,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey[400],
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: "right"
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
  

    <PageBase title="Add Product" navigation="Add product">
      <form>
      
        <TextField
          hintText="Title"
          label="Title"
          fullWidth={true}
          margin="normal"
        />

<TextField
          hintText="Price"
          label="Price"
          fullWidth={true}
          margin="normal"
        />

<TextField
          id="standard-multiline-static"
          label="Description"
          hintText="Description"
          multiline
          rows={4}
          fullWidth={true}
          
        />
<br></br>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="City">Category</InputLabel>
          <Select
            inputProps={{
              name: "Category",
              id: "Category"
            }}
            fullWidth={true}
            margin="normal"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"London"}>Sports</MenuItem>
            <MenuItem value={"Paris"}>Casual</MenuItem>
            <MenuItem value={"Rome"}>Rome</MenuItem>
          </Select>
          
    



        </FormControl>


        
        <Divider />
                    <Wrapper class="label" for="input-file">Upload Product Image:</Wrapper>
                     <br /> <Input type="file" name="attachment[]"  multiple="multiple"></Input>
      
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

const Wrapper = styled.label`
display: block;
margin-bottom: 1em;
font-size: 1em;
color: #fff;
opacity: .9;
font-weight: bold;
`;



const Input = styled.input`
content: 'Select some files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
`;
