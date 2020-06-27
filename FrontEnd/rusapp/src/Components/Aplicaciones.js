import React, {useState} from 'react';
import MaterialTable from 'material-table';



  const columns=[ 
    { title: 'Nombre', field: 'n_aplicaciones', initialEditValue:"Nombre" }];


    // para Despues
    // title: 'Birth Place',
    // field: 'birthCity',
    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 79 :'metal' },

  

class Aplicaciones extends React.Component{


  constructor(props) {
    super(props)
    this.state = { data: [] }


    this.add = this.add.bind(this);
    this.actualizar = this.actualizar.bind(this);
    this.up = this.up.bind(this);
    this.del = this.del.bind(this);

  }


  componentDidMount() {
    this.actualizar()
    }

    actualizar()
    {
      fetch('http://localhost:2999/app')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/addapp",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Aplicacion Creada')
    this.actualizar()
    }

    up (datos) 
    {
    // event.preventDefault();
    // var datos = {'usuario':'tester', 'pass':'tester', 'nombre':'tester de los tester', 'email':'tester@rusa.com'};
    // datos = JSON.stringify(datos)
    fetch("http://localhost:2999/upapp",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })


    console.log(datos)
    alert('Aplicacion Actualizada')
    this.actualizar()
    }
    
    del(datos)
    {
      var id = {id_aplicaciones : 0}
      id.id_aplicaciones = datos.id_aplicaciones
      fetch("http://localhost:2999/delapp",{
        method:'POST', 
        body: JSON.stringify(id),

        headers: {'Content-Type': 'application/json'}
       })


      alert('Aplicacion Eliminada')
      this.actualizar()
    }
render(
  
){

  
  return (
     <MaterialTable 
      title="ABM Aplicaciones"
      columns={columns}
      data={this.state.data}
       editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              this.add(newData);

              resolve();

            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.up(newData)

              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              this.del(oldData)

            }, 600);
          }),
      }}
    />
  );
}
}

export default Aplicaciones;