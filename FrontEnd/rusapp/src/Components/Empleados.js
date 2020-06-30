import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { withRouter} from 'react-router-dom';



  const columns=[ 
    { title: 'Persona', field: 'persona',initialEditValue: 'Persona' },
    { title: 'Telefono', field: 'telefono',initialEditValue: 'Telefono' },
    { title: 'Superior Inmediato', field: 'sup_inmediato',initialEditValue: 'Superior'},
    { title: 'Departamento', field: 'departamento',initialEditValue: 'Departamento'}];

  

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
    
      const token = localStorage.getItem('tokenL')


      fetch("http://localhost:2999/addvel",{
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
      fetch("http://localhost:2999/upvel",{
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
      var id = {id_veladores : 0}
      id.id_veladores = datos.id_veladores
      fetch("http://localhost:2999/delvel",
      {
        method:'POST', 
        body: JSON.stringify(id),
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

export default withRouter(Empleados);