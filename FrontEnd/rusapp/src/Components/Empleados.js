import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Empleados() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Persona', field: 'per' },
        { title: 'Telefono', field: 'tel' },
        { title: 'Superior Inmediato', field: 'sup'},
        { title: 'Departamento', field: 'dep'},

    ],


    data: [
    {per: 'Gaston Salum', tel: '1131470007',sup:'Lucas Rusatti', dep:'Service Management'},
    {per: 'Lucas Rusatti', tel: '1131470007',sup:'Ezequiel Aguirre', dep:'TSI'},
    {per: 'Jorge Krenz', tel: '1131470007',sup:'Matias Camigliano', dep:'Networking'},
    {per: 'Matias Camigliano', tel: '1131470007',sup:'Monica Grimaldi', dep:'Service Management'},
  ]
  });

  return (
    <MaterialTable 
      title="Modificar/Agregar Empleados"
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

export default Empleados;