import React from 'react';
import './App.css';
import About from './components/About'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

import Projects from './components/Projects'
import Blog from './components/Blog'
import Timeline from './components/Timeline' 
function App() {
  return (
    <div className="App">
      <div id="colorlib-page">
          <div id="container-wrap">
          <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Home></Home>
              <About></About>
              <Timeline></Timeline>
              <Projects></Projects>
              <Blog></Blog>
          	</div>
      	</div> 
      </div>
    </div>
  );
}

export default App;
