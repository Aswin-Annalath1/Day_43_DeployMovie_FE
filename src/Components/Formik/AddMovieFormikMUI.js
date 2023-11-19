import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import { url } from "../../Utils/Constants";

                    // props given here 
const AddMovieFormikMUI=()=>{

    const navigate=useNavigate()

    const formValidationSchema=yup.object({
        // we an modify according requirements from npm yup docs.
       name:yup.string().required("Fill the correct feiled?"),
       poster:yup.string().required("Fill the correct feiled?"),
       rating:yup.number().required("Fill the correct feiled?").min(1).max(10),
       summary:yup.string().required("Fill the correct feiled?"),
       trailer:yup.string().required("Fill the correct feiled?")
      })

// Creating useFormik and onsubmit.
    const formik=useFormik({
          initialValues: {
            name:"",
            poster:"",
            rating:"",
            summary:"",
            trailer:""
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

            <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
                sx={{width:"50%"}}
                id="poster"
                label="Poster"
                variant="standard"
                value={formik.values.poster} name="poster" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.poster && formik.errors.poster? formik.errors.poster:""}            </div>
            <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
                sx={{width:"50%"}}
                id="name"
                label="Name"
                variant="standard"
                value={formik.values.name} name="name" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name? formik.errors.name:""}
            </div>
            <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
                sx={{width:"50%"}}
                id="rating"
                label="Rating"
                variant="standard"
                value={formik.values.rating} name="rating" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.rating && formik.errors.rating? formik.errors.rating:""}
            </div>
            <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
                sx={{width:"50%"}}
                id="summary"
                label="Summay"
                variant="standard"
                value={formik.values.summary} name="summary" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.summary && formik.errors.summary? formik.errors.summary:""}
            </div>
            <div style={{margin:"0px 30px 0px 30px"}}>
            <TextField
                sx={{width:"50%"}}
                id="trailer"
                label="Trailer"
                variant="standard"
                value={formik.values.trailer} name="trailer" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer:""}
            </div>

            <div style={{margin:"5px 30px 0px 30px"}}> 
                <Button type="submit" variant="contained">Add Movie</Button>
                <Button onClick={()=>navigate('/')} variant="contained">Back</Button>
            </div>

        </form>
    )
}
export default AddMovieFormikMUI;