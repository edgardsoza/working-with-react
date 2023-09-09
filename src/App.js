import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Characters from './components/pages/characters';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/characters" element={ <Characters/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
