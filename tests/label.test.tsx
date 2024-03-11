import React from "react";
import { render, screen } from "@testing-library/react";

import { Label } from "../src/components/label";

describe("Label", () => {
  it("renders label component", () => {
    render(<Label text="first test" />);

    // const label = screen.getByText(/first/);
    const label = screen.getByRole("heading");
    expect(label).toBeInTheDocument();
  });
});
