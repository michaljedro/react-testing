// Counter.test.js - Testy jednostkowe dla komponentu Counter
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./components/Counter.js";

test("renders counter with initial value 0", () => {
  const handleTextMethod = render(<Counter />);
  const counterElement = getByText("Counter: 0");
  expect(counterElement).toBeInTheDocument();
});

test("increments counter when button is clicked", () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText("Increment");
  const counterElement = getByText("Counter: 0");

  fireEvent.click(incrementButton);

  expect(counterElement).toHaveTextContent("Counter: 1");
});
