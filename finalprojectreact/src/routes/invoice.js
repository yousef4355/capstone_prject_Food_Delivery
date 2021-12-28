import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>


      <form>
      <tr>
    <th>price</th>
    <th>name</th>
    <th>Country</th>
  </tr>
  <tr>
    <th>15</th>
    <th>happymeal</th>
    <th>Country</th>
  </tr>
        <table border="1">
          <td>pric</td>
          <td>2</td>
        </table>
      </form>


    </main>
   );
}