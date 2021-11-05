import { useState } from "react";
import * as React from "react";
import { Counter } from "./Counter";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useHistory } from "react-router";
import InfoIcon from '@mui/icons-material/Info';

export function Movielist({ name, pic, Rating, description , id}) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  // const styles = { display: show ? "block" : "none"};
  return (
    <div className="movie-container">
      <img className="movie-poster" src={pic} />
      <div className="movie-specs">
        <h2 className="movie-name"> {name}
        <IconButton
        
        onClick={() => history.push("/movie/" + id)}
        color = "primary"
        aria-label = "Movie Details">
          <InfoIcon/>
          

        </IconButton>
        <IconButton
        className = "movie-show-button"
        onClick={() => setShow(!show)}
        color = "primary"
        aria-label ={show ? "hide" : "Show"}>
          {show ? <ExpandLessIcon/>:<ExpandMoreIcon/>}

        </IconButton>
        </h2>
        <p className="movie-rating">{Rating}</p>
      </div>
      {show ? <p>{description}</p> : ""}
      <Counter />


    </div>
  );
}

