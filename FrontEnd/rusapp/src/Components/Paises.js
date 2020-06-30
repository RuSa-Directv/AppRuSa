import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { withRouter} from 'react-router-dom';



  const columns=[ 
    { title: 'Nombre', field: 'n_paises', initialEditValue:"Nombre" }];


  

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
    const token = localStorage.getItem('tokenL')
    fetch("http://localhost:2999/addpais",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Pais Creado')
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
    fetch("http://localhost:2999/uppais",{
      method:'POST', 
      body: JSON.stringify(datos),
      headers: {'Content-Type': 'application/json','token':token}
     }).then((response) => {
      if(response.status === 200)
      {
        alert('Pais Actualizado')
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
      var id = {id_paises : 0}
      id.id_paises = datos.id_paises
      console.log(id.id_paises)
      fetch("http://localhost:2999/delpais",{
        method:'POST', 
        body: JSON.stringify(id),
        headers: {'Content-Type': 'application/json','token':token}
       }).then((response) => {
        if(response.status === 200)
        {
          alert('Pais Eliminado')
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

export default withRouter(Pais);



