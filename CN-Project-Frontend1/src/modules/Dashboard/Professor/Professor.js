import React from "react";
import { AppointmentContent } from "./Professor.styled";

const Professor = ({ data }) => {
  const appointmentData = data.appointmentData;
  return (
    <div>
      <h3>Appointments</h3>
      {appointmentData.map((appointment) => {
        return (
          <AppointmentContent key={appointment.id}>
            <p>{appointment.reason}</p>
            <p>{appointment.time}</p>
          </AppointmentContent>
        );
      })}
    </div>
  );
};

export default Professor;
