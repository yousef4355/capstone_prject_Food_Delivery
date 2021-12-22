import React from "react";
import { Outlet, Link } from "react-router-dom";

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
        <Link to="/invoices">قائمة الطعام</Link> |{" "}
        <Link to="/expenses">الدخول</Link> |{" "}
        <Link to="/payment"> payment</Link>|{" "}
        <Link to="/Login"> login</Link>|{" "}
        <Link to="/driver"> driver</Link>
      </nav>
      <Outlet/>
    </div>
  );
}





export default App
