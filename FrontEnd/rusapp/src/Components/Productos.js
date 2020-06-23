import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Productos() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Nombre', field: 'nom' }


    ],


    data: [
    {nom: 'Prepago'},
    {nom: 'Pospago'},

  ]
  });

  return (
    <MaterialTable 
      title="Modificar/Agregar Productos"
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

export default Productos;