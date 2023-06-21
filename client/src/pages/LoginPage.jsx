import { useLocation } from "react-router-dom";
import { UserForm } from "../components/UserForm";

export const LoginPage = () => {
  const location = useLocation();

  return (
    <>
      <main className="container my-5">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              marginTop: location.pathname === "/login" ? "8rem" : "1rem",
            }}
          >
            {location.pathname === "/login" ? (
              <span>
                <h3>
                  {" "}
                  <img src="icon-b.png" style={{ height: 30 }} />
                  &nbsp;&nbsp;
                  <b style={{ paddingTop: 15 }}>B2B Portal</b>
                </h3>
              </span>
            ) : (
              <center>
                <h5>
                  <b>Registration</b>
                </h5>
              </center>
            )}

            <UserForm />
          </div>
          <div className="col-md-6 mx-auto">
            <img
              src="front-img.png"
              className="img-thumbnail mx-auto"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
    </>
  );
};
