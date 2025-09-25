// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';
import ContactPage from './Pages/ContactPage'; 
import './index.css';
import BlogPage from './Pages/BlogPage'; 
import SinglePost from './Pages/SinglePost';
import BlogList from './Pages/BlogList';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<ContactPage />} /> 
           <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog" element={<BlogPage />}>
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<SinglePost />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;