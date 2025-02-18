import React, { useState, useEffect } from "react";
import "../CSS/Service.css";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, resetForm } from "../../Redux/Slice/ServiceSlice";

const Service = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.Service.formvalue);

  const [serviceData, setServiceData] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());

  // Update date & time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format Date & Time
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  // Handle input changes and update Redux state
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = {
      ...formData,
      billNumber: formData.billNumber || `BILL-${Date.now()}`, // Generate bill number if not provided
      datetime: { date: formattedDate, time: formattedTime }, // Store datetime
    };

    setServiceData([...serviceData, newFormData]);

    // Reset Redux state after submission
    dispatch(resetForm());

    console.log("Submitted Data:", newFormData);
  };

  return (
    <div className="service-container">
      {/* Date & Time Display */}
      <div className="service-datetime">
        <span className="service-date">{formattedDate}</span>
        <span className="service-time">{formattedTime}</span>
      </div>

      <form className="service-form" onSubmit={handleSubmit}>
        <h2 className="service-heading">Service Receipt</h2>
       
        {/* Bill Number Field */}
        <label className="service-label">Bill Number:</label>
        <input type="text" name="billNumber" className="service-input" value={formData.billNumber} onChange={handleChange} />

        <label className="service-label">Name:</label>
        <input type="text" name="name" className="service-input" value={formData.name} onChange={handleChange} />

        <label className="service-label">Cell number:</label>
        <input type="text" name="cellNumber" className="service-input" value={formData.cellNumber} onChange={handleChange} />

        <label className="service-label">Alternate number:</label>
        <input type="text" name="alternateNumber" className="service-input" value={formData.alternateNumber} onChange={handleChange} />

        <label className="service-label">Address:</label>
        <input type="text" name="address" className="service-input" value={formData.address} onChange={handleChange} />

        <div className="service-radio-group">
          <input type="radio" name="guaranteeStatus" value="guarantee" className="service-radio" checked={formData.warranty === "guarantee"} onChange={handleChange} />
          <label className="service-radio-label">Guarantee</label>

          <input type="radio" name="warranty" value="non-guarantee" className="service-radio" checked={formData.warranty === "non-guarantee"} onChange={handleChange} />
          <label className="service-radio-label">Non-Guarantee</label>
        </div>

        <label className="service-label">Problem:</label>
        <input type="text" name="problem" className="service-input" value={formData.problem} onChange={handleChange} />

        <label className="service-label">Item:</label>
        <select name="item" className="service-select" value={formData.item} onChange={handleChange}>
          <option value="">Select Item</option>
          <option value="1 hi">1 hi</option>
          <option value="2 hello">2 hello</option>
        </select>

        <label className="service-label">Status:</label>
        <select name="status" className="service-select" value={formData.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="done">Done</option>
          <option value="work-in-progress">Work in Progress</option>
          <option value="beyond-repair">Beyond Repairable Condition</option>
          <option value="pending">Pending</option>
          <option value="other">Other</option>
        </select>

        {formData.status === "other" && (
          <>
            <label className="service-label">Specify Other Status:</label>
            <input type="text" name="otherStatus" className="service-input" value={formData.otherStatus} onChange={handleChange} />
          </>
        )}

        <input type="submit" value="Submit" className="service-submit-btn" />
      </form>
    </div>
  );
};

export default Service;
