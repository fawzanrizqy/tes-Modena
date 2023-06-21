export const Sidebar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
          width: "250px",
          position: "fixed",
          top: 0,
          left: 0,
          paddingTop: "3.5rem",
        }}
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vendor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Customer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
