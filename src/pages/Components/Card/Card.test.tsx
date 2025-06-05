import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import Card from ".";

describe("Card", () => {
  it('should render "Total de fazendas" and the correct value by default', () => {
    const testValue = 150;
    render(<Card value={testValue} />);

    expect(screen.getByText("Total de fazendas")).toBeInTheDocument();

    expect(screen.getByText(String(testValue))).toBeInTheDocument();

    expect(screen.getByText(String(testValue)).closest("div")).not.toHaveClass(
      "hec"
    );
  });

  it('should render "Total Hectares" and the correct value when typeIsHec is true', () => {
    const testValue = "123.45";
    render(<Card typeIsHec={true} value={testValue} />);

    expect(screen.getByText("Total Hectares")).toBeInTheDocument();

    expect(screen.getByText(testValue)).toBeInTheDocument();

    expect(screen.getByText(testValue).closest("div")).toHaveClass("hec");
  });

  it("should display numeric values correctly", () => {
    const numericValue = 1000;
    render(<Card value={numericValue} />);

    expect(screen.getByText("1000")).toBeInTheDocument();
  });

  it("should display string values correctly", () => {
    const stringValue = "2500 hectares";
    render(<Card value={stringValue} />);

    expect(screen.getByText("2500 hectares")).toBeInTheDocument();
  });
});
