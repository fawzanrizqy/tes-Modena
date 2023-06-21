export const Cards = ({ num, title }) => {
  return (
    <>
      <div className="col-sm-3 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <p style={{ fontWeight: "lighter", fontSize: 15 }}> {title}</p>
            </h5>
            {Math.ceil(Math.random() * 100) % 2 === 0 ? (
              <div className="row">
                <div className="col col-md-8">
                  <p className="card-text">
                    <b>{num.toLocaleString()}</b>
                  </p>
                  <p style={{ color: "green" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="green"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    <b> {Math.ceil(Math.random() * 100)} %</b>{" "}
                    <span style={{ color: "black", fontWeight: "lighter" }}>
                      Last Month
                    </span>
                  </p>
                </div>

                <div className="col col-md-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="green"
                    className="bi bi-graph-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col col-md-8">
                  <p className="card-text">
                    <b>{num.toLocaleString()}</b>
                  </p>
                  <p style={{ color: "red" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    <b> {Math.ceil(Math.random() * 100)} %</b>{" "}
                    <span style={{ color: "black", fontWeight: "lighter" }}>
                      Last Month
                    </span>
                  </p>
                </div>

                <div className="col col-md-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="red"
                    className="bi bi-graph-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
