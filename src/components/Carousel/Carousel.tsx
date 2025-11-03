import React from 'react';
import './carouselStyle.css';

export const Carousel = () => {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {/* Slide 1 */}
        <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            {/* z 1 do 2 (next) oraz z 1 do 2 (prev last -> 2) */}
            <a
              href="#carousel__slide2"
              className="carousel__prev"
              aria-label="Go to previous slide"
            >
              Go to previous slide
            </a>
            <a href="#carousel__slide2" className="carousel__next" aria-label="Go to next slide">
              Go to next slide
            </a>
          </div>
        </li>

        {/* Slide 2 */}
        <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            {/* z 2 do 1 (prev) i z 2 do 1 (next -> loop) */}
            <a
              href="#carousel__slide1"
              className="carousel__prev"
              aria-label="Go to previous slide"
            >
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next" aria-label="Go to next slide">
              Go to next slide
            </a>
          </div>
        </li>
      </ol>

      {/* Nawigacja dolna */}
      <aside className="carousel__navigation" aria-label="Carousel Navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide1"
              className="carousel__navigation-button"
              aria-label="Go to slide 1"
            >
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a
              href="#carousel__slide2"
              className="carousel__navigation-button"
              aria-label="Go to slide 2"
            >
              Go to slide 2
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
};
