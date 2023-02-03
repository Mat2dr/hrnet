import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import ListEmployees from './pages/ListEmployees';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/NewEmployee" exact element={<NewEmployee />} />
            <Route path="/ListEmployees" exact element={<ListEmployees />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
