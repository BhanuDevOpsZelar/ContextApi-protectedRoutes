import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <UserAuthContextProvider>
      <Router>
      <Routes>
      <Route path='/home' element= {<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path='/' element= {<Login/>} />
        <Route path='/signup' element= {<Signup/>} />
      </Routes>
    </Router>
    </UserAuthContextProvider>
  );
}

export default App;
