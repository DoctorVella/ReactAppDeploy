import './App.css';
import Slice from './components/Slice/Slice';

function App() {
  return (
    <div className="App">
      <header className="Header">
        E tu che Federica sei?
      </header>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage1" text="Federica Pisolina" 
                  description="In realtà si alza ogni giorno alle 6:00 per arrivare a lavoro in perfetto orario e con un aspetto impeccabile!"/>
          </div>
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage2" text="Federica Bufalina"
                  description="In realtà supporta e sopporta un bimbo con un serio problema di autismo"/>
          </div>
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage3" text="Federica Maestrina"
                  description="In realtà è bravissima nell'educare e nell'empatizzare con i bambini"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
