import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      
      { title: 'Category', field: 'Category'  },
      { title: 'Parent_Id', field:'id' ,type:'numeric' },
      { title: 'URL', field:'Url' },
      
    ],
    data: [
      { Category: 'Sports', id: 3 ,Url:"http://localhost:3000/allcategory"}, 
     { Category: 'Shirts', id: 6 ,Url:"http://localhost:3000/allcategory"},
      
    ],
  });

  return (
    <MaterialTable
      title="All Categories"
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
    />
  );
}