import React, { useState, useEffect } from "react";
import "../CSS/Service.css";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, resetForm } from "../../Redux/Slice/ServiceSlice";
import axios from 'axios';

const Service = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.Service.formvalue);

  const [serviceData, setServiceData] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData, billNumber: formData.billNumber || `BILL-${Date.now()}`, datetime: { date: formattedDate, time: formattedTime } };
    setServiceData([...serviceData, newFormData]);
    axios.post("http://localhost:4002/ticketapi/postticket", newFormData)
      .then(() => console.log("Ticket submitted successfully"))
      .catch((error) => console.error("Failed to submit ticket:", error));
    dispatch(resetForm());
  };

  return (
    <div className="service-container">
      <div className="service-datetime">
        <span className="service-date">{formattedDate}</span>
        <span className="service-time">{formattedTime}</span>
      </div>
      <form className="service-form" onSubmit={handleSubmit}>
        <h2 className="service-heading">Service Receipt</h2>

        {/* Bill Number and Name */}
        <div className="input-row">
          <div className="service-input-group">
            <label className="service-label">Bill Number:</label>
            <input type="text" name="billNumber" className="service-input" value={formData.billNumber} onChange={handleChange} />
          </div>
          <div className="service-input-group">
            <label className="service-label">Name:</label>
            <input type="text" name="name" className="service-input" value={formData.name} onChange={handleChange} />
          </div>
        </div>

        {/* Cell Number and Alternate Number */}
        <div className="input-row">
          <div className="service-input-group">
            <label className="service-label">Cell number:</label>
            <input type="text" name="cellNumber" className="service-input" value={formData.cellNumber} onChange={handleChange} />
          </div>
          <div className="service-input-group">
            <label className="service-label">Alternate number:</label>
            <input type="text" name="alternateNumber" className="service-input" value={formData.alternateNumber} onChange={handleChange} />
          </div>
        </div>

        {/* Address and Warranty */}
        <div className="input-row">
          <div className="service-input-group">
            <label className="service-label">Address:</label>
            <input type="text" name="address" className="service-input" value={formData.address} onChange={handleChange} />
          </div>
          <div className="service-input-group">
            <label className="service-label">Warranty:</label>
            <select name="warranty" className="service-select" value={formData.warranty} onChange={handleChange}>
              <option value="">Select Warranty</option>
              <option value="guarantee">Guarantee</option>
              <option value="non-guarantee">Non-Guarantee</option>
            </select>
          </div>
        </div>

        {/* Problem and Item */}
        <div className="input-row">
          <div className="service-input-group">
            <label className="service-label">Problem:</label>
            <input type="text" name="problem" className="service-input" value={formData.problem} onChange={handleChange} />
          </div>
          <div className="service-input-group">
            <label className="service-label">Item:</label>
            <select name="item" className="service-select" value={formData.item} onChange={handleChange}>
              <option value="">Select Item</option>
              <option value="1 hi">1 hi</option>
              <option value="2 hello">2 hello</option>
            </select>
          </div>
        </div>

        {/* Status and Other Status */}
        <div className="input-row">
          <div className="service-input-group">
            <label className="service-label">Status:</label>
            <select name="status" className="service-select" value={formData.status} onChange={handleChange}>
              <option value="">Select Status</option>
              <option value="done">Open</option>
              <option value="work-in-progress">Close</option>
              <option value="beyond-repair">Beyond Repairable Condition</option>
              <option value="pending">Pending</option>
              <option value="other">Other</option>
            </select>
          </div>
          {formData.status === "other" && (
            <div className="service-input-group">
              <label className="service-label">Specify Other Status:</label>
              <input type="text" name="otherStatus" className="service-input" value={formData.otherStatus} onChange={handleChange} />
            </div>
          )}
        </div>

        <input type="submit" value="Submit" className="service-submit-btn" />
      </form>
    </div>
  );
};

export default Service;
