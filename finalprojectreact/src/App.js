import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./routes/barger.css"
 function App() {
  return (
    <div>
      <h1>Food delivery مشروع</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/Home">Home</Link>|{" "}
        <Link to="/invoices">قائمة الطعام</Link> |{" "}
        <Link to="/expenses">الدخول</Link> |{" "}
        <Link to="/menu">Menu</Link> |{" "}
        <Link to="/payment"> payment</Link>|{" "}
        <Link to="/Login"> login</Link>|{" "}
        <Link to="/Order"> Order</Link>|{" "}
        <Link to="/driver"> driver</Link>|{" "}
        <Link to="/restauants">restauants</Link>
      </nav>
      <Outlet/>
    </div>
  );
}





export default App
