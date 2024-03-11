import React from "react";
import { render, screen } from "@testing-library/react";

import { AppButton } from "../src/components/appButton";

describe("AppButton", () => {
  it("Component renders button", () => {
    render(<AppButton handledFunction={() => {}} text="test button" />);
    screen.debug();

    const wrongButton = screen.queryByText(/button that doesnt exist/);
    const button = screen.queryByText(/button/);
    expect(wrongButton).toBeNull();
    expect(button).toBeInTheDocument();
  });
});
