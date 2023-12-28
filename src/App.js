import logo from './logo.svg';
import './App.css';
import Ajaxfun2 from './Ajaxex';
import Details from './details';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter basename="/React-DemoApp">
    <Routes>
      <Route path="" element={<Ajaxfun2 />}/>
        

        <Route path="/details" element={<Details />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
