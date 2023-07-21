import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Validations = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().min(8).max(20).required("Password is Required"),
});

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const notify = () => toast.Showerror;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Validations,
      onSubmit: (value, action) => {
        const emailCheck = localStorage.getItem("value.email", value.email);
        const passwordCheck = localStorage.getItem(
          "value.password",
          value.password
        );

        const checkEmail = JSON.parse(emailCheck);
        const checkPassword = JSON.parse(passwordCheck);

        if (checkEmail === value.email && checkPassword === value.password) {
          navigate("/Home");
        } else {
          alert("You are not A Register Member");
        }
        action.resetForm();
      },
    });
  return (
    <>
      <>
        <section className="text-center text-lg-start">
          <div className="container py-4">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce-10.jpg?width=595&height=400&name=ecommerce-10.jpg"
                  className="w-100 rounded-4 shadow-4"
                  alt=""
                />
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div
                  className="card cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Login</h2>
                    <form onSubmit={handleSubmit}>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                      {errors.email && touched.email ? (
                        <p className="required">{errors.email}</p>
                      ) : (
                        ""
                      )}
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                      {errors.password && touched.password ? (
                        <p className="required">{errors.password}</p>
                      ) : (
                        ""
                      )}
                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <Link to="/forget">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example33"
                          >
                            Forgot password?
                          </label>
                        </Link>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        onClick={notify}
                      >
                        Sign in
                      </button>
                      {/* Register buttons */}
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          {/* Checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example31"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example31"
                            >
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <Link to="/register">Don't Have Account ?</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </>
    </>
  );
};

export default Login;
