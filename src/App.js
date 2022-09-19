import Home from './Home';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div align='center'>
  
    <Router>
      <Link to='/Home'>Home</Link>
      <Link to='/Signin'>Signin</Link>
      <Link to='/Signup'>Signup</Link>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
