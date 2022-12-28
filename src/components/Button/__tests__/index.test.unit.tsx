import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

import * as stories from "@app/components/Button/__tests__/index.stories";

const { Primary, Secondary, Warning, Danger, Rounded, Disabled } =
  composeStories(stories);

describe("[Button]", () => {
  describe("[Button.Primary]", () => {
    test("Primary 버튼은 푸른색 보더를 표시한다.", () => {
      render(<Primary />);
      expect(screen.getByText("Button")).toHaveClass("border-blue-400");
    });
    test("Primary 버튼은 푸른색 배경을 표시한다.", () => {
      render(<Primary />);
      expect(screen.getByText("Button")).toHaveClass("bg-blue-400");
    });
    test("Primary 버튼은 흰색 텍스트를 표시한다.", () => {
      render(<Primary />);
      expect(screen.getByText("Button")).toHaveClass("text-white");
    });
    test("Primary 버튼은 클릭 이벤트에 반응한다.", () => {
      const handleClick = jest.fn();
      render(<Primary onClick={handleClick} />);
      fireEvent.click(screen.getByText("Button"));
      fireEvent.click(screen.getByText("Button"));
      fireEvent.click(screen.getByText("Button"));
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });
  describe("[Button.Secondary]", () => {
    test("Secondary 버튼은 회색 보더를 표시한다.", () => {
      render(<Secondary />);
      expect(screen.getByText("Button")).toHaveClass("border-gray-400");
    });
    test("Secondary 버튼은 회색 배경을 표시한다.", () => {
      render(<Secondary />);
      expect(screen.getByText("Button")).toHaveClass("bg-gray-400");
    });
    test("Secondary 버튼은 흰색 텍스트를 표시한다.", () => {
      render(<Secondary />);
      expect(screen.getByText("Button")).toHaveClass("text-white");
    });
  });
  describe("[Button.Warning]", () => {
    test("Warning 버튼은 오렌지색 보더를 표시한다.", () => {
      render(<Warning />);
      expect(screen.getByText("Button")).toHaveClass("border-orange-400");
    });
    test("Warning 버튼은 오렌지색 배경을 표시한다.", () => {
      render(<Warning />);
      expect(screen.getByText("Button")).toHaveClass("bg-orange-400");
    });
    test("Warning 버튼은 흰색 텍스트를 표시한다.", () => {
      render(<Warning />);
      expect(screen.getByText("Button")).toHaveClass("text-white");
    });
  });
  describe("[Button.Danger]", () => {
    test("Danger 버튼은 붉은색 보더를 표시한다.", () => {
      render(<Danger />);
      expect(screen.getByText("Button")).toHaveClass("border-red-400");
    });
    test("Danger 버튼은 붉은색 배경을 표시한다.", () => {
      render(<Danger />);
      expect(screen.getByText("Button")).toHaveClass("bg-red-400");
    });
    test("Danger 버튼은 흰색 텍스트를 표시한다.", () => {
      render(<Danger />);
      expect(screen.getByText("Button")).toHaveClass("text-white");
    });
  });
  describe("[Button.Rounded]", () => {
    test("Rounded 버튼은 둥근 모서리를 가진다.", () => {
      render(<Rounded />);
      expect(screen.getByText("Button")).toHaveClass("rounded-[4px]");
    });
  });
  describe("[Button.Disabled]", () => {
    test("Disabled 버튼은 클릭 이벤트에 반응하지 않는다.", () => {
      const handleClick = jest.fn();
      render(<Disabled onClick={handleClick} />);
      fireEvent.click(screen.getByText("Button"));
      fireEvent.click(screen.getByText("Button"));
      fireEvent.click(screen.getByText("Button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
