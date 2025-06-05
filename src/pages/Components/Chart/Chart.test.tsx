import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest'; // Adicione 'beforeEach' aqui
import Chart from './index'; // Caminho para o seu componente Chart

// 1. Mocar o componente ReactApexChart
vi.mock('react-apexcharts', () => ({
  __esModule: true,
  default: vi.fn((props) => {
    return (
      <div data-testid="mock-chart" data-options={JSON.stringify(props.options)} data-series={JSON.stringify(props.series)}>
        Mocked Chart
      </div>
    );
  }),
}));

import ReactApexChart from 'react-apexcharts';

describe('Chart', () => {
  const mockOptions: ApexCharts.ApexOptions = {
    labels: ['Category A', 'Category B', 'Category C'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const mockSeries = [44, 55, 13];

  // Adicione este bloco para limpar os mocks antes de cada teste
  beforeEach(() => {
    vi.clearAllMocks(); // Limpa o histórico de chamadas de todos os mocks
    // Ou vi.restoreAllMocks(); se você quiser restaurar a implementação original do mock
  });

  it('should render the ChartContainer', () => {
    render(<Chart options={mockOptions} series={mockSeries} />);
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });

  it('should pass correct options and series to ReactApexChart', () => {
    render(<Chart options={mockOptions} series={mockSeries} />);

    // Verifica se o mock do ReactApexChart foi chamado APENAS 1 vez
    expect(ReactApexChart).toHaveBeenCalledTimes(1);

    const calledWithProps = (ReactApexChart as ReturnType<typeof vi.fn>).mock.calls[0][0];

    expect(calledWithProps.options).toEqual(mockOptions);
    expect(calledWithProps.series).toEqual(mockSeries);
    expect(calledWithProps.type).toBe('pie');
    expect(calledWithProps.width).toBe('100%');
  });

  it('should render "Mocked Chart" text from the mock component', () => {
    render(<Chart options={mockOptions} series={mockSeries} />);
    expect(screen.getByText('Mocked Chart')).toBeInTheDocument();
  });

  it('should have mock chart element with correct data attributes', () => {
    render(<Chart options={mockOptions} series={mockSeries} />);
    const mockChartElement = screen.getByTestId('mock-chart');

    expect(mockChartElement).toHaveAttribute('data-options', JSON.stringify(mockOptions));
    expect(mockChartElement).toHaveAttribute('data-series', JSON.stringify(mockSeries));
  });
});