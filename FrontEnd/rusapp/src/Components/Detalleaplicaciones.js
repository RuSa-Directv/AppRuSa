import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Detalleaplicaciones() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Aplicacion', field: 'app' },
        { title: 'Dueño', field: 'due' },
        { title: 'Escalamiento 1', field: 'esc1'},
        { title: 'Escalamiento 2', field: 'esc2'},
        { title: 'Escalamiento 3', field: 'esc3'},
    ],


    data: [
    {app: 'Avaya', due: 'Gaston Salum',esc1:'Lucas Rusatti', esc2:'Jorge Lala', esc3:'Poket Caca'},
    {app: 'Aspect', due: 'Lucas Rusatti',esc1:'Gaston Salum', esc2:'Poket Caca', esc3:'Jorge Lala'},
    {app: 'Optimus', due: 'Poket Caca',esc1:'Jorge Lala', esc2:'Gaston Salum', esc3:'Lucas Rusatti'},

  ]
  });

  return (
    <MaterialTable 
      title="Modificar/Agregar Detalle de Aplicaciones"
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

export default Detalleaplicaciones;