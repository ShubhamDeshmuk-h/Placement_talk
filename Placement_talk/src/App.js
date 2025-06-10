//pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import About from './pages/About';
import Article from './pages/Article';
import Articleslisting from './pages/Articleslisting';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import Pagenotfound from './pages/pagenotfound';


function App() {
  return (
    <Router>
    <div className="mx-auto pt-20">
      <Navbar />
    <div className='max-w-screen-md mx-auto'>
      <Routes>
        <Route path='/' element = {<Home />} ></Route>
        <Route path='/about' element = {<About />} ></Route>
        <Route path='/article-list' element = {<Articleslisting />} ></Route>
        <Route path='/article/:name' element = {<Article />} ></Route>
        <Route path='/account' element = {<Account />} ></Route>
        <Route path='*' element = {<Pagenotfound />} />
      </Routes>
    </div>
    </div>
    </Router> 
  );
}

export default App;
