import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import { url } from "../../Utils/Constants";

               /// props taken here
const MovieInfo=()=>{
// useparams returned an object(id from url) and we destructure it
    const {id}=useParams()
                                // this bracket will take single object from movie list
    const[movie,setMovie]=useState({})
// it make API call
    useEffect(()=>getMovieById(),[])
    //Destructure constant.js file to prop(movieList) and id
    const {name,summary,trailer}=movie
    console.log(movie)

    // const getMovieById=()=>{
    //     fetch(`${url}/${id}`)
    // .then((data)=>data.json())
    // // the seMovieList have the response of api
    // .then((res)=> setMovie(res))
    // }

// Using Axios instead of fetch....
async function getMovieById() {
    try {
      const response = await axios.get(`${url}/${id}`);
    //   console.log(response);
    setMovie(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }


    //  navigate variable created to use in back button
    const navigate=useNavigate()
    return(
        <>
        <div>Movie Info-{id}</div>
            {/* here values destructured above are passed  */}
        <iframe width="90%" height="480" src={trailer} title={name} frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>{summary}</div>

        {/* created a back button to go to back page */}
        <button onClick={()=>{navigate(-1)}}>Back</button>
        </>
    )

}
export default MovieInfo; 