import { RouterProvider } from "react-router-dom";
import router from "./routers";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
