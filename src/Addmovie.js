import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

export function Addmovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [description, setdescription] = useState("");
  const addmovie = () => {
    console.log({ name, poster, rating, description });
    const newMovie = { name, poster, rating, description };
    setMovies([...movies, newMovie]);
    setName("");
    setposter("");
    setrating("");
    setdescription("");
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="moviename"
        varient="outlined" />

      <TextField
        value={poster}
        onChange={(event) => setposter(event.target.value)}
        label="poster-url"
        varient="outlined" />
      <TextField
        value={rating}
        onChange={(event) => setrating(event.target.value)}
        label="rating"
        varient="outlined" />
      <TextField
        value={description}
        onChange={(event) => setdescription(event.target.value)}
        label="Description"
        varient="outlined" />
      <Button onClick={addmovie} variant="contained">
        Add Movie
      </Button>
    </div>

  );
}
