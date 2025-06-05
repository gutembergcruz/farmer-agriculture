import { ChartContainer } from "./styles";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    options: ApexCharts.ApexOptions;
    series: number[];
}

export default function Chart( { options, series }: ChartProps) {
  return (
    <ChartContainer>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width="100%"
      />
    </ChartContainer>
  );
}
