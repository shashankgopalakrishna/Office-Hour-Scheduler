import React from "react";
import { Form, Button } from "../../../components";
import { validateRequiredField } from "../../../utils/formValidations";
import { DatePicker as AntDatePicker } from "antd";
import { Controller } from "react-hook-form";
import {
  StyledInputWrapper,
  ErrorMessage,
  DatePickerContainer,
  TimeSlotButton,
  SelectView,
  StyledDate,
  StudentDashboardWrapper,
} from "./Student.styled";
import StudentAppointmentHistory from "./StudentAppointmentHistory";


const DEPARTMENT_STUB = [
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Engineering",
    label: "Engineering",
  },
];


const availableTimeSlots_stub = ["9:00 AM", "10:00 AM", "11:00 AM"];

const StudentView = ({
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
  ProfessorList
}) => {
  const watchShowAge = watch("date");

  return (
    <StudentDashboardWrapper>
      <Form onSubmit={onScheduleSubmit}>
        <SelectView>
          <StyledInputWrapper>
            <Form.Label
              label="Select Professor Name"
              margin="0 0 10px 0"
              bold
            />
            <Form.Select
              showSearch
              optionFilterProp="children"
              control={control}
              name="ProfessorName"
              placeholder="Select language"
              size="large"
              options={ProfessorList}
              errors={errors}
              rules={{
                validate: { required: validateRequiredField("Professor Name") },
              }}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <Form.Label
              label="Select Your Department"
              margin="0 0 10px 0"
              bold
            />
            <Form.Select
              showSearch
              optionFilterProp="children"
              control={control}
              name="Department"
              placeholder="Select Department"
              size="large"
              options={DEPARTMENT_STUB}
              errors={errors}
              rules={{
                validate: { required: validateRequiredField("Department") },
              }}
            />
          </StyledInputWrapper>
        </SelectView>
        <StyledInputWrapper>
          <Form.Label label="Enter subject/reason:" margin="0 0 10px 0" bold />
          <Form.Input
            control={control}
            errors={errors}
            name="description"
            type="Input"
            placeholder="Enter Meeting Description"
            size="medium"
            rules={{
              validate: {
                required: validateRequiredField("Description"),
              },
            }}
          />
        </StyledInputWrapper>
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
        <StyledInputWrapper>
          <Form.Label
            label="Select your preferred time slot"
            margin="0 0 10px 0"
            bold
          />
          <StyledDate>
            {availableTimeSlots_stub.map((slot, index) => (
              <TimeSlotButton
                key={index}
                selected={selectedTimeSlot === slot}
                onClick={() => handleSlotSelection(slot)}
                disabled={watchShowAge ? false : true}
              >
                {slot}
              </TimeSlotButton>
            ))}
          </StyledDate>
          {timeSlotError && <ErrorMessage>{timeSlotError}</ErrorMessage>}
        </StyledInputWrapper>
        <Button text="Schedule Appointment" />
      </Form>
      <StudentAppointmentHistory data={data} />
    </StudentDashboardWrapper>
  );
};

export default StudentView;
