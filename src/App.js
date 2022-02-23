import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox} from './component/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    //Se usa para setear estados
    this.state = {
      monstruos:[], //Array de objetos
      searchField: "",

        /*{
          //Se le agrega un id por q en caso que alguno de los elementos del array cambie, React puede renderizar solo el q cambio.
          name:'Frankestian',
          id: 'obj1'
        },
        {
          name:'Dracula',
          id: 'obj2'
        },
        {
          name:'Steve',
          id: 'obj3'
        }*/
    };
  }

  //Basciamente componenteDidMount es llamado inmediatamente luego de que un componente es montado
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")//fetch me trae lo que haya en esa url
    //THEN es una promesa, si el fetch se cumple entonces toma la respues "Response" y luego la convierte a formato entendible por js response.Json()
    .then(Response=> Response.json())
    //Lo que hace aca es tomar los usuarios del response y setear los nombres de mi vector monstruos
    .then(users => this.setState({monstruos: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render () {
    {/*Lo que estoy haciendo aca est tomando del objeto "this.state" la estructura y seteando como constante lo que tengo en monstruos y en Searchfield*/}
    const {monstruos, searchField} = this.state;
    {/*Estas dos lineas son equivalentes a la linea de arriba
    const monstruos = this.state.monstruos
    const searchField = this.state.searchField*/}
    {/*Aca lo que estoy haciendo es de */}
    const filteredMonsters = monstruos.filter((monsturo) => 
      monsturo.name.toLowerCase().includes(searchField.toLowerCase())
    );
      console.log(searchField);
      //console.log(filteredMonsters);

    return(
      <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         basicamente aca lo que estoy haciendo es traerme el valor de Estado
          {this.state.Estado}
        </p>
        <button onClick={()=>this.setState({Estado:'Si señorr'})}>Cambiar texto</button>
        </div>
      </header>
      */}
      <h1>Buscador de Gatos</h1>
      <SearchBox
        placeholder= "Buscar gato"
        //e = evento onChange lo usamos para detectar que hubo un cambio en el DOM*
        handleChange={this.handleChange}
      />
      <CardList monstruos={filteredMonsters}>
      </CardList>
    </div>
    );
  }
}

export default App;
