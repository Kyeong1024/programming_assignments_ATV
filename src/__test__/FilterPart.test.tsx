import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import FilterPart from "../components/FilterPart";

describe("render filter part", () => {
  test("click filter element then created filtering reset button", () => {
    render(<FilterPart />);

    const target = screen.getByRole("button", { name: "재료" });
    fireEvent.click(target);

    const checkbox = screen.getByTestId("option0");
    fireEvent.click(checkbox);

    expect(screen.getByText("필터링 리셋")).toBeInTheDocument();
  });

  test("reset filter element", () => {
    render(<FilterPart />);

    const target = screen.getByRole("button", { name: "가공방식" });
    fireEvent.click(target);

    const checkbox = screen.getByTestId("option0");
    fireEvent.click(checkbox);

    const checkbox1 = screen.getByTestId("option1");
    fireEvent.click(checkbox1);

    const reset = screen.getByTestId("reset");
    fireEvent.click(reset);

    expect(checkbox).not.toBeChecked();
    expect(checkbox1).not.toBeChecked();
  });
});
