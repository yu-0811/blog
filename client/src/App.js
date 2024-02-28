import './App.css';
import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogDetail from './components/blog/BlogDetail';
import { CategoryView } from './components/blog/CategoryView';
import BlogTop from './components/blog/BlogTop';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

function App() {
  return (
    <Router>

      <div className="App">
        <div className="App-header">
          <Header />
         </div> 

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogTop />}/>
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/blog/category/:cat' Component={<CategoryView />} />
          <Route render={() => <h4>not found...</h4>} />
        </Routes>
        
      </div>

    </Router>
  );
};

export default App;
