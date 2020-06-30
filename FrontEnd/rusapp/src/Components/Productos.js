import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { withRouter} from 'react-router-dom';



  const columns=[ 
    { title: 'Nombre', field: 'n_productos', initialEditValue:"Nombre" }];
  

class Productos extends React.Component{


  constructor(props) {
    super(props)
    this.state = { data: [] }


    this.add = this.add.bind(this);
    this.actualizar = this.actualizar.bind(this);
    this.up = this.up.bind(this);
    this.del = this.del.bind(this);

  }


  componentDidMount() {
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

    this.actualizar()
    }

    actualizar()
    {
      fetch('http://localhost:2999/prd')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })

      })
    }

    add (datos) 
    {
    const token = localStorage.getItem('tokenL')
    fetch("http://localhost:2999/addprd",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Producto Creado')
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
    fetch("http://localhost:2999/upprd",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Producto Actualizado')
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
      var id = {id_productos : 0}
      id.id_productos = datos.id_productos
      fetch("http://localhost:2999/delprd",{
        method:'POST', 
        body: JSON.stringify(id),
        headers: {'Content-Type': 'application/json','token':token}
       }).then((response) => {
        if(response.status === 200)
        {
          alert('Producto Eliminado')
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
      title="ABM Productos"
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

export default withRouter(Productos);