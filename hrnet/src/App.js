import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import ListEmployees from './pages/ListEmployees';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/NewEmployee" exact element={<NewEmployee />} />
            <Route path="/ListEmployees" exact element={<ListEmployees />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
