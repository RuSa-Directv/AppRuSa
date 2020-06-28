import React, {useState} from 'react';
import MaterialTable from 'material-table';



class Detalleservicios extends React.Component{


  constructor(props) {
    super(props)
    this.state = { data: []}



    this.actualizar = this.actualizar.bind(this);
    this.pais = this.pais.bind(this);
    this.app = this.app.bind(this);
    this.srv = this.srv.bind(this);
    this.prd = this.prd.bind(this);

    this.add = this.add.bind(this);
    this.up = this.up.bind(this);
    this.del = this.del.bind(this);
    this.c_pais = {}
    this.c_app ={}
    this.c_srv ={}
    this.c_prd ={}

    this.array1 ={}
    this.columns=[ ]
        
  }
  
  

  componentDidMount() {

    this.pais()
    this.app()
    this.srv()
    this.prd()
    




  this.columns=[ 
  
    { title: 'Servicio', field: 'id_serv', lookup: this.c_srv },
    { title: 'Producto', field: 'id_prod',lookup: this.c_prd },
    { title: 'Pais', field: 'id_pai',lookup: this.c_pais},
    { title: 'Aplicacion', field: 'id_aplica',lookup: this.c_app}
    ];



      this.actualizar()


    }

  pais()
  {
    let key1
    let key2
    fetch('http://localhost:2999/pais').then((response) => {return response.json()})
    .then((data) => {data.forEach(obj => {Object.entries(obj).forEach(([key,value]) => {
      if(key == "id_paises"){
        key1 = value
      }
      else{
        key2 = value
        this.c_pais[key1] = key2
      }
    })  })  })
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

  srv()

  {
    let key1
    let key2
    fetch('http://localhost:2999/srv').then((response) => {return response.json()})
    .then((data) => {data.forEach(obj => {Object.entries(obj).forEach(([key,value]) => {
          if(key == "id_servicios"){
            key1 = value;
          }
          else{
            key2 = value;
          }
          this.c_srv[key1] = key2
      })  })  })
  }

  prd()
  {
    let key1
    let key2
    fetch('http://localhost:2999/prd').then((response) => {return response.json()})
    .then((data) => {data.forEach(obj => {Object.entries(obj).forEach(([key,value]) => {
          if(key == "id_productos"){
            key1 = value;
          }
          else{
            key2 = value;
          }
          this.c_prd[key1] = key2
      })  })  })
  }










    actualizar()
    {
       fetch('http://localhost:2999/det_serv').then((response) => {return response.json()})
      .then((data) => {this.setState({ data: data })
      })
    }

    add (datos) 
    {
    fetch("http://localhost:2999/adddetsrv",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })
    alert('Detalle servicio Creado')
    this.actualizar()
    }

    up (datos) 
    {

    fetch("http://localhost:2999/updetsrv",{
        method:'POST', 
        body: JSON.stringify(datos),

        headers: {'Content-Type': 'application/json'}
       })

    alert('Detalle Servicio Actualizado')
    this.actualizar()
    }
    
    del(datos)
    {
      var id_ = {id : 0}
      id_.id = datos.id
      fetch("http://localhost:2999/deldetsrv",{
        method:'POST', 
        body: JSON.stringify(id_),

        headers: {'Content-Type': 'application/json'}
       })


      alert('Detalle de Servicio Eliminado')
      this.actualizar()
    }
render(
  
){
  
  return (
    
     <MaterialTable 
      title="ABM Detalle de Servicios"
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

export default Detalleservicios;