import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MovieCardMUI from "./MovieCardMUI";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/cartSlice";
import { url } from "../../Utils/Constants";


                                  // props taken here from app.js
const MovieSection=({cart,setCart})=>{
// created for edit button
const navigate=useNavigate()  
    //console.log(cart,setCart,movieList,setMovieList)
// here we created state variable and initialized constant.js file name...(Modified)
// here useState is given empty array because API has array data 
const [movieList,setMovieList]=useState([])

const dispatch=useDispatch()

// Here useeffect used to get api data.
useEffect(()=>{getMovies()},[])

  const getMovies=()=>{
  fetch(url)
    .then((data)=>data.json())
    // the seMovieList have the response of api
    .then((res)=> setMovieList(res))
  }
// Delete function to delete by onclick
                  // argument is given in map method (id=element.id)
const deleteMovie=(id)=>{
  fetch(`${url}/${id}`,{method:"DELETE"})
  // This is render in page (calling API) (without this it will be only deleted in API)
  .then(data=>getMovies())
}  

const handleAddItem=(element)=>{
  //Create dispatch an action(import useDispatch, and also declare on top)
          //addItem is the cartSlice element that we have to dispatch.
  dispatch(addItem(element))
}

    return(
      <> 
        
        <div className="movieSection">
            {
        
        // .map replaced with initialized stste variable in app.js
        movieList.map((element,index)=>(

          <MovieCardMUI {...element} cart={cart} setCart={setCart} key={index} id={element._id} 

          deleteButton={<IconButton aria-label="share" onClick={()=>deleteMovie(element._id)}>
          <DeleteForeverIcon color="error" sx={{m:0.5}}/>
          </IconButton>}

            // deleteButton={<button onClick={()=>deleteMovie(element.id)}>Delete</button>}


                                                              // index given to avoid error of (unique key for child)
          // <MovieCard {...element} cart={cart} setCart={setCart} key={index} id={element.id} 
          //   deleteButton={<button onClick={()=>deleteMovie(element.id)}>Delete</button>}   
                                                                            // index given to create unique id and taken as prop here(if data have no id)(Modified)
                                                                            // it is converted because our API have id
            // edit button created to pass as prop

            editButton={<IconButton aria-label="share" onClick={()=>navigate(`/edit/${element._id}`)}>
            <EditIcon color="secondary" sx={{m:0.5}}/>
            </IconButton>
            }
            // editButton={<button onClick={()=>navigate(`/edit/${element.id}`)}>Edit</button>} />
            
            AddItem={
              <button onClick={()=>handleAddItem(element)}>Add To Store</button>
            }
            />
          ))
      }
        </div>
      </>
    )
}
export default MovieSection;