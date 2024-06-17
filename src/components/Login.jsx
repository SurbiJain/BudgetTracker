import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      
      if (values.email === "admin@gmail.com" && values.password === "12345678") {
        navigate("/home");
      } else {
        setError("true");
        setErrorMessage("Invalid Email or Password")
      }
      
    },
  });
  
  console.log("Login is rendered")
  return (
    <div className="container1 black align-center dv-col-center">
      <h1>Login into your account</h1>
      <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div >
          <input
            className="form-control mb-3"
            placeholder="example@gmail.com"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email  ? (
            <div>{formik.errors.email}</div>
          ) : null}
          
        </div>
        <div>
          <input
            className="form-control mb-3"
            placeholder="********"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary" >Login</button>
      </form>
      </div>
      {error ? errorMessage : null}
      <h6>Forgot Password?</h6>
    </div>
  );
};

export default Login;
