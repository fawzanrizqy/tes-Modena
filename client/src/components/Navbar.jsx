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
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
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
              <i className="bi bi-envelope-fill"></i>
            </a>
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
