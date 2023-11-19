import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const BasicForm = () => {
//Describing schema variable declared in useFormik.(If need we can destructure yup in import.)
  const formValidationSchema=yup.object({
    // we an modify according requirements from npm yup docs.
    email:yup.string().min(8,"Too Small").email(),
    password:yup.string().required().min(5)
  })

  // Creating formik hook
  const formik=useFormik({
  //It take the name of Input tag
    initialValues: {
      email:"anusha@123",
      password:"1234"
    },
// 
    validationSchema:formValidationSchema,
    // This event have data when we click submit
    onSubmit:(values)=>{}
  })



  return (
    // form tag will help for form to get submitted and get validated(But these are general html 
                              /// validation.so we use (useformik())hook for custom Validation.)
          // onsubmit event take data  when we click submit and (formik.handle) help to not display data on search bar 
                                           /// and this event should be disCribed in useFormik hook.
    <form onSubmit={formik.handleSubmit}>
                      {/* name= attribute is important to give and should be same to initialvalues */}
                                          {/* Value attribut help to get preFilled value in form */}
                                                                      {/* Onchange handler help edit the field otherwise it is able to readOnly and here we give formik to handle onchange(we dont need to handle) */}
      <input type='email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{/* If it is there(true) then show then used conditional rendering to show error accordingly */}
      {formik.touched.email && formik.errors.email? formik.errors.email:""}
                                                                                                                      {/* onblur event will display error message if we move away from tht field. */}
      <input type='password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      <button type='submit'>Submit</button>
      <br/>
{/* It is to see just real time change */}
      {JSON.stringify(formik.values)}<br/>
{/* Here onblur help to get touched value after moving away  */}
      {JSON.stringify(formik.touched)}

    </form>
  )
}

export default BasicForm