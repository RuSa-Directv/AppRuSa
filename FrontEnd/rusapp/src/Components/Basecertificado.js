import React, {useState} from 'react';
import MaterialTable from 'material-table';

  const columns=[ 
        
        { title: 'Certificado', field: 'nombre', initialEditValue:"Certificado" },
        { title: 'Pais', field: 'pais',initialEditValue:"Pais" },
        { title: 'Emisor', field: 'emisor',initialEditValue:"Emisor"},
        { title: 'Responsable', field: 'reponsable',initialEditValue:"Responsable"},
        { title: 'Telefono', field: 'telefono',initialEditValue:"Telefono"},
        { title: 'Vencimiento', field: 'vencimiento', type:'date', initialEditValue:"2020-01-01"},];
        


    // para Despues
    // title: 'Birth Place',
    // field: 'birthCity',
    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 79 :'metal' },

  

class Basecertificado extends React.Component{


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
      fetch('http://localhost:2999/cert')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/cert",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Certificado Creado')
    this.actualizar()
    }

    up (datos) 
    {
    // event.preventDefault();
    // var datos = {'usuario':'tester', 'pass':'tester', 'nombre':'tester de los tester', 'email':'tester@rusa.com'};
    // datos = JSON.stringify(datos)
    fetch("http://localhost:2999/upcert",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })


    console.log(datos)
    alert('Certificado Actualizado')
    this.actualizar()
    }
    
    del(datos)
    {
      var id_ = {id : 0}
      id_.id = datos.id
      fetch("http://localhost:2999/delcert",{
        method:'POST', 
        body: JSON.stringify(id_),

        headers: {'Content-Type': 'application/json'}
       })


      alert('Certificado Eliminado')
      this.actualizar()
    }
render(
  
){

  
  return (
     <MaterialTable 
      title="ABM Certificados"
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

export default Basecertificado;















