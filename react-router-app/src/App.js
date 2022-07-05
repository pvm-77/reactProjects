import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../src/components/Home'
import Notes from '../src/components/Notes'
import Users from '../src/components/Users'
function App() {
  const padding={
    padding:5
  }

  return(
    <Router>
      <div>
        <Link style={padding} to='/'>home</Link>
        <Link style={padding} to='/notes'>notes</Link>
        <Link style={padding} to='/users'>users</Link>
      </div>
      <Routes>
        <Route path='/notes' element={<Notes/>} />
        <Route  path='/users' element={<Users/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
      <div>
        footer code goes here
      </div>
    </Router>

  )


}
export default App;
