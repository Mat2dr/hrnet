import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/NewEmployee" exact element={<NewEmployee />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
