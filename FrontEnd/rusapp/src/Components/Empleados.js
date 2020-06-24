import React, {useState} from 'react';
import MaterialTable from 'material-table';



  const columns=[ 
    { title: 'Persona', field: 'persona',initialEditValue: 'Persona' },
    { title: 'Telefono', field: 'telefono',initialEditValue: 'Telefono' },
    { title: 'Superior Inmediato', field: 'sup_inmediato',initialEditValue: 'Superior'},
    { title: 'Departamento', field: 'departamento',initialEditValue: 'Departamento'}];


    // para Despues
    // title: 'Birth Place',
    // field: 'birthCity',
    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 79 :'metal' },

  

class Empleados extends React.Component{


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
      fetch('http://localhost:2999/users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/addvel",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Empleado Creado')
    this.actualizar()
    }

    up (datos) 
    {
    // event.preventDefault();
    // var datos = {'usuario':'tester', 'pass':'tester', 'nombre':'tester de los tester', 'email':'tester@rusa.com'};
    // datos = JSON.stringify(datos)
    fetch("http://localhost:2999/upvel",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })


    console.log(datos)
    alert('Empleado Actualizado')
    this.actualizar()
    }
    
    del(datos)
    {
      var id = {id_veladores : 0}
      id.id_veladores = datos.id_veladores
      fetch("http://localhost:2999/delvel",{
        method:'POST', 
        body: JSON.stringify(id),

        headers: {'Content-Type': 'application/json'}
       })


      alert('Empleado Eliminado')
      this.actualizar()
    }
render(
  
){

  
  return (
     <MaterialTable 
      title="ABM Empleados"
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

export default Empleados;