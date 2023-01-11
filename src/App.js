import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import { Counter } from "./Counter";
import { AddMovie } from "./AddMovie";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { KeyboardBackspace } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Card, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { API } from "./global";

function App() {
  const [movieList, setMovieList] = useState([]);
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

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0% " }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color game
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode == "light" ? "dark" : "light")}
              >
                {mode == "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route
              path="/movies"
              element={<MovieList movieList={movieList} />}
            />
            <Route path="/color-game" element={<AddColor />} />
            <Route
              path="/movies/add"
              element={
                <AddMovie movieList={movieList} setMovieList={setMovieList} />
              }
            />
            //matches any
            when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar
            id
            <Route
              path="/movies/:id"
              element={<MovieDetails movieList={movieList} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function MovieDetails() {
  const { id } = useParams();
  //const movie = movieList[id];
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  console.log(movie);
  const styles = {
    color: movie.rating > 7 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="800px"
        src={movie.trailer}
        title="AVATAR 2 - Official Trailer | James Cameron | Avatar 2 | Official | Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <h3 style={styles} className="movie-rating">
            ⭐{movie.rating}
          </h3>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspace />}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          back
        </Button>
      </div>
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
//container and presentation component
function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  //Render box
  useEffect(() => getMovies(), []);
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
  };
  return (
    <div>
      <div className="movie-list">
        x
        {movieList.map((mv) => (
          <div key={mv.id}>
            <Movie
              movie={mv}
              id={mv.id}
              deleteButton={
                <IconButton
                  onClick={() => deleteMovie(mv.id)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function Movie({ movie, id, deleteButton }) {
  const styles = {
    color: movie.rating > 7 ? "green" : "red",
  };
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img src={movie.poster} alt="" className="movie-poster" />
      <CardContent>
        <div className="movie.specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle Summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Toggle Summary"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        {/* conditional rendering */}
        {show ? (
          <h3 className="movie-summary">Summary : {movie.summary}</h3>
        ) : null}
      </CardContent>
      <CardActions>
        {/*  rendering props pattern */}
        <Counter />
        {deleteButton}
      </CardActions>
    </Card>
  );
}

export default App;
