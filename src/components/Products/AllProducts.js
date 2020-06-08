import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Product', field: 'Product' },
      { title: 'ProductName', field: 'ProductName' },
      { title: 'Price', field: 'Price', type: 'numeric' },
      { title: 'Category', field: 'Category' }
    ],
    data: [
      { Product: 'Mehmet', ProductName: 'Baran', Price: 1987, Category: 63 },
      { Product: 'Mehmet', ProductName: 'Baran', Price: 1987, Category: 63 },
      { Product: 'Mehmet', ProductName: 'Baran', Price: 1987, Category: 63 },
      
    ],
  });

  return (
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
    />
  );
}