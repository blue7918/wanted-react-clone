import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Next = (props) => {
  const { topNextArrow, style, onClick } = props;
  return (
    <button type="button" className="topNextArrow topArrow" onClick={onClick}>
      <span className="SvgIconRoot">
        <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </span>
    </button>
  );
};

const Prev = (props) => {
  const { topPrevArrow, style, onClick } = props;
  return (
    <button type="button" className="topPrevArrow topArrow" onClick={onClick}>
      <span className="SvgIconRoot">
        <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </span>
    </button>
  );
};

function SlidePicture() {
  var settings = {
    dots: false, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 20, // 넘어가는 속도는 몇으로 할 것인지
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '300px',
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  const Wrapper = styled.div`
    width: 98.8vw;
    overflow: hidden;
  `;

  const Container = styled.div`
    /* margin-left : calc((100vw - 1060px)/2);
  margin-right : calc((100vw - 1060px)/2); */
    margin-top: 80px;
    width: 100vw;
    overflow: hidden;
    position: relative;
  `;
  const StyledSlider = styled(Slider)`
    .slick-dots {
      bottom: -50px;
      margin-top: 200px;
    }
    .slick-slide div {
      outline: none;
    }
    width: 100vw;
    overflow: hidden;
  `;

  const ImageContainer = styled.div`
    /* margin-left : calc(((100vw - 1060px)/2) - 6px);
  margin-right : calc((100vw - 1060px)/2); */
    width: 1060px;
  `;

  const Image = styled.img`
    width: 1060px;
    height: 300px;
    border-radius: 4px;
  `;

  return (
    <Wrapper>
      <Container>
        <StyledSlider {...settings}>
          <div>
            <ImageContainer>
              <Image src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1852%2F41073f1a.jpg&w=1060&q=100" />
            </ImageContainer>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1881%2Ffdf55e70.jpg&w=1060&q=100" />
            </ImageContainer>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1879%2F5f9da64a.jpg&w=1060&q=100" />
            </ImageContainer>
          </div>
          <div>
            <ImageContainer>
              <Image src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1883%2F525a8714.jpg&w=1060&q=100" />
            </ImageContainer>
          </div>
        </StyledSlider>
      </Container>
    </Wrapper>
  );
}
export default SlidePicture;
