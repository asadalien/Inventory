import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import { grey } from "@material-ui/core/colors";
import PageBase from "../PageBase";






const AddCategory = () => {
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
  

    <PageBase title="Add Category" >
      <form className="p-4">
      
        <TextField
          hintText="Add New Category"
          label="Category"
          fullWidth={true}
          margin="normal"
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

export default AddCategory;
