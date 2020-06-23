import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Detalleservicios() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Servicio', field: 'ser' },
        { title: 'Producto', field: 'pro' },
        { title: 'Pais', field: 'pai'},
        { title: 'Aplicacion', field: 'app'},
        { title: 'Ponderacion', field: 'pon'},
    ],


    data: [
    {ser: 'Retenciones', pro: 'Prepago',pai:'Argentina', app:'Avaya', pon:'80'},
    {ser: 'Activaciones', pro: 'Pospago',pai:'Argentina', app:'Aspect', pon:'100'},
    {ser: 'Ventas', pro: 'Prepago',pai:'Chile', app:'Optimus', pon:'90'},
    {ser: 'Atencion al Clientes', pro: 'Pospago',pai:'Peru', app:'Ares', pon:'20'},

  ]
  });

  return (
    <MaterialTable 
      title="Modificar/Agregar Detalle de Servicio"
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

export default Detalleservicios;