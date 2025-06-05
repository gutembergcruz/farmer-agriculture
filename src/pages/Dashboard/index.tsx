import Card from "../Components/Card";
import Chart from "../Components/Chart";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { DashboardContainer, Flex } from "./styles";

export default function Dashboard() {

  const optionsStateChart: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["SP", "PR", "MT", "RJ", "SC"],
    legend: {
      position: "bottom",
    },
    colors: ["#9CCC65", "#A1887F", "#81C784", "#C5E1A5", "#D7CCC8"],
  };

  const seriesStateChart: number[] = [44, 55, 13, 32, 10];

  const optionsCultureChart: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Milho", "Café", "Cevada"],
    legend: {
      position: "bottom",
    },
    colors: ["#F9A825", "#6D4C41", "#D7A95F"],
  };

  const seriesCultureChart: number[] = [44, 55, 13];

  const optionsUseChart: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Agricultável", "Vegetação"],
    legend: {
      position: "bottom",
    },
    colors: ["#81C784", "#AED581"],
  };

  const seriesUseChart: number[] = [44, 55];




  return (
    <DashboardContainer>
      <Header />
      <div className="content">
        <Title title="Dashboard" />
        <Flex>
          <Card value={54654} />
          <Card value={654} typeIsHec />
        </Flex>
        <Flex>
          <Chart options={optionsStateChart} series={seriesStateChart} />
          <Chart options={optionsCultureChart} series={seriesCultureChart} />
          <Chart options={optionsUseChart} series={seriesUseChart} />
        </Flex>
      </div>
    </DashboardContainer>
  );
}
