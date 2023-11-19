import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { url } from "../../Utils/Constants";

                    // props given here 
const AddMovieFormik=()=>{

    const navigate=useNavigate()

    const formValidationSchema=yup.object({
        // we an modify according requirements from npm yup docs.
       name:yup.string().required("Fill the correct feiled?"),
       poster:yup.string().required("Fill the correct feiled?"),
       rating:yup.number().required("Fill the correct feiled?").min(1).max(10),
       summary:yup.string().required("Fill the correct feiled?")
      })

// Creating useFormik and onsubmit.
    const formik=useFormik({
          initialValues: {
            name:"",
            poster:"",
            rating:"",
            summary:""
          },
          validationSchema:formValidationSchema,
          // In this values we will get all deatils we typed to console.
          onSubmit:(values)=>{addToMovieList(values)}
        })
                    // we can pass parameter in any name..
    const addToMovieList=(values_movie)=>{
// object made to take current value to it
        //  const movie={poster,name,rating,summary}
        //  console.log(movie)
         //API Call
        fetch(url,{
            method:"POST",
            body:JSON.stringify(values_movie),
            headers:{"Content-Type":"application/json"}
            // here if dont make arrow function and just put navigate then page will not refresh...
        }).then(()=>navigate('/'))
        
    }    
    

    return(
        <form onSubmit={formik.handleSubmit} style={{marginBottom:"10px"}}>
            {/* poster */}
            <label>Poster:</label>
            <input type="text" value={formik.values.poster} name="poster" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.poster && formik.errors.poster? formik.errors.poster:""}<br/> 

            {/* MovieName */}
            <label>MovieName:</label>
            <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name? formik.errors.name:""}<br/> 

            {/* Rating */}
            <label>Rating:</label>
            <input type="text" value={formik.values.rating} name="rating" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.rating && formik.errors.rating? formik.errors.rating:""}<br/> 

            {/* Summary */}
            <label>Summary:</label>
            <input type="text" value={formik.values.summary} name="summary" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.summary && formik.errors.summary? formik.errors.summary:""}<br/>
            
            {/* <button onClick={()=>addToMovieList()}>Add Movie</button> */}
            <Button type="submit" variant="contained">Add Movie</Button>
            <Button onClick={()=>navigate('/')} variant="contained">Back</Button>


        </form>
    )
}
export default AddMovieFormik;