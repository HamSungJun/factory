/* eslint-disable @typescript-eslint/no-unused-vars */
import { composeStories } from "@storybook/testing-react";
import { fireEvent, render, screen } from "@testing-library/react";

import * as stories from "@app/components/Carousel/__tests__/index.stories";

const { ScrollX, ScrollY, WithScrollSnapX, WithScrollSnapY } =
  composeStories(stories);

describe("[Carousel]", () => {
  describe("[Carousel.ScrollX]", () => {
    test("", () => {
      expect(true).toEqual(true);
    });
  });
  describe("[Carousel.ScrollY]", () => {
    test("", () => {
      expect(true).toEqual(true);
    });
  });
});
