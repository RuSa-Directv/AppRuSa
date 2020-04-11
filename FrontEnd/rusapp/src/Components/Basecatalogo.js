import React from 'react';
import MaterialTable from 'material-table';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Basecatalogo() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Producto', field: 'pro' },
        { title: 'Servicio', field: 'ser' },
        { title: 'Aplicacion', field: 'app'},
        { title: 'Dueño', field: 'du'},
        { title: 'Escalamiento1', field: 'es1'},
        { title: 'Telefono', field: 'tel1'},
        { title: 'Escalamiento2', field: 'es2'},
        { title: 'Telefono', field: 'tel2'},
        { title: 'Escalamiento3', field: 'es3'},
        { title: 'Telefono', field: 'tel3'},
    ],


    data: [
    {pro: 'Prepago', ser: 'Atencion al Cliente',app:'Avaya', du:'Gaston Salum',es1:'Lucas Rusatti',tel1:'+541131470007',es2:'Esteban Pepe',tel2:'+541131470007',es3:'Juan Jose Perez',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Atencion al Cliente',app:'Aspect', du:'Jorge Krenz',es1:'Ivan Gomez',tel1:'+541131470007',es2:'Felipe Casilla',tel2:'+541131470007',es3:'Zulema Aguirre',tel3:'+541131470007'},
    {pro: 'Prepago', ser: 'Cobranzas',app:'Optimus', du:'Maira Gonzales',es1:'Diego Watcher',tel1:'+541131470007',es2:'Guadalupe Contreras',tel2:'+541131470007',es3:'Sofia Vendita',tel3:'+541131470007'},
    {pro: 'Prepago', ser: 'Ventas',app:'Engage', du:'Carolina Pecob',es1:'Susana Bravo',tel1:'+541131470007',es2:'Ofelia Caceres',tel2:'+541131470007',es3:'Felicidad Suarez',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Facturacion',app:'IBS', du:'Martin Mateos',es1:'Josefina Alvarez',tel1:'+541131470007',es2:'Yamila Perez',tel2:'+541131470007',es3:'Eduardo Castillo',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Cobranzas',app:'Siebel', du:'Gaston Salum',es1:'Agustina Kippes',tel1:'+541131470007',es2:'Julieta Bettin',tel2:'+541131470007',es3:'Rodrigo Arguello',tel3:'+541131470007'},
    
  ]
  });

  return (
    <MaterialTable 
      title="Modificar/Agregar Componentes de Catalogo de Servicio"
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

export default Basecatalogo;