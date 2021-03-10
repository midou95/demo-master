
import './App.css';
import Pub from './component/Pub';
import Navbar from './component/Navbar';


import {BrowserRouter,Route}from 'react-router-dom'
import Home from './component/home';



function App() {
  return (
    <BrowserRouter> 
    <div >
    <Pub/> 
    <Navbar/>
      <Route exact path="/" component={Home} />
    
  
  
    </div>
    </BrowserRouter>
   
  );
}

export default App;
