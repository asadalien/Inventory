import React, { Fragment } from 'react';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import MaterialTable from 'material-table';
import SocialButtons from '../Products/SocialButtons'
import Addstore from '../Store/Addstore'
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import { Edit } from '@material-ui/icons'
import { EditDialogColumn } from 'react-md';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title' },
      
      { title: 'Website', field: 'web' },
    
    
    
      { title: 'Currency', field: 'currency' },
    
      
      { title: 'Smtp_username', field: 'name' },
      
      { title: 'Surcharge_title', field: 's_title' },
      
      { title: 'Surcharge_amount', field: 's_amount', type: 'numeric' },
      { title: 'Surcharge_type', field: 's_type', type: 'numeric' }
    ],
    data: [
      { title: 'Mehmet', Url: 'http://localhost:3000/allstores', web: "Inventory",
       description:'Store is about sports product',id:223232,desc:'delivered to customer on time',domain:"sports"
     ,currency:"dollers",host:"asad",name:"asad Iftikahr",port:3001,emailf:"axd@gmail.com",
     emailto:"axd@gmail.com",map:"location on map",s_title:"amount",s_amount:2000,s_type:1},   
     
     { title: 'Mehmet', Url: 'http://localhost:3000/allstores', web: "Inventory",
     description:'Store is about sports product',id:223232,desc:'delivered to customer on time',domain:"sports"
   ,currency:"dollers",host:"asad",name:"asad Iftikahr",port:3001,emailf:"axd@gmail.com",
   emailto:"axd@gmail.com",map:"location on map",s_title:"amount",s_amount:2000,s_type:1},
  
   { title: 'Mehmet', Url: 'http://localhost:3000/allstores', web: "Inventory",
   description:'Store is about sports product',id:223232,desc:'delivered to customer on time',domain:"sports"
 ,currency:"dollers",host:"asad",name:"asad Iftikahr",port:3001,emailf:"axd@gmail.com",
 emailto:"axd@gmail.com",map:"location on map",s_title:"amount",s_amount:2000,s_type:1},
    ],
  });
  const actions = [
    {

      icon: () => <EditAttributesIcon />,
      tooltip: <h1>Edit Form</h1>,
      onClick: (event, rowData) =>       <Link to="/addstore" component={Addstore}/> ,
      position: "row"
      
    }
  ];

  return (
<Fragment>   
  <SocialButtons></SocialButtons>
    <MaterialTable
      title="All Stores"
actions={actions}
      columns={state.columns}
      data={state.data}
      options={{
        exportButton: true
      }}

      
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