import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import FedePage from './components/FedePage/FedePage';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="ReactAppDeploy">
            <Route index element={<HomePage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="Fede" element={<FedePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
