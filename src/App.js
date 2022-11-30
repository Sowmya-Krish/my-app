import logo from './logo.svg';
import { useState } from "react" ;
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() { 
  const names =["Sowmi","Sammu","Kannan","saba"]
  const users =[
    {
  name : "Sammu",
  pic :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
  {
  name : "Sowmi",
  pic :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
  {
  name : "Kannan",
  pic :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
];
  return (
     <div className = "App">
      {/* /*<User name = "Sowmi"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Sammu"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Kannan"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/> */}
    
   {/*  {users.map((usr) => (
    <User name={usr.name} pic={usr.pic} />
    ))} */}
    <MovieList/> 
  {/*  <AddColor/>   */} 
    </div>
  );
 }

 

 function AddColor() {
  const [color, setColor] = useState("yellow");
  const styles = {
    background : color,
  }  
  const [colorList, setColorList] =useState(["red","green","yellow","pink","orange"]);
  return (
    <div>
    <input style= {styles}
    onChange={(event)=> setColor(event.target.value)} placeholder='Enter one color'
    value = {color}/>
    <button onClick={()=> setColorList([...colorList, color])}> AddColor</button>
    {colorList.map((clr)=> (
    <ColorBox color = {clr}/>
    ))}
 
    </div>
     );
 }

 function ColorBox({color}) {
  const styles = {
    width :"250px",
    height : "25px",
    background : color,
    marginTop : "10px",
  }
  return <div style ={styles}></div>
 }
 function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setdisLike] = useState(0);
  const incrementLike = () => setLike(like+1);
  const incrementDisLike = () =>setdisLike(dislike+1);

    return (
    <div>
      <IconButton onClick={incrementLike} color = "primary" aria-label="like">
     <Badge badgeContent={like} color="primary">👍</Badge>
        </IconButton>
        
      <IconButton onClick={incrementDisLike} color = "error " aria-label="dislike">
       <Badge badgeContent={dislike} color="error">👎</Badge>
      </IconButton>
       </div>        
  );
 }

 function Welcome({name}){
 
    return( <section>
   <h1 className  = "user-name">
    hello, <span className="user-iname">{name}</span>
   </h1>
    </section>
    )
    }
 function User({pic,name}) {

  return ( 
  <section>
  <img className="user-profile-pic" src = {pic} alt={name}/>
   <h1 className="user-name">
    Hello, <span className ="user-iname">{name}</span>
   </h1>
   <Counter/>
  </section>
  );
 } 
 export function MovieList() {
  const [movieList, setMovieList] = useState([ 
  {
    name: "Love Today",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-today-et00343241-1667476540.jpg",
    rating: 8,
    summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
    name: "Irumugan",
    poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
    rating: 8.5,
    summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    
    },
    {
    name: "RRR",
    poster: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
    rating: 8,
    summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
    name: "Beast",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
    rating: 5,
    summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
    },
    {
      name: "Irumugan",
      poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
      rating: 8.5,
      summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
      
      },
      {
      name: "RRR",
      poster: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
      rating: 8,
      summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
      },
      {
      name: "Beast",
      poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
      rating: 5,
      summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
      },
      {
        name: "Irumugan",
        poster: "https://m.media-amazon.com/images/I/71u1M4GSZ9L._RI_.jpg",
        rating: 8.5,
        summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
        
        },
        {
        name: "RRR",
        poster: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
        rating: 8,
        summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
        },
        {
        name: "Beast",
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
        rating: 5,
        summary : "bfkjbsczkjxbn indsklvzcxclibhvndzlxc bkjvhaJKSZDxnfj",
        },
  ]);  
  return (
    <div>
    <AddMovie movieList={movieList} setMovieList={setMovieList}/>
    <div className="movie-list">
      {movieList.map((mv, index) => (
    <Movie key ={index} movie = {mv}/>
    ))} 
    </div>
    </div>
  );
 }
 function AddMovie({movieList, setMovieList}) { 
  const[name, setName] = useState("");
  const[poster, setPoster] = useState("");
  const[rating, setRating] = useState("");
  const[summary, setSummary] = useState("");

  const addMovie= ()=>{
    const newMovie =  {
      name : name ,
      poster : poster ,
      rating : rating,
      summary : summary,
    }; 
    setMovieList([...movieList, newMovie])
    console.log(newMovie);
    }
  return(
    <div className = "add-movie-form">
    <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}/>
    <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)}/>
    <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)}/>
    <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)}/>
    <Button variant="contained" onClick={addMovie}>Add Movie</Button>

    </div>   
  );
 }  

 function Movie({movie}) {
 const styles = {
   color : movie.rating > 7 ?"green" : "red",
   }
   const [show, setShow] = useState(false);
  return (
    <div className = "movie-container">
      <img src={movie.poster} alt="" className="movie-poster"/>
      <div className='movie.specs'>
        <h2 className = "Movie Name : Vikram">Name : {movie.name}<IconButton color = "primary" onClick={()=> setShow(!show)} aria-label="Toggle Summary">
        {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton></h2>
        <h3 style = {styles}className='movie-rating'>⭐{movie.rating}</h3>
        </div>        
        {show ?<h3 className='movie-summary'>Summary : {movie.summary}</h3> :null}
        <Counter/>
        </div>
  )
 }

export default App;
