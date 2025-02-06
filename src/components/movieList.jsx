
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";


export const MovieList = () => {

  const dispatch=useDispatch()
  const movies = useSelector((state) => state.movies||[]);
console.log("movie list",movies);

const handleRemove=(id)=>{
  dispatch(removeMovie(id))
}

  return (
    <div>
      {" "}
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          
          {movie.name}{" "} <button onClick={()=>handleRemove(movie.id)}>Delete</button>
         
        </div> 
      ))}
    </div>
  );
};