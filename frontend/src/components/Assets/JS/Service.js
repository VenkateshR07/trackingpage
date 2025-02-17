import React, { useState, useEffect } from "react";
import "../CSS/Service.css";

const Service = () => {
    const [formData, setFormData] = useState({
        name: "",
        cellNumber: "",
        alternateNumber: "",
        address: "",
        warranty: "",
        problem: "",
        item: "",
        status: "",
        otherStatus: "",
        datetime: { date: "", time: "" }, // Initialize datetime object
    });

    const [serviceData, setServiceData] = useState([]);
    const [dateTime, setDateTime] = useState(new Date()); // State for date & time

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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Adding date and time to the formData as datetime object
        const newFormData = { 
            ...formData,
            datetime: { date: formattedDate, time: formattedTime }, // Store datetime
        };

        // Update serviceData with the new form data
        setServiceData([...serviceData, newFormData]);

        // Reset the form data
        setFormData({
            name: "",
            cellNumber: "",
            alternateNumber: "",
            address: "",
            warranty: "",
            problem: "",
            item: "",
            status: "",
            otherStatus: "",
            datetime: { date: "", time: "" }, // Reset datetime object
        });

        console.log("Submitted Data:", newFormData);
    };

    return (
        <div className="service-container">
            {/* Date & Time on Top-Right */}
            <div className="service-datetime">
                <span className="service-date">{formattedDate}</span>
                <span className="service-time">{formattedTime}</span>
            </div>

            <form className="service-form" onSubmit={handleSubmit}>
                <h2 className="service-heading">Service Bill</h2>

                <label className="service-label">Name:</label>
                <input type="text" name="name" className="service-input" value={formData.name} onChange={handleChange} />

                <label className="service-label">Cell number:</label>
                <input type="text" name="cellNumber" className="service-input" value={formData.cellNumber} onChange={handleChange} />

                <label className="service-label">Alternate number:</label>
                <input type="text" name="alternateNumber" className="service-input" value={formData.alternateNumber} onChange={handleChange} />

                <label className="service-label">Address:</label>
                <input type="text" name="address" className="service-input" value={formData.address} onChange={handleChange} />

                <div className="service-radio-group">
                    <input type="radio" name="warranty" value="guarantee" className="service-radio" checked={formData.warranty === "guarantee"} onChange={handleChange} />
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

            {/* Display service data */}
            <div className="service-data-container">
                <h3>Service Data</h3>
                <ul>
                    {serviceData.map((data, index) => (
                        <li key={index}>
                            <p><strong>Name:</strong> {data.name}</p>
                            <p><strong>Cell Number:</strong> {data.cellNumber}</p>
                            <p><strong>Alternate Number:</strong> {data.alternateNumber}</p>
                            <p><strong>Address:</strong> {data.address}</p>
                            <p><strong>Warranty:</strong> {data.warranty}</p>
                            <p><strong>Problem:</strong> {data.problem}</p>
                            <p><strong>Item:</strong> {data.item}</p>
                            <p><strong>Status:</strong> {data.status}</p>
                            {data.status === "other" && <p><strong>Other Status:</strong> {data.otherStatus}</p>}
                            <p><strong>Date:</strong> {data.datetime.date}</p>
                            <p><strong>Time:</strong> {data.datetime.time}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Service;
