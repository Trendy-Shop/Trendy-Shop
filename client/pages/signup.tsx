import React from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';

function Signup() {
    const router = useRouter();
    interface FormData {
        name:string;
        email: string;
        password: string;
        confirm:string;
      } 
      const handleSubmit = async (values: FormData) => {
        try {
          // Make HTTP post request using Axios
          const response = await axios.post('http://localhost:5000/user/register', values);
    
          // Handle success or failure
          router.push('/login');
          alert(response.data.message)
        } 
        
        catch (error) {
          // Handle error
          console.log(error)
          
        }
      }; 
  return (
    <Formik
    initialValues={{ name:'',email: '', password: '',confirm:'' }}
  
    onSubmit={handleSubmit}
  >
    {(formikProps: FormikProps<FormData>) => (
      <Form>
         <Field name="name" type="name" placeholder="name" />
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="Password" />
        <Field name="confirm" type="confirm" placeholder="confirm" />

        <ErrorMessage name="password" />

        <button type="submit" disabled={!formikProps.isValid || formikProps.isSubmitting}>
          Sign up
        </button>
      </Form>
    )}
  </Formik>
  )
}

export default Signup
