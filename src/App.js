import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Skill from './components/Skill';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='skill' element={<Skill/>} />
      <Route path='blog' element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
