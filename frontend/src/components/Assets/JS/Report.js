import React from "react";
import { FaCalendarDay, FaCalendarWeek, FaCalendarAlt } from "react-icons/fa";
import "../CSS/Report.css"; 
import { useNavigate } from "react-router-dom";

const Report = () => {

  const navigate = useNavigate()

  const services = [
    {
      title: "Daily Service",
      count: 10,
      icon: <FaCalendarDay />,
      path:""
    },
    {
      title: "Weekly Service",
      count: 100,
      icon: <FaCalendarWeek />,
       path:""
    },
    {
      title: "Monthly Service",
      count: 100,
      icon: <FaCalendarAlt />,
       path:""
    },
  ];

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-content">
            <div>
              <h3>{service.title}</h3>
              <p>{service.count}</p>
            </div>
            <div className="icon-box">{service.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Report;
