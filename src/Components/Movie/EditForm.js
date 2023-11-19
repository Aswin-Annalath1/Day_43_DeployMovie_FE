import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { url } from '../../Utils/Constants'

const EditForm = () => {
    // to get id from url
    const {id}=useParams()


                                // here we have to get only id related movie
    const[movie,setMovie]=useState(null)
    useEffect(()=>getMovieById(),[])

    const getMovieById=()=>{
        fetch(`${url}/${id}`)
        .then(data=>data.json())
        .then(res=>setMovie(res))
    }




  return (
    <div>
        {
            // conditional render used  and here movie is passed as props
            movie ? <EditMovieForm movie={movie} />:<h1>Loading...</h1>
        }

    </div>
  )
}

export default EditForm;


const EditMovieForm=({movie})=>{
    const navigate=useNavigate()
                                    // If movie got then render or not print error.. 
    const [poster,setPoster]=useState(movie?.poster)
    const [name,setName]=useState(movie?.name)
    const [rating,setRating]=useState(movie?.rating)
    const [summary,setSummary]=useState(movie?.summary)

    // function to call api and edit and display
    const updateMovie=(id)=>{
        

        // we have create details that to be stringify..
        const movie={name,poster,summary,rating}
        fetch(`${url}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(movie),
            headers:{"Content-Type":"application/json"}
            // here if dont make arrow function and just put navigate then page will not refresh...
        }).then(()=>navigate('/'))
    }

        return(
            <div>
                    <>
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
                                                 {/* id passed as argument */}
                    <button onClick={()=>updateMovie(movie._id)}>Update Movie</button>
                    </>
            </div>
        )
}
