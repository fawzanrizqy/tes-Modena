import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

export const DashboardPage = () => {
  const [dataDashboard, setDataDashboard] = useState([]);
  const dataBadge = [12, 6, 5, 4, 3, 2];

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("http://localhost:3000/dashboard", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      setDataDashboard(data.arrNumber);
      console.log(data);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="row ms-1 mb-3 me-1">
        <div className="card">
          <h5 className="card-header" style={{ backgroundColor: "white" }}>
            <div className="row">
              <div className="col col-md-10">
                <p>Dashboard </p>
                <p
                  style={{ color: "grey", fontSize: 15, fontWeight: "lighter" }}
                >
                  this company has a dashboard
                </p>
              </div>
              <div className="col col-md-2 mt-3">
                <button className="btn btn-sm btn-outline-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>
                  &nbsp; Export Data
                </button>
              </div>
            </div>
          </h5>

          <div className="card-body">
            <div className="row mb-4 ms-2">
              {dataBadge.map((item, index) => {
                return (
                  <button
                    className="btn btn-sm btn-outline-secondary col col-md-1 me-2"
                    key={index}
                  >
                    {item} Months
                  </button>
                );
              })}
            </div>
            <div className="row">
              {dataDashboard?.map((elem, index) => {
                return <Cards key={index} num={elem.num} title={elem.title} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row ms-1 me-1 mb-3">
        <div className="card card-body col col-md-5 me-2">
          <h5 className="card-header" style={{ backgroundColor: "white" }}>
            Aging - Account Receivable
          </h5>
          <img
            src="https://infogram.com/blog/wp-content/uploads/2015/10/preview-histogram1.jpg"
            alt="bar graph"
            className="img-fluid"
          />
        </div>
        <div className="card card-body col col-md-5 me-2">
          <h5 className="card-header" style={{ backgroundColor: "white" }}>
            Revenue
          </h5>
          <img
            src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
            alt="bar graph"
            className="img-fluid mt-5"
          />
        </div>
      </div>
    </>
  );
};
