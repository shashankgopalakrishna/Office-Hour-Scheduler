import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width:70%;
`


export const SelectStyle = styled.div`
  margin-bottom: 20px;

  select {
    min-width: 40%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    background-color: #f2f2f2;
  }
`;

export const TimeSlot = styled.div`
  background-color: #f2f2f2;
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  min-height: 30px;

  :hover {
    background-color: #a6192e;
    color: #ffffff;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

export const TimeSlotContainer = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }

  .time-slots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    display: block;
    width: 100px;
    height: 80px;
    background-color: #f2f2f2;
    border-radius: 10px;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: #a6192e;
    color: #fff;
  }
`;


export const TimeSlotSelectorHeader = styled.h2`
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const DatePickerContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;
export const TimeSlotButton = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${({ selected }) => (selected ? "#ac1330" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "inherit")};
  border: 1px solid #ac1330;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#ac1330" : "#fff")};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #f0f0f0; // Optional: dull the color to indicate it's disabled
    color: #666; // Optional: dull the text color too
  }
`;

export const StyledDate = styled.div`
  margin-bottom:19px;
`;

export const SelectView = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StudentDashboardWrapper = styled.div`
width:100%;
  display: flex;
  justify-content: space-between;
`;

export const AppointmentContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  background-color: #f2f2f2;
  padding: 20px 30px;
  border-bottom: solid 0.7px;
`;


