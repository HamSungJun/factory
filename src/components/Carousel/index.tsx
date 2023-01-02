import { PropsWithChildren } from "react";

import "@app/components/Carousel/index.css";

function Carousel({ children }: PropsWithChildren<{}>) {
  return (
    <article className="carousel">
      <div className="carousel__slides">{children}</div>
    </article>
  );
}

const Slide = ({ children }: PropsWithChildren<{}>) => {
  return <section className="carousel__slide">{children}</section>;
};

Carousel.Slide = Slide;

export default Carousel;
