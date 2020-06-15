import React  from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import Header from "./Header"
import '../Styles/Paises.css';
import dtv from "../Img/dtv.png";
import uy from "../Img/UY.png";


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


class Uruguay extends React.Component {


  constructor(props) 
      {
      super(props)
      this.state = { products: [] , search : '' }
      }


    componentDidMount() 
    {
      fetch('http://localhost:2999/paises/Uruguay')
        .then((response) => {
          return response.json()
        })
        .then((products) => {
          this.setState({ products: products })
        })
    }



render() {
    return (   
        <header class="fondopaises" >
<div class="container-fluid">
<div class="row">
    <div class="col-md-12"> 
    <Header></Header>
    </div>
    <div class="col-md-1" > <img src={uy} className="banderita" />   </div>
    <div class="col-md-10" align="center" >
    <img src={dtv} className="dtvpaises" /> 
    <div class="col-md-1" ></div>
    </div>
    <div class="col-md-12">
<ToolkitProvider
  keyField="id"
  data={ this.state.products }
  columns={ columns }
  search
  exportCSV ={{onlyExportFiltered: true, exportAll: false, fileName: 'Uruguay.csv'}}>
{
    props => (
      <div >
        <h3 className="espacio">Catalogo de Servicio - Uruguay</h3>
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
}

export default Uruguay;