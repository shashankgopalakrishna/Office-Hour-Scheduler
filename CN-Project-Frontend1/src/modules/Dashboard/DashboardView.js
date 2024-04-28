import {
  StyledDashboardContainer,
  StyleHeading,
  DashboardContent,
} from "./Dashboard.styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Student from "./Student";
import Professor from "./Professor";

const DashboardView = ({ data }) => {
  //add more components, by creating it outside.

  if (data.userType === "professor") {
    return (
      <div>
        <Header />
        <StyledDashboardContainer>
          <StyleHeading>
            {data.userType === "student"
              ? "Welcome to Student Dashboard"
              : "Welcome to Professor Dashboard"}
          </StyleHeading>
          <DashboardContent>
            {data.userType === "student" ? (
              <Student data={data} />
            ) : (
              <Professor data={data} />
            )}
          </DashboardContent>
        </StyledDashboardContainer>
        <Footer />
      </div>
    );
  }
};

export default DashboardView;
