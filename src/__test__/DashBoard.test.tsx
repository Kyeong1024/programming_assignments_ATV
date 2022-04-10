import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import DashBoard from "../components/DashBoard";

describe("render dashboard", () => {
  test("when click status on", async () => {
    render(<DashBoard />);

    expect(await screen.findAllByRole("listitem")).toHaveLength(6);

    const target = screen.getByTestId("status");
    fireEvent.click(target);

    expect(await screen.findAllByRole("listitem")).toHaveLength(1);
  });
});
