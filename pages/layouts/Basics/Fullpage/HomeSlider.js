import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SectionsContainer } from "react-fullpage";

var options = {
  sectionClassName: "section",
  anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  sectionPaddingTop: "50px",
  sectionPaddingBottom: "50px",
  arrowNavigation: true,
  autoplay: true,
};

const HomeSlider = () => {
  const sliderData = [
    {
      class: "home25",
      title: { __html: "fresh coffee <br /> & cup " },
      desc:
        "  Lorem Ipsum is simply dummy text of the printing and       typesetting industry. Lorem Ipsum has been the       industry's standard dummy text ever since the 1500",
      btn: "view collection",
      classes: "text-left p-left",
    },
    {
      class: "home24",
      title: { __html: " fresh vegetable <br /> & fruit" },
      desc:
        "  Lorem Ipsum is simply dummy text of the printing and       typesetting industry. Lorem Ipsum has been the       industry's standard dummy text ever since the 1500",
      btn: "view collection",
      classes: "text-left p-left",
    },
    {
      class: "home23",
      title: { __html: "fresh strabery <br /> & ice-cream" },
      desc:
        "  Lorem Ipsum is simply dummy text of the printing and       typesetting industry. Lorem Ipsum has been the       industry's standard dummy text ever since the 1500",
      btn: "view collection",
      classes: "text-left p-left",
    },
    {
      class: "home26",
      title: { __html: "fresh fruit <br /> & juice" },
      desc:
        "  Lorem Ipsum is simply dummy text of the printing and       typesetting industry. Lorem Ipsum has been the       industry's standard dummy text ever since the 1500",
      btn: "view collection",
      classes: "text-left p-left",
    },
  ];

  const SliderComponent = ({ classes, title, desc, btn }) => {
    return (
      <div>
        <div className={`home text-left p-left ${classes}`}>
          <Container>
            <Row>
              <Col>
                <div className="slider-contain">
                  <div>
                    <h1>
                      <div dangerouslySetInnerHTML={title}></div>
                    </h1>
                    <p>{desc}</p>
                    <a href="#" className="btn btn-solid">
                      {btn}
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  return (
    <div className="home-slider fullpage full-slider">
      <SectionsContainer {...options}>
        {sliderData.map((data) => {
          return (
            <SliderComponent
              classes={data.class}
              title={data.title}
              desc={data.desc}
              btn={data.btn}
            />
          );
        })}
        {/* <div>
          <div className="home text-left p-left home25">
            <Container>
              <Row>
                <Col>
                  <div className="slider-contain">
                    <div>
                      <h1>
                        fresh coffee
                        <br />& cup
                      </h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                      <a href="#" className="btn btn-solid">
                        view collection
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div className="home text-left p-left home24">
            <Container>
              <Row>
                <Col>
                  <div className="slider-contain">
                    <div>
                      <h1>
                        fresh vegetable
                        <br />& fruit
                      </h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                      <a href="#" className="btn btn-solid">
                        view collection
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div className="home text-left p-left home23">
            <Container>
              <Row>
                <Col>
                  <div className="slider-contain">
                    <div>
                      <h1>
                        fresh strabery
                        <br />& ice-cream
                      </h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                      <a href="#" className="btn btn-solid">
                        view collection
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div className="home text-left p-left home26">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>
                        fresh fruit
                        <br />& juice
                      </h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500
                      </p>
                      <a href="#" className="btn btn-solid">
                        view collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </SectionsContainer>
    </div>
  );
};

export default HomeSlider;
