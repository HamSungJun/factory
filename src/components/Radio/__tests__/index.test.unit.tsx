import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

import * as stories from "@app/components/Radio/__tests__/index.stories";

const { Single, Disabled } = composeStories(stories);

describe("[Radio]", () => {
  describe("[Radio.Single]", () => {
    test("Single 라디오 버튼은 클릭 이벤트에 반응한다.", () => {
      const handleClick = jest.fn();
      render(<Single onClick={handleClick}>Radio</Single>);
      fireEvent.click(screen.getByTestId("Radio.label"));
      fireEvent.click(screen.getByTestId("Radio.outer"));
      fireEvent.click(screen.getByTestId("Radio.inner"));
      fireEvent.click(screen.getByText("Radio"));
      expect(handleClick).toHaveBeenCalledTimes(4);
    });
  });
  describe("[Radio.Disabled]", () => {
    test("Disabled 라디오 버튼은 클릭 이벤트에 반응하지 않는다.", () => {
      const handleClick = jest.fn();
      render(<Disabled onClick={handleClick}>Radio</Disabled>);
      fireEvent.click(screen.getByTestId("Radio.label"));
      fireEvent.click(screen.getByTestId("Radio.outer"));
      fireEvent.click(screen.getByTestId("Radio.inner"));
      fireEvent.click(screen.getByText("Radio"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
