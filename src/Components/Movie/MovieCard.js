import { useState } from "react";
import SpecialButton from "./SpecialButton";
import { useNavigate } from "react-router-dom";

const MovieCard=({name,poster,rating,summary,id,deleteButton,editButton})=>{
    const [show,setShow]=useState(false)
    const [btnText,setBtnText]=useState("🔽")
// navigate hook created.
    const navigate=useNavigate()
    return(
        <>
            
                <div className="movieContainer">
                    <img className="moviePoster" src={poster}  alt="" />
                    <div className="movieSpecs">
                        <h4 style={{fontWeight:"700",fontSize:"large"}}>{name}
                            {/* <button style={{ backgroundColor: "rgb(53, 198, 246)"}} 
                                onClick={()=>{
                                setShow(!show)
                                btnText=="🔽"? setBtnText("🔼"):setBtnText("🔽")
                                }}>
                                    {btnText}</button> */}
                        </h4>

                        <h4 style={{color:rating>8? "green":"red"}}>⭐{rating}</h4>
                    </div> 
                    {show && <p className="movieSummary">{summary}</p>}
                    <div className="button">
                        <SpecialButton /> 
                    </div>
                    {/* this button give information of movie  */}
                    <span>{editButton}<button onClick={()=>navigate(`/movies/${id}`)}>Info</button></span>
                                                            {/* prop id taken to give unique dynamic path */}
                    <span></span>
                    <span>{deleteButton}</span>
                    <span></span>
                </div>
           
        </>
    )
}
export default MovieCard;