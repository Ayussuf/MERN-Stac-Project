import React, {Component} from 'react';
import './App.css';
import Home from './component/home';
import JobPost from './component/post';
import Jobs from './component/jobs';
import About from './component/about';
import Contact from './component/contact';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




class App extends Component {
  render (){
    return (
     <div className="container">
       <Router>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <Link to="/" className="navbar-brand">Som Jobs</Link>
           <div className="collpase navbar-collapse">
               <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/post" className="nav-link">Post A Job</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/jobs" className="nav-link">Jobs</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                  </li>
               </ul>
           </div>
         </nav>
           <br/>
          <Route path="/" exact component={Home} />
         <Route path="/post"  component={JobPost} />
         <Route path="/jobs" component={Jobs} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
       </Router>
     </div>
    
    );
  }
};
  

export default App;
