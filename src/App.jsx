import React, { useEffect } from 'react'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import { auth } from './firebase'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null);
  
useEffect(()=>{
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log("Data base:",user)
    } else {
      setUser(null);
    }
})

},[])
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user? <Navigate to={'/dashboard'}/>:<Signup  />} />
          <Route path="/login" element={user? <Navigate to={'/dashboard'}/>:<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App