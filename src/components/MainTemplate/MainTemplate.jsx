import React from "react";
import FooterPage from "../Footer/Footer";
import MainDashBoard from "../MainDashBoard";
import { useNavigate } from "react-router-dom";

function MainTemplate() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("access token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <MainDashBoard />
      <FooterPage />
    </>
  );
}

export default MainTemplate;
