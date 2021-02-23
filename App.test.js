import React from "react";
import { render } from "@testing-library/react";
import App from "./src/index";

test("renders learn react link", () => {
  const { getByHTML } = render(<App />);
  const divtag = wrapper.getByHTML(/h1/);
  expect(divtag).toBeInTheDocument();
});
