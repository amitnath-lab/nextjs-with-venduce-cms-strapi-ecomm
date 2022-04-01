import React from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home19",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
  {
    img: "home20",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "#",
  },
];

const HomeSlider = () => {
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider">
        {/* <div>
          <div className="home text-center home19">
            <Container>
              <Row>
                <Col>
                  <div className="slider-contain">
                    <div>
                      <h4>welcome to fashion</h4>
                      <h1>woman fashion</h1>
                      <a href="#" className="btn btn-solid">
                        shop now
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div className="home text-center home20">
            <Container>
              <Row>
                <Col>
                  <div className="slider-contain">
                    <div>
                      <h4>welcome to fashion</h4>
                      <h1>top collection</h1>
                      <a href="#" className="btn btn-solid">
                        shop now
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div> */}
        {Data.map((data) => {
          return (
            <MasterBanner
              img={data.img}
              link={data.link}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeSlider;
