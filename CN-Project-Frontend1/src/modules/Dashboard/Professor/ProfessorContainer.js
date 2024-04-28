import React, { useEffect, useState } from "react";
import ProfessorView from "./ProfessorView";
import { useForm } from "react-hook-form";
import useAPI from "../../../hooks/useAPI";
import { helper } from "./helper";

const StudentContainer = ({ data }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const user_id = localStorage.getItem("userId");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlotError, setTimeSlotError] = useState("");

  const [ProfessorSchedule, getProfessorSchedule] = useAPI(
    "GET_PROFESSOR_SCHEDULE",
    {
      lazy: true,
    }
  );

  const [, ProfessorScheduleItem] = useAPI("POST_PROFESSOR_SCHEDULE_ITEM", {
    lazy: true,
  });

  useEffect(() => {
    getProfessorSchedule({ user_id });
  },[]);


  const professorItems = ProfessorSchedule?.data?.professorItems;
  const studentItems = ProfessorSchedule?.data?.studentItems;

  const showDate = watch("date");

  const availableSlots = showDate
    ? helper(professorItems, showDate?.toISOString())
    : [];

  const handleSlotSelection = (slot) => {
    setSelectedTimeSlot(slot);
    setTimeSlotError("");
  };

    const handleScheduleSuccess = (slot) => {
      //add alert
      // refresh();
      reset();
    };

    const handleScheduleSubmit = ( formData ) => {
   
      if (formData && selectedTimeSlot) {
        const newIsoDateTime = `${
          formData?.date?.toISOString().split("T")[0]
        }T${selectedTimeSlot}:00.000Z`;

        const payload = {
          item_name: "timebook",
          recurring: false,
          start_time: newIsoDateTime,
        };

        ProfessorScheduleItem({
          onSuccess: (res) => handleScheduleSuccess({ res, payload }),
          user_id,
          payload,
        });
      }
       
    // if (timeSlotError) {
    //   return; // Prevent form submission if there's an error message
    // }
    // const isoDate = formData.date.toISOString();
    // const payload = formData;
    // // createUser({
    // //   onSuccess: handleCreateUserSuccess,
    // //   payload,
    // // });

    // addStudentScheduleItem({
    //   onSuccess: handleScheduleSuccess,
    //   payload,
    // });
    // console.log(formData, isoDate);
    //api call
  };

  return (
    <ProfessorView
      onScheduleSubmit={handleSubmit(handleScheduleSubmit)}
      control={control}
      errors={errors}
      register={register}
      selectedTimeSlot={selectedTimeSlot}
      setSelectedTimeSlot={setSelectedTimeSlot}
      timeSlotError={timeSlotError}
      handleSlotSelection={handleSlotSelection}
      watch={watch}
      data={data}
      studentItems={studentItems}
      showDate={showDate}
      availableSlots={availableSlots}
    />
  );
};

export default StudentContainer;
