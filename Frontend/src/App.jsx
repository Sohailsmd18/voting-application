import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Privacy from './Components/Privacy Terms/Privacy';
import Terms from './Components/Privacy Terms/Terms';
import Vote from './Components/Vote/Vote'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Vote' element={<Vote />} /> {/* Fixed component name to Vote */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
