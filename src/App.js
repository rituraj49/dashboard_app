import { Button, Typography, AppBar, Card } from '@mui/material';
import Material from './Material';
import Sidebar from './Sidebar';
import Barchart from './Barchart';
import Tabledata from './Tabledata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      {/* <Button variant='outlined'> here lies the ruins</Button>
      <Typography variant="h1">Hello World</Typography> */}
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Sidebar />} />
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
      <ToastContainer />
      {/* <Material /> */}
      {/* <Barchart />
      <Tabledata /> */}
    </div>
  );
}  

export default App;
