import React  from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import Header from "./Header"
import '../Styles/Paises.css';
import dtv from "../Img/dtv.png";
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import pe from "../Img/PE.png";
import cl from "../Img/CL.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";
import uy from "../Img/UY.png";
import { dateFilter } from 'react-bootstrap-table2-filter';



const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const columns = [{
  dataField: 'nombre',
  text: 'Nombre',
  sort: true
}, {
  dataField: 'pais',
  text: 'Pais',
  sort: true
}, {
  dataField: 'emisor',
  text: 'Emisor',
  sort: true
},{
    dataField: 'reponsable',
    text: 'Responsable',
    sort: true
},{
  dataField: 'telefono',
  text: 'Telefono',
  sort: true
}, {
  dataField: 'vencimiento',
  text: 'Vencimiento',
  sort: true ,
  
}];

class Certificados extends React.Component {


  constructor(props) 
      {
      super(props)
      this.state = { products: [] , search : '' }
      }


    componentDidMount() 
    {
      fetch('http://localhost:2999/cert')
        .then((response) => {
          return response.json()
        })
        .then((products) => {
          this.setState({ products: products })
        })
    }


  
            render() 
            {
              return (  
        <header class="fondopaises" >
<div class="container-fluid">
<div class="row">
    <div class="col-md-12"> 
    <Header></Header>
    </div>
    <div class="col-md-4" > 
    <img src={ar} className="banderita" />   
    <img src={co} className="banderita" /> 
    <img src={cl} className="banderita" /> 
    <img src={uy} className="banderita" /> 
    

    </div>
    <div class="col-md-4" align="center" >
    <img src={dtv} className="dtvpaises" /> 
    </div>
    <div class="col-md-4" align="right" >
    <img src={pe} className="banderita" />   
    <img src={ca} className="banderita" />
    <img src={pr} className="banderita" />
    <img src={ec} className="banderita" />
     
    </div>
    <div class="col-md-12">
<ToolkitProvider
  keyField="id"
  data={ this.state.products }
  columns={ columns }
  search
  exportCSV ={{onlyExportFiltered: true, exportAll: false, fileName: 'Certificados.csv'}}>

{
    props => (
      <div >
        <h3 className="espacio">Certificados Regional</h3>
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

export default Certificados;

