import Card from "../Components/Card";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { Cards, DashboardContainer } from "./styles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <div className="content">
        <Title />
        <Cards>
          <Card value={54654} />
          <Card value={654} typeIsHec />
        </Cards>
        <p>Dashboard</p>
      </div>
    </DashboardContainer>
  );
}
