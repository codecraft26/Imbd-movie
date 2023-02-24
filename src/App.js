import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./pages/home/Home"
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>


          {/* creating routes for index element that prefer to home page  */}
        
          <Route index element={<Home />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>

          <Route path="movie/:id" element={<Movie />}></Route>
        </Routes>
        {/* <Route path="movies/:type" element={<MovieList />}></Route> */}




      </Router>

    </div>
  );
}

export default App;
