import React, {useState} from 'react';
import MaterialTable from 'material-table';



class Detalleaplicaciones extends React.Component{


  constructor(props) {
    super(props)
    this.state = { data: []}



    this.actualizar = this.actualizar.bind(this);
    
    this.resp = this.resp.bind(this);
    this.app = this.app.bind(this);


    this.add = this.add.bind(this);
    this.up = this.up.bind(this);
    this.del = this.del.bind(this);

    this.c_resp = {}
    this.c_app ={}


    // this.c_esc1 ={}
    // this.c_esc2 ={}
    // this.c_esc3 ={}


    this.array1 ={}
    this.columns=[ ]
        
      // { title: 'Certificado', field: 'nombre', initialEditValue:"Certificado" },
      // { title: 'Pais', field: 'pais',lookup: this.state.loop },
      // { title: 'Emisor', field: 'emisor',initialEditValue:"Emisor"},
      // { title: 'Responsable', field: 'reponsable',initialEditValue:"Responsable"},
      // { title: 'Telefono', field: 'telefono',initialEditValue:"Telefono"},
      // { title: 'Vencimiento', field: 'vencimiento', type:'date', initialEditValue:"2020-01-01"},];

  }
  
  

  componentDidMount() {


    this.resp()
    this.app()

 
 


  this.columns=[ 
  
    { title: 'Aplicacion', field: 'id_aplica', lookup: this.c_app },
    { title: 'Responsable', field: 'resp',lookup: this.c_resp},
    { title: 'Escalamiento 1', field: 'esc_1',lookup: this.c_resp},
    { title: 'Escalamiento 2', field: 'esc_2',lookup: this.c_resp},
    { title: 'Escalamiento 3', field: 'esc_3', lookup: this.c_resp}];



      this.actualizar()


    }

  
  resp()
  {
    let key1
    let key2
    fetch('http://localhost:2999/users').then((response) => {return response.json()})
    .then((data) => {data.forEach(obj => {Object.entries(obj).forEach(([key,value]) => {
          if(key == "id_veladores"){
            key1 = value;
          }
          else if(key == "persona"){
            key2 = value;
          }
          else{}
          this.c_resp[key1] = key2
      })  })  })
  }

app()
  {
    let key1
    let key2
    fetch('http://localhost:2999/app').then((response) => {return response.json()})
    .then((data) => {data.forEach(obj => {Object.entries(obj).forEach(([key,value]) => {
          if(key == "id_aplicaciones"){
            key1 = value;
          }
          else{
            key2 = value;
          }
          this.c_app[key1] = key2
      })  })  })
  }

  

  
    actualizar()
    {
       fetch('http://localhost:2999/det_app').then((response) => {return response.json()})
      .then((data) => {this.setState({ data: data })
      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/adddetapp",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Detalle Aplicacion Creado')
    this.actualizar()
    }

    up (datos) 
    {

    fetch("http://localhost:2999/upcert",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })

    alert('Detalle Aplicacion Actualizado')
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


      alert('Detalle Aplicacion Eliminado')
      this.actualizar()
    }
render(
  
){
  
  return (
    
     <MaterialTable 
      title="ABM Detalle Aplicaciones"
      columns={this.columns}
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

export default Detalleaplicaciones;