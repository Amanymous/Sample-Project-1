import React from "react";
import { render } from "@testing-library/react";
import DisplayMessage from "./index";

test("testing div", () => {
  const { getByText } = render(
    <DisplayMessage />,
    document.getElementsByTagName("div")
  );
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
