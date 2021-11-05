import * as React from "react";
import { BrowserRouter as Switch, Route, Link,useParams } from "react-router-dom";
import { Movie } from "./Movie";
import {useState} from "react";
import{Addmovie} from "./Addmovie";
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { Tictactoe } from "./Tictactoe";

function App() {
  const Initial_Movies = [
    {
      name: "Soorarai pottru ",
      pic: "https://moviegalleri.net/wp-content/uploads/2020/01/Actor-Suriya-Soorarai-Pottru-Second-Look-Poster-HD.jpg",
      Rating: "4.9⭐",
      description: "Soorarai Pottru is the story of Nedumaran Rajangam, a man from Solavandhan, a small town in Madurai, who dreams of launching a low-cost airline; and his wife Sundari, who runs a successful bakery and funds his dreams. Suriya, who plays Maaran, brings the whole of himself to the film.",
      trailer:"https://www.youtube.com/embed/fa_DIwRsa9o" 
    },
    {
      name: "Social-network",
      pic: "https://i.ytimg.com/vi/8IAGH6k17nw/maxresdefault.jpg",
      Rating: "4.0⭐",
      description: "The Social Network is a 2010 American biographical drama film directed by David Fincher and written by Aaron Sorkin. Adapted from Ben Mezrich's 2009 book The Accidental Billionaires, it portrays the founding of social networking website Facebook and the resulting lawsuits.",
      trailer:"https://www.youtube.com/embed/lB95KLmpLR4" 
    },
    {
      name: "JOBS",
      pic: "https://i.pinimg.com/originals/04/5e/19/045e1902701ffc74e977f9407e49ddbf.jpg",
      Rating: "4.2⭐",
      description: "Jobs is a 2013 American biographical drama film based on the life of Steve Jobs, from 1974 while a student at Reed College to the introduction of the iPod in 2001. It is directed by Joshua Michael Stern, written by Matt Whiteley, and produced by Stern and Mark Hulme.",
      trailer:"https://www.youtube.com/embed/FrvkCS0ZGPU"
    },
  ];

  const [movies, setMovies] = useState(Initial_Movies);
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  return (
    // <ThemeProvider theme={darkTheme}>
      
    
    
    <div className="App">
     
      
      <ul>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
        <li>
          <Link to="/Welcome">Welcome</Link>
        </li>
        <li>
          <Link to ="/add">Add movie</Link>
        </li>
        <li>
          <Link to ="/tic-tac-toe">Tic tac toe</Link>
        </li>
      </ul>
      

      <Switch>
        <Route path="/movie">
          <Movie movies={movies}/>
        </Route>
        <Route path = "/add"> 
        <Addmovie movies={movies} setMovies={setMovies}/>
        </Route>
        <Route path = "/movie/:id"> 
        <Moviedetails movies={movies}/>
        </Route>
        <Route path="/Welcome">
          <Welcome />
          </Route>
        <Route path="/tic-tac-toe">
         <Tictactoe/>  
        </Route>
        {/* <Route path="**">
          <Notfound />
        </Route> */}
      </Switch>
    </div>
    // </ThemeProvider>
  );
}

function Welcome() {
  return <h1>Welcome</h1>;
}



function Moviedetails({movies}) {
  const {id} = useParams()
  const movie = movies[id]
  console.log(id,movies,movie);
  return<div>
    
    <iframe width="100%"
    height="506" 
    src={movie.trailer}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen>

    </iframe>
    <div className="Movie-details-container">
    <div className="movie-specs">
        <h2 className="movie-name"> {movie.name}</h2>
        <p className="movie-rating">{movie.Rating}</p>
      </div>
      <p>{movie.description}</p>
    </div>
    </div>;
}

export default App;