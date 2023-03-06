import React from "react"
import logo from "../../assets/DispoLogo.png"
import MainContent from "../../components/Structured/Layouts/Content/MainContent"

export default function HomeCard() {
  return (
    <MainContent title="Dashboard">
      <img src={logo} alt="Dispo" width="350" height="350" style={{ marginLeft: "35%" }} />
    </MainContent>
  );
}