import React from 'react';
import './carouselStyle.css';

export const Carousel = () => {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {/* Slide 1 */}
        <li id="slide1" className="carousel__slide" tabIndex={0}>
          <a href="#slide2" className="carousel__prev" aria-label="Go to previous slide" />
          <a href="#slide2" className="carousel__next" aria-label="Go to next slide" />
        </li>

        {/* Slide 2 */}
        <li id="slide2" className="carousel__slide" tabIndex={0}>
          <a href="#slide1" className="carousel__prev" aria-label="Go to previous slide" />
          <a href="#slide1" className="carousel__next" aria-label="Go to next slide" />
        </li>
      </ol>

      {/* Kropki nawigacji */}
      <nav className="carousel__navigation" aria-label="Carousel Navigation">
        <ol className="carousel__navigation-list">
          <li>
            <a href="#slide1" className="carousel__navigation-button" aria-label="Go to slide 1" />
          </li>
          <li>
            <a href="#slide2" className="carousel__navigation-button" aria-label="Go to slide 2" />
          </li>
        </ol>
      </nav>
    </section>
  );
};
