
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
         <div className='pages'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
         </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
