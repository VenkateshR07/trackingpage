import React, { useState } from "react";
import "../CSS/ServiceList.css";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
    const navigate = useNavigate()
  const [data, setData] = useState([
   
  ]);

  return (
    <div className="billing-container servicelist">
      <div className="header-buttons servicelist">
    
        <button className="btn btn-create servicelist" onClick={()=>{navigate("/service")}}>➕ Create</button>
      </div>
      <h2 className="title servicelist">Manage B2B Billing</h2>
      <div className="table-responsive servicelist">
        <table className="billing-table servicelist">
          <thead className="servicelist">
            <tr className="servicelist">
              <th className="servicelist">#</th>
              <th className="servicelist">Invoice no </th>
              <th className="servicelist">Name</th>
              <th className="servicelist">Item</th>
              <th className="servicelist">Total Amount</th>
              <th className="servicelist">Problem</th>
              <th className="servicelist">Action</th>
            </tr>
          </thead>
          <tbody className="servicelist">
            {data.map((row, index) => (
              <tr key={row.id} className="servicelist">
                <td className="servicelist">{index + 1}</td>
                <td className="servicelist">{row.invoice}</td>
                <td className="servicelist">{row.vendor}</td>
                <td className="servicelist">{row.balance}</td>
                <td className="servicelist">{row.amount}</td>
                <td className="servicelist">{row.date}</td>
                <td className="action-buttons servicelist">
                  <button className="btn btn-view servicelist">📄</button>
                  <button className="btn btn-edit servicelist">✏️</button>
                  <button className="btn btn-delete servicelist">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceList;
