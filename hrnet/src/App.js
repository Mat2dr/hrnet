import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
