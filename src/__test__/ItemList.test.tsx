import React from "react";
import { render, screen } from "../test-utils";
import ItemList from "../components/ItemList";

describe("render ItemList", () => {
  test("when item no exist", () => {
    render(<ItemList />);

    expect(
      screen.getByText("조건에 맞는 견적요청이 없습니다.")
    ).toBeInTheDocument();
  });

  test("when item exist", async () => {
    render(<ItemList />);

    expect(await screen.findAllByRole("listitem")).toHaveLength(6);
  });
});
