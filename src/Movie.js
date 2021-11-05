
import * as React from "react";

import { Movielist } from "./Movielist";


export function Movie({ movies}) {
    

  return (
    <section>
      <div className="Movie-list">
        {movies.map((movie,index) => (
          <Movielist
            key ={index}
            name={movie.name}
            pic={movie.pic}
            description={movie.description}
            Rating={movie.Rating}
            id ={index}
            />

        ))}
      </div>
    </section>
  );
}
