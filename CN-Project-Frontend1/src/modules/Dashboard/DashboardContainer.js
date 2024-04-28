/*jslint es6 */

import React from "react";
import DashboardView from "./DashboardView";

const DashboardContainer = () => {
  const data = {
    userType: "professor",
    appointmentData: [
      {
        id: 1,
        reason: "Classes registration",
        time: "2024-04-30T11:00:00",
      },
      {
        id: 2,
        reason: "Doubt Clarification",
        time: "2024-04-30T11:00:00",
      },
      {
        id: 3,
        reason: "Need guidance on semester project",
        time: "2024-04-30T11:00:00",
      },
      {
        id: 4,
        reason: "Comprehensive exams",
        time: "2024-04-30T11:00:00",
      },
      {
        id: 5,
        reason: "Comprehensive exams",
        time: "2024-04-30T11:00:00",
      },
      {
        id: 6,
        reason: "Comprehensive exams",
        time: "2024-04-30T11:00:00",
      },
    ],
  };
  return <DashboardView data={data} />;
};

export default DashboardContainer;
