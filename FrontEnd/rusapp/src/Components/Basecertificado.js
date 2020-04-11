import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Basecertificado() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Mercado', field: 'mer' },
        { title: 'Certificado', field: 'cer' },
        { title: 'Emitor', field: 'emi'},
        { title: 'Uso', field: 'uso'},
        { title: 'Vencimiento', field: 'ven'},
        { title: 'Responsable', field: 'res'},
  
    ],


    data: [
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
        {mer: 'Prepago', cer: 'Atencion al Cliente',emi:'Avaya', uso:'Gaston Salum',ven:'Gaston Salum',res:'Lucas Rusatti'},
    ],
  });

  return (
    <MaterialTable
      title="Modificar/Agregar Certificados"
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

export default Basecertificado;