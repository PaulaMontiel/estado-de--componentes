import React, {useState} from "react";
import Login from "./components/Login";

function App() {
  const [datos, setDatos] = useState({
    name: "",
    password: "",
  });
  return (
    <div className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Login datos={[datos, setDatos]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
