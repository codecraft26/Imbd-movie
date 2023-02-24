import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./pages/home/Home"


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>


          {/* creating routes for index element that prefer to home page  */}
        
          <Route index element={<Home />}></Route>
        </Routes>




      </Router>

    </div>
  );
}

export default App;
