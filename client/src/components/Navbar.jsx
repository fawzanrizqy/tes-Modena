import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const avatar = localStorage.getItem("avatar");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex ms-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          <div className="d-flex justify-content-end me-3">
            <p style={{ marginTop: "0.3rem" }}>{email}</p>&nbsp;
            <a
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#logoutCollapse"
              aria-expanded="false"
            >
              <img
                src={
                  avatar
                    ? `${avatar}`
                    : "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                }
                alt="Profile Picture"
                className="rounded-circle me-2"
                width="32"
                height="32"
              />
            </a>
            <button
              className="btn btn-sm btn-secondary me-2"
              style={{ borderRadius: 60, height: 35, width: 35, padding: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-bell-fill "
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </button>
            <button
              className="btn btn-sm btn-secondary me-2"
              style={{ borderRadius: 60, height: 35, width: 35, padding: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-wallet-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
              </svg>
            </button>
            <div className="collapse" id="logoutCollapse">
              <ul className="list-group" style={{ cursor: "pointer" }}>
                <li className="list-group-item" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
