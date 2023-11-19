import { useEffect, useState } from "react";
import MovieSection from "./MovieSection";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { url } from "../../Utils/Constants";

                    // props given here 
const AddMovie=()=>{

    const [poster,setPoster]=useState("")
    const [name,setName]=useState("")
    const [rating,setRating]=useState("")
    const [summary,setSummary]=useState("")

    const navigate=useNavigate()

    const addToMovieList=()=>{
         // object made to take current value to it
         const movie={poster,name,rating,summary}
         console.log(movie)
         //API Call
        fetch(url,{
            method:"POST",
            body:JSON.stringify(movie),
            headers:{"Content-Type":"application/json"}
            // here if dont make arrow function and just put navigate then page will not refresh...
        }).then(()=>navigate('/'))
        
    }    
    

    return(
        <div style={{marginBottom:"10px"}}>
            {/* poster */}
            <label>Poster:</label>
            <input type="text" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/><br/> 
            {/* MovieName */}
            <label>MovieName:</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/> 
            {/* Rating */}
            <label>Rating:</label>
            <input type="text" value={rating} onChange={(e)=>{setRating(e.target.value)}}/><br/> 
            {/* Summary */}
            <label>Summary:</label>
            <input type="text" value={summary} onChange={(e)=>{setSummary(e.target.value)}}/>
            <br/>
            <button onClick={()=>addToMovieList()}>Add Movie</button>
            <Button variant="contained">Add Movie</Button>

        </div>
    )
}
export default AddMovie;