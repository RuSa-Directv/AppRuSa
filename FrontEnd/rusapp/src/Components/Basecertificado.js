import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { withRouter} from 'react-router-dom';

// Agregar en todos el With Router


  const columns=[ 
        
        { title: 'Certificado', field: 'nombre', initialEditValue:"Certificado" },
        { title: 'Pais', field: 'pais',initialEditValue:"Pais" },
        { title: 'Emisor', field: 'emisor',initialEditValue:"Emisor"},
        { title: 'Responsable', field: 'reponsable',initialEditValue:"Responsable"},
        { title: 'Telefono', field: 'telefono',initialEditValue:"Telefono"},
        { title: 'Vencimiento', field: 'vencimiento', type:'date', initialEditValue:"2020-01-01"},];
        


   
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
    
      const token = localStorage.getItem('tokenL')


      fetch("http://localhost:2999/cert",{
        method:'POST', 
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json','token':token}
       }).then((response) => {
        if(response.status === 200)
        {
          alert('Certificado Creado')
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
      fetch("http://localhost:2999/upcert",{
          method:'POST', 
          body: JSON.stringify(datos),
          headers: {'Content-Type': 'application/json','token':token}
         }).then((response) => {
          if(response.status === 200)
          {
            alert('Certificado Actualizado')
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
      fetch("http://localhost:2999/delcert",{
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

export default withRouter (Basecertificado);















