
import React, { Fragment } from 'react';
//import Button from '@material-ui/core/Button';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MaterialTable from 'material-table';
import SocialButtons from '../Products/SocialButtons';
import { Link } from "react-router-dom";
//import Addstore from '../Store/Addstore'
import EditAttributesIcon from '@material-ui/icons/EditAttributes';

//import Grid from '@material-ui/core/Grid';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Address', field: 'address'  },
      { title: 'City', field: 'city' },
      { title: 'State', field: 'state',  },
      { title: 'Postcode', field: 'postcode' },
      { title: 'Country', field: 'country' }
    ],
    data: [
      { address: 'E20/1 Street#4 Walton', city: 'lahore', 
      state:"pakistan",postcode:'042',country:'Pakistan' },
      { address: 'E20/1 Street#4 Walton', city: 'lahore', 
      state: "pakistan",postcode:'042',country:'Pakistan' },
      { address: 'E20/1 Street#4 Walton', city: 'lahore', 
      state: "pakistan",postcode:'042',country:'Pakistan' }
    
    ],
  });

  const actions = [
    {

      icon: () => <EditAttributesIcon /> ,
      tooltip: <h1>Edit Form</h1>,
  
      id:"link",
      Cell: ({ row }) => (<Link to={{ pathname: `/addstore` }}>{row.name}</Link>)
      
    }
  ];

  return (
<Fragment>   
  
  <SocialButtons ></SocialButtons>

    <MaterialTable
      title="All Products"
      columns={state.columns}
  actions={actions}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    /></Fragment>
  );
}