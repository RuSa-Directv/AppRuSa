import React  from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import Header from "./Header"
import '../Styles/Paises.css';
import dtv from "../Img/dtv.png";
import ar from "../Img/AR.png";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const columns = [{
  dataField: 'Producto',
  text: 'Producto',
  sort: true
}, {
  dataField: 'Servicio',
  text: 'Servicio',
  sort: true
}, {
  dataField: 'Aplicacion',
  text: 'Aplicacion',
  sort: true
}];
const products = [
    {Producto: 'Prepago', Servicio: 'Atencion al Cliente',Aplicacion:'Avaya'},
    {Producto: 'Pospago', Servicio: 'Cobranzas',Aplicacion:'SMS'},
    {Producto: 'Prepago', Servicio: 'Activaciones',Aplicacion:'Whats App'},
    {Producto: 'Prepago', Servicio: 'Ventas',Aplicacion:'SDS'},
    {Producto: 'Prepago', Servicio: 'Facturacion',Aplicacion:'IBS'},
    {Producto: 'Pospago', Servicio: 'Cobranzas',Aplicacion:'Aspect'},
  ];

function hola() {
    return (   
        <header >
<div class="container-fluid">
<div class="row">
    <div class="col-md-12"> 
    <Header></Header>
    </div>
    <div class="col-md-1" > <img src={ar} className="banderita" />   </div>
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
      <div>
        <h3 className="espacio">Catalogo de Servicio - Argentina</h3>
        <SearchBar { ...props.searchProps } />
        <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <BootstrapTable
          { ...props.baseProps }
        />
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

export default hola;
