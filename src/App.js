import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Counter } from "./Counter";
import { AddMovie } from "./AddMovie";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

function App() {
  const names = ["Sowmi", "Sammu", "Kannan", "saba"];
  const users = [
    {
      name: "Sammu",
      pic: "https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg",
    },
    {
      name: "Sowmi",
      pic: "https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg",
    },
    {
      name: "Kannan",
      pic: "https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg",
    },
  ];
  const [movieList, setMovieList] = useState([
    {
      name: "Love Today",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-today-et00343241-1667476540.jpg",
      rating: 8,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Irumugan",
      poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
      rating: 8.5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "RRR",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
      rating: 8,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Beast",
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
      rating: 5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Irumugan",
      poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
      rating: 8.5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "RRR",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
      rating: 8,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Beast",
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
      rating: 5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Irumugan",
      poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
      rating: 8.5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "RRR",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
      rating: 8,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Beast",
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
      rating: 5,
      summary: "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
  ]);
  return (
    <div className="App">
      {/* /*<User name = "Sowmi"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Sammu"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Kannan"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/> */}

      {/*  {users.map((usr) => (
    <User name={usr.name} pic={usr.pic} />
    ))} */}
      {/*   <MovieList/>   */}
      {/*  <AddColor/>   */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movie</Link>
        </li>
        <li>
          <Link to="/color-game">Color game</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movies/add"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h1> 404 Not Found</h1>
      <img
        className="not-found-pic"
        src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"
        alt=""
      ></img>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Movie app😍😍</h1>
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("yellow");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState([
    "red",
    "green",
    "yellow",
    "pink",
    "orange",
  ]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter one color"
        value={color}
      />
      <button onClick={() => setColorList([...colorList, color])}>
        {" "}
        AddColor
      </button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    width: "250px",
    height: "25px",
    background: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
function Welcome({ name }) {
  return (
    <section>
      <h1 className="user-name">
        hello, <span className="user-iname">{name}</span>
      </h1>
    </section>
  );
}
function User({ pic, name }) {
  return (
    <section>
      <img className="user-profile-pic" src={pic} alt={name} />
      <h1 className="user-name">
        Hello, <span className="user-iname">{name}</span>
      </h1>
      <Counter />
    </section>
  );
}
function MovieList({ movieList, setMovieList }) {
  return (
    <div>
      <AddMovie movieList={movieList} setMovieList={setMovieList} />
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
function Movie({ movie, id }) {
  const styles = {
    color: movie.rating > 7 ? "green" : "red",
  };
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img src={movie.poster} alt="" className="movie-poster" />
      <div className="movie.specs">
        <h2 className="Movie Name : Vikram">
          Name : {movie.name}
          <IconButton
            color="primary"
            onClick={() => setShow(!show)}
            aria-label="Toggle Summary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => navigate(`/movie/${id}`)}
            aria-label="Toggle Summary"
          >
            <InfoIcon />
          </IconButton>
        </h2>
        <h3 style={styles} className="movie-rating">
          ⭐{movie.rating}
        </h3>
      </div>
      {show ? (
        <h3 className="movie-summary">Summary : {movie.summary}</h3>
      ) : null}
      <Counter />
    </div>
  );
}

export default App;
