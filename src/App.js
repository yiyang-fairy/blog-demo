import React from 'react'
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import Games from './pages/Games';
import Blog from './pages/Blog'
import Twitter from './pages/Twitter'
import Ryan from './pages/Ryan'

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Link to = '/index'>头部</Link> */}
      {/* <Link to = '/title'>标题</Link> */}
     <Routes>
       <Route path = '/' element = {<Index/>}></Route>
       
       <Route path = '/games' element = {<Games/>}></Route>
       <Route path = '/blog' element ={<Blog/>}></Route>
       <Route path = '/twitter' element = {<Twitter/>}></Route>
       <Route path = '/ryan' element = {<Ryan/>}> </Route>
     </Routes>
    </div>
    </Router>
    
  );
}

export default App;
