import logo from "./logo.svg";
import { useState } from "react";
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

const INITIAL_MOVIE_LIST = [
  {
    id: "99",
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
    trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
  },
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
];

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
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  const navigate = useNavigate();
  return (
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
        </Toolbar>
      </AppBar>
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
  );
}

function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movieList, movie);
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
        {show ? (
          <h3 className="movie-summary">Summary : {movie.summary}</h3>
        ) : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}

export default App;
