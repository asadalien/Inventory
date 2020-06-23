
import React, { Fragment } from 'react';
//import Button from '@material-ui/core/Button';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MaterialTable from 'material-table';
import SocialButtons from '../Products/SocialButtons'
import Switch from '@material-ui/core/Switch';
//import Grid from '@material-ui/core/Grid';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product', field: 'Product' ,type:"file" },
      { title: 'Title', field: 'title' },
      { title: 'Price', field: 'Price', type: 'numeric' },
      { title: 'Description', field: 'description' },
      { title: 'Category', field: 'category' },
    { title: 'Taxable', field: 'status', type: 'boolean', render: rowData => <Switch checked=  {rowData.active}/>},
      { title: 'Stock Status', field: 'stock' }
    ],
    data: [
      { Product: 'Mehmet', title: 'sports', Price: 1987,description:'this is sports product',category:'sports',status:'false',stock:'Out of stock' },
      { Product: 'Mehmet', title: 'sports', Price: 1987,description:'this is sports product',category:'sports',status:'true',stock:'Out of stock' },
      { Product: 'Mehmet', title: 'sports', Price: 1987,description:'this is sports product',category:'sports',stock:'Out of stock' }
    ],
  });

  return (
<Fragment>   
  
  <SocialButtons ></SocialButtons>

    <MaterialTable
      title="All Products"
      columns={state.columns}
  
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