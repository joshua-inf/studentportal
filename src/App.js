import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Topbottom/Navbar';
import Announce from './pages/Announce';
import Assignments from './pages/Assign';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Footer from './Topbottom/Footer';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
        <div className='d-flex flex-column justify-content-between' style={{minHeight:'100vh'}}>
          <Navbar/>
          <div className='text-center'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Announcements' element={<Announce/>} />
              <Route path='/Assignemts' element={<Assignments/>} />
              <Route path='/Profile' element={<Profile/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
