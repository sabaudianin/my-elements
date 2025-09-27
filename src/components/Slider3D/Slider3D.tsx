import './Slider3DStyle.css';

export const Slider3D = () => {
  return (
    <section className="container">
      <article className="slider-container">
        <div className="slider">
          <div className="slide">
            <img src="./tech1.jpg"></img>
          </div>
          <div className="slide">
            <img src="./tech2.jpg"></img>
          </div>
          <div className="slide">
            <img src="./tech3.jpg"></img>
          </div>
          <div className="slide">
            <img src="./tech4.jpg"></img>
          </div>
        </div>
      </article>
    </section>
  );
};
