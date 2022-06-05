import './App.css';
import Slice from './components/Slice/Slice';

function App() {
  return (
    <div className="App">
      <header className="Header">
        Header
      </header>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage1" text="Primo slice"/>
          </div>
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage2" text="Secondo slice"/>
          </div>
          <div className="col-md-4 p-0">
            <Slice css="BackgroundImage3" text="Terzo slice"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
