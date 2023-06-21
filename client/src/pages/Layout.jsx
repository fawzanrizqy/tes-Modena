import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-2">
            <Sidebar />
          </div>
          <div className="col col-10">
            <div className="mb-3">
              <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
