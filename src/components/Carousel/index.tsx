import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { WithClassname } from "@app/components/types";

interface ICarousel extends PropsWithChildren<{}> {
  classes?: {
    root?: string;
    slider?: string;
  };
}

function Carousel({ classes, children }: ICarousel) {
  return (
    <article className={twMerge("h-full w-full", classes?.root)}>
      <div className={twMerge("flex h-full overflow-auto", classes?.slider)}>
        {children}
      </div>
    </article>
  );
}

interface ICarouselSlide extends PropsWithChildren<WithClassname> {}

const Slide = ({ className, children }: ICarouselSlide) => {
  return (
    <section className={twMerge("h-full w-full flex-none", className)}>
      {children}
    </section>
  );
};

Carousel.Slide = Slide;

export default Carousel;
