import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import FedePage from './components/FedePage/FedePage';
import HomePage from './components/HomePage/HomePage';
import { AppContextProvider } from './contexts/AppContext';
import CustomLoader from './components/CustomLoader/CustomLoader';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter basename="ReactAppDeploy">
          <CustomLoader/>
          <Routes>
            <Route>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="Fede" element={<FedePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
