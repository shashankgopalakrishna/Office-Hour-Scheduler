import React, { useEffect } from "react";
import { AppointmentContent } from "./Student.styled";
import useAPI from "../../../hooks/useAPI";

const StudentAppointmentHistory = () => {
  const user_id = localStorage.getItem("userId");
  const [scheduledListData, scheduledList] = useAPI(
    "GET_STUDENT_SCHEDULE_LIST",
    {
      lazy: true,
    }
  );

  useEffect(() => {
    scheduledList({ user_id });
  }, []);

  const appointmentData = scheduledListData?.data?.studentItems;
  
  return (
    <div>
      {appointmentData?.map((appointment) => {
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

export default StudentAppointmentHistory;