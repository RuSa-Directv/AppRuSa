import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { withRouter} from 'react-router-dom';



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


 


    this.array1 ={}
    this.columns=[ ]
 

  }
  
  

  componentDidMount() {


    this.resp()
    this.app()

    const token = localStorage.getItem('tokenL')
    fetch("http://localhost:2999/login",{
        method:'POST', 
        headers: {
        'token':token
      }
       }).then((response) => {
          if(response.status === 200)
          {
            console.log('logueado')
          }
        else if (response.status === 666)
          {
            alert('Sesion Expirada')
            this.props.history.push("/Inicio")
          }
        else
        {
          this.props.history.push("/Inicio")
        }
        })

    
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
    const token = localStorage.getItem('tokenL')
    fetch("http://localhost:2999/adddetapp",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Empleado Creado')
        this.actualizar()
      }
    else if (response.status === 666)
      {
        alert('Sesion Expirada')
        this.props.history.push("/Inicio")
      }
    else
    {
      this.props.history.push("/Inicio")
    }
    })
    }

    up (datos) 
    {
      const token = localStorage.getItem('tokenL')
    fetch("http://localhost:2999/updetapp",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Empleado Actualizado')
        this.actualizar()
      }
    else if (response.status === 666)
      {
        alert('Sesion Expirada')
        this.props.history.push("/Inicio")
      }
    else
    {
      this.props.history.push("/Inicio")
    }
  })
    }
    
    del(datos)
    {
      const token = localStorage.getItem('tokenL')
      var id_ = {id : 0}
      id_.id = datos.id
      fetch("http://localhost:2999/deldetapp",{
        method:'POST', 
        body: JSON.stringify(id_),
        headers: {'Content-Type': 'application/json','token':token}
       }).then((response) => {
        if(response.status === 200)
        {
          alert('Certificado Eliminado')
          this.actualizar()
        }
      else if (response.status === 666)
        {
          alert('Sesion Expirada')
          this.props.history.push("/Inicio")
        }
      else
      {
        this.props.history.push("/Inicio")
      }
    })
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

export default withRouter(Detalleaplicaciones);