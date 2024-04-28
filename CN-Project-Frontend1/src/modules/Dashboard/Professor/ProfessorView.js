import React from "react";
import { Form, Button } from "../../../components";
// import { validateRequiredField } from "../../../utils/formValidations";
import { DatePicker as AntDatePicker } from "antd";
import { Controller } from "react-hook-form";
import {
  StyledInputWrapper,
  ErrorMessage,
  DatePickerContainer,
  TimeSlotButton,
//   SelectView,
  StyledDate,
  StudentDashboardWrapper,
} from "../Student/Student.styled";
// import Professor from ".";



const allTimeSlots = Array.from(
  { length: 24 },
  (_, index) => `${index < 10 ? "0" + index : index}:00`
);

const ProfessorView = ({
  onScheduleSubmit,
  control,
  register,
  errors,
  setSelectedTimeSlot,
  selectedTimeSlot,
  handleSlotSelection,
  timeSlotError,
  watch,
  data,
  showDate,
  ProfessorList,
  availableSlots,
}) => {
  const resultTimeSlots_stub = allTimeSlots.filter(
    (slot) => !availableSlots.includes(slot)
  );

  return (
    <StudentDashboardWrapper>
      <Form onSubmit={onScheduleSubmit}>
        <StyledInputWrapper>
          <DatePickerContainer>
            <Form.Label label="Select a Date" margin="0 0 10px 0" bold />
            <StyledDate>
              <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <AntDatePicker {...field} />}
              />
            </StyledDate>
            {errors.date && <ErrorMessage>Date is required</ErrorMessage>}
          </DatePickerContainer>
        </StyledInputWrapper>
        {showDate && (
          <StyledInputWrapper>
            <Form.Label
              label="Select your available time slot"
              margin="0 0 10px 0"
              bold
            />
            <StyledDate>
              {resultTimeSlots_stub.map((slot, index) => (
                <TimeSlotButton
                  key={index}
                  selected={selectedTimeSlot === slot}
                      onClick={() => handleSlotSelection(slot)}
                      type="button"
                >
                  {slot}
                </TimeSlotButton>
              ))}
            </StyledDate>
            {timeSlotError && <ErrorMessage>{timeSlotError}</ErrorMessage>}
          </StyledInputWrapper>
        )}
        <Button text="Release Slot" />
      </Form>
      {/* <Professor data={data} /> */}
    </StudentDashboardWrapper>
  );
};

export default ProfessorView;
