import React  from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import Header from "./Header"
import '../Styles/Paises.css';
import dtv from "../Img/dtv.png";
import pe from "../Img/PE.png";


const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const columns = [{
  dataField: 'pro',
  text: 'Producto',
  sort: true
}, {
  dataField: 'ser',
  text: 'Servicio',
  sort: true
}, {
  dataField: 'app',
  text: 'Aplicacion',
  sort: true
},{
  dataField: 'du',
  text: 'Dueño',
  sort: true
}, {
  dataField: 'es1',
  text: 'Escalamiento 1',
  sort: true
}, {
  dataField: 'tel1',
  text: 'Telefono',
  sort: true
},{
  dataField: 'es2',
  text: 'Escalamiento 2',
  sort: true
}, {
  dataField: 'tel2',
  text: 'Telefono',
  sort: true
},{
  dataField: 'es3',
  text: 'Escalamiento 3',
  sort: true
}, {
  dataField: 'tel3',
  text: 'Telefono',
  sort: true
}];
const products = [
    {pro: 'Prepago', ser: 'Atencion al Cliente',app:'Avaya', du:'Gaston Salum',es1:'Lucas Rusatti',tel1:'+541131470007',es2:'Esteban Pepe',tel2:'+541131470007',es3:'Juan Jose Perez',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Atencion al Cliente',app:'Aspect', du:'Jorge Krenz',es1:'Ivan Gomez',tel1:'+541131470007',es2:'Felipe Casilla',tel2:'+541131470007',es3:'Zulema Aguirre',tel3:'+541131470007'},
    {pro: 'Prepago', ser: 'Cobranzas',app:'Optimus', du:'Maira Gonzales',es1:'Diego Watcher',tel1:'+541131470007',es2:'Guadalupe Contreras',tel2:'+541131470007',es3:'Sofia Vendita',tel3:'+541131470007'},
    {pro: 'Prepago', ser: 'Ventas',app:'Engage', du:'Carolina Pecob',es1:'Susana Bravo',tel1:'+541131470007',es2:'Ofelia Caceres',tel2:'+541131470007',es3:'Felicidad Suarez',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Facturacion',app:'IBS', du:'Martin Mateos',es1:'Josefina Alvarez',tel1:'+541131470007',es2:'Yamila Perez',tel2:'+541131470007',es3:'Eduardo Castillo',tel3:'+541131470007'},
    {pro: 'Pospago', ser: 'Cobranzas',app:'Siebel', du:'Gaston Salum',es1:'Agustina Kippes',tel1:'+541131470007',es2:'Julieta Bettin',tel2:'+541131470007',es3:'Rodrigo Arguello',tel3:'+541131470007'},
    
  ];

function CatalogoPE() {
    return (   
        <header class="fondopaises" >
<div class="container-fluid">
<div class="row">
    <div class="col-md-12"> 
    <Header></Header>
    </div>
    <div class="col-md-1" > <img src={pe} className="banderita" />   </div>
    <div class="col-md-10" align="center" >
    <img src={dtv} className="dtvpaises" /> 
    <div class="col-md-1" ></div>
    </div>
    <div class="col-md-12">
<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search
  exportCSV
>
{
    props => (
      <div >
        <h3 className="espacio">Catalogo de Servicio - Peru</h3>
        <SearchBar { ...props.searchProps } />
        <div className="table table-dark table-striped table-responsive table-hover">
        <BootstrapTable className="table"
          { ...props.baseProps } 
        />
        </div>
        <ExportCSVButton className="export"{ ...props.csvProps }>Export CSV</ExportCSVButton>
        </div>
    )
  }
</ToolkitProvider>
</div>
</div>
</div>
</header>
);
    
}

export default CatalogoPE;