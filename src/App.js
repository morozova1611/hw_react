import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import User from './pages/User/User'
import AlbumList from './components/AlbumList/AlbumList';
import Photos from './components/Photos/Photos';



function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/> 
        <Route path='/user/:id' element={<User />}/>
        <Route path='/albums' element={<AlbumList />}/>
        <Route path='/:id/photos' element={<Photos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
