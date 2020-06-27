import React, {useState} from 'react';
import MaterialTable from 'material-table';



  const columns=[ 
    { title: 'Nombre', field: 'n_paises', initialEditValue:"Nombre" }];


    // para Despues
    // title: 'Birth Place',
    // field: 'birthCity',
    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 79 :'metal' },

  

class Pais extends React.Component{


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
      fetch('http://localhost:2999/pais')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/addpais",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Pais Creado')
    this.actualizar()
    }

    up (datos) 
    {
    // event.preventDefault();
    // var datos = {'usuario':'tester', 'pass':'tester', 'nombre':'tester de los tester', 'email':'tester@rusa.com'};
    // datos = JSON.stringify(datos)
    fetch("http://localhost:2999/uppais",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })


    console.log(datos)
    alert('Pais Actualizado')
    this.actualizar()
    }
    
    del(datos)
    {
      var id = {id_paises : 0}
      id.id_paises = datos.id_paises
      console.log(id.id_paises)
      fetch("http://localhost:2999/delpais",{
        method:'POST', 
        body: JSON.stringify(id),

        headers: {'Content-Type': 'application/json'}
       })


      alert('Pais Eliminado')
      this.actualizar()
      
    }
render(
  
){

  
  return (
     <MaterialTable 
      title="ABM Paises"
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

export default Pais;



