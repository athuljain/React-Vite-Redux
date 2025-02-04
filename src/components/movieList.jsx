
import { useSelector } from "react-redux";
// import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies||[]);
console.log("movie list",movies);

  return (
    <div>
      {" "}
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          
          {movie.name}{" "}
         
        </div>
      ))}
    </div>
  );
};