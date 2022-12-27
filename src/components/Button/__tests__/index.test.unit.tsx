import Button from "@app/components/Button";
import { render, screen } from "@testing-library/react";

describe("[Button]", () => {
  beforeEach(() => {
    render(<Button />);
  });
  test("example", () => {
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });
});
