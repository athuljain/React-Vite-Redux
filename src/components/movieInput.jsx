import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../movieSlice"

export const MovieInput = () => {
    const [newMovie,setNewMovie]=useState('')

    const dispatch=useDispatch()
    const handleAddMovie=()=>{
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie("")
        }
    }
    return(
        <div>
            <input value={newMovie} onChange={(e)=>setNewMovie(e.target.value)} type="text"  />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    )
}