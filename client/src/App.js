import './App.css';
import Main from './components/views/Main';
import Detail from './components/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //this is new

function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail/>} path="/products/:id" />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
