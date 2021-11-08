
import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })


      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}/>          
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/" element={<Home />}/>  
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
