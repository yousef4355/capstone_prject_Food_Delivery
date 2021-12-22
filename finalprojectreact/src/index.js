// import React from "react";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Location from "./routes/location";
import Driver from "./routes/driver";
import Payment from "./routes/payment";
import Login from "./routes/Login";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="login" element={<Login />} />
        <Route path="invoices" element={<Invoices />}/> 
        <Route path="location" element={<Location />}/>
        <Route path="payment" element={<Payment />}/>
          <Route path="driver" element={<Driver/>}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
