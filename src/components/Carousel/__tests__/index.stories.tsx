import { ComponentMeta, ComponentStory } from "@storybook/react";

import Carousel from "@app/components/Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const FRUIT_IMAGE_URLS = [
  "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__480.jpg",
  "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__480.jpg",
  "https://cdn.pixabay.com/photo/2016/07/04/07/18/currants-1496075__480.jpg",
  "https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814__480.jpg",
  "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__480.jpg",
];

export const ScrollX: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel classes={{ root: "w-[500px] h-[300px] mx-auto" }} {...args}>
      {FRUIT_IMAGE_URLS.map((imageUrl) => (
        <Carousel.Slide key={imageUrl}>
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="fruit-image"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export const ScrollY: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel
      classes={{
        root: "w-[500px] h-[300px] mx-auto",
        slider: "flex-col overflow-y-auto",
      }}
      {...args}
    >
      {FRUIT_IMAGE_URLS.map((imageUrl) => (
        <Carousel.Slide key={imageUrl}>
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="fruit-image"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export const WithScrollSnapX: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel
      classes={{
        root: "w-[500px] h-[300px] mx-auto",
        slider: "snap-x snap-mandatory overflow-x-auto",
      }}
      {...args}
    >
      {FRUIT_IMAGE_URLS.map((imageUrl) => (
        <Carousel.Slide key={imageUrl} className="snap-start">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="fruit-image"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export const WithScrollSnapY: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel
      classes={{
        root: "w-[500px] h-[300px] mx-auto",
        slider: "snap-y snap-mandatory overflow-y-auto flex-col",
      }}
      {...args}
    >
      {FRUIT_IMAGE_URLS.map((imageUrl) => (
        <Carousel.Slide key={imageUrl} className="snap-start">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt="fruit-image"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
