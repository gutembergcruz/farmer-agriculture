import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";

vi.mock("../../../assets/logo.png", () => ({
  default: "mock-logo.png",
}));

describe("Header", () => {
  it("should render the navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink).toHaveAttribute("href", "/");

    const farmerLink = screen.getByRole("link", { name: /produtores/i });
    expect(farmerLink).toBeInTheDocument();
    expect(farmerLink).toHaveAttribute("href", "/farmer");
  });

  it("should contain the HeaderContainer (assuming it is a structural element)", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toContainElement(
      screen.getByRole("link", { name: /dashboard/i })
    );
  });
});
