import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import NewEmployee from './pages/NewEmployee';
import ListEmployees from './pages/ListEmployees';

import store from './redux/store';
import { Provider } from 'react-redux';

/**
 * @name App
 * @description The app rooting
 * @return the app 
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<NewEmployee />} />
            <Route path="/NewEmployee" exact element={<NewEmployee />} />
            <Route path="/ListEmployees" exact element={<ListEmployees />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
