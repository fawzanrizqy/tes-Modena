import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const UserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const input = {
    email: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
    mobile: useRef(),
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (location.pathname === "/register") {
      if (
        input.password.current.value !== input.confirmPassword.current.value
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Passwords do not match`,
        });
        return;
      }

      try {
        const name = input.email.current.value.split("@")[0];
        const { data } = await axios.post(`${baseUrl}/register`, {
          email: input.email.current.value,
          name,
          password: input.password.current.value,
          phone: input.mobile.current.value,
        });

        Swal.fire({
          width: 200,
          icon: "success",
          text: `Register Successfull`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/login");
      } catch (err) {
        console.log(err);
        const error = err.response.data.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      }
    } else {
      //login function
      try {
        const { data } = await axios.post(`${baseUrl}/login`, {
          email: input.email.current.value,
          password: input.password.current.value,
        });

        localStorage.setItem("access_token", data.token);
        localStorage.setItem("email", data.user.email);

        Swal.fire({
          width: 200,
          icon: "success",
          text: `Login Successfull`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      } catch (err) {
        console.log(err);
        const error = err.response.data.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      }
    }
  };

  return (
    <>
      <div className="card" style={{ border: 0 }}>
        <div className="card-body">
          <h4 className="card-title">
            {location.pathname === "/login" ? (
              <b>Login to your account</b>
            ) : (
              <p style={{ color: "green", fontWeight: "lighter" }}>User Info</p>
            )}
          </h4>

          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email account
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
                ref={input.email}
              />
            </div>

            {location.pathname === "/register" ? (
              <div className="mb-4">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  required
                  ref={input.mobile}
                />
              </div>
            ) : (
              <></>
            )}

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                ref={input.password}
              />
            </div>
            {location.pathname === "/register" ? (
              <div className="mb-4">
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  required
                  ref={input.confirmPassword}
                />
              </div>
            ) : (
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-success mb-3"
              style={{ width: "100%" }}
            >
              {location.pathname === "/login" ? <>Login</> : <>Continue</>}
            </button>
          </form>
          {location.pathname === "/login" ? (
            <></>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline-success "
              style={{ width: "100%" }}
            >
              Back
            </Link>
          )}
        </div>
        {location.pathname === "/login" ? (
          <span>
            Doesnt have an account?{" "}
            <Link to="/register" style={{ color: "green" }}>
              Get Started
            </Link>
          </span>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
