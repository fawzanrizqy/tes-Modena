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
              <div className="input-group">
                <span class="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                  ref={input.email}
                />
              </div>
            </div>

            {location.pathname === "/register" ? (
              <div className="mb-4">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <div className="input-group">
                  <span class="input-group-text">+62</span>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    required
                    ref={input.mobile}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <span class="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-key"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"></path>
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  ref={input.password}
                />
              </div>
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
