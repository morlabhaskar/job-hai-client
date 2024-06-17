import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from '../../assets/media/carousel/1.webp'
import two from '../../assets/media/carousel/2.webp'
import three from '../../assets/media/carousel/3.webp'
import four from '../../assets/media/carousel/4.webp'
import five from '../../assets/media/carousel/5.webp'
import styled from "styled-components";

export default function Team() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    // from npm multy-carousel
    <Wrapper>
    <div className=" main w-4/5 m-auto">
      <Carousel className="carousel mt-6" responsive={responsive} infinite={true} removeArrowOnDeviceType={["mobile"]} > 
        <div class="card h-70 mt-4 lg:w-1/2 items-center">
          <div class="content h-full px-3 overflow-hidden text-center relative items-center">
            <img src={one} alt="" className="h-full rounded-xl " />
          </div>
        </div>
        <div class="card h-70 mt-4 lg:w-1/2">
          <div class="content h-full  px-3 overflow-hidden text-center relative">
            <img src={two} alt="" className=" rounded-xl" />
          </div>
        </div>
        <div class="card h-70 mt-4 lg:w-1/2">
          <div class="content h-full  px-3 overflow-hidden text-center relative">
            <img src={three} alt="" className=" rounded-xl" />
          </div>
        </div>
        <div class="card h-70 mt-4 lg:w-1/2">
          <div class="content h-full  px-3 overflow-hidden text-center relative">
            <img src={four} alt="" className=" rounded-xl" />
          </div>
        </div>
        <div class="card h-70 mt-4 lg:w-1/2">
          <div class="content h-full  px-3 overflow-hidden text-center relative">
            <img src={five} alt="" className=" rounded-xl" />
          </div>
        </div>
      </Carousel>

    </div>
    </Wrapper>
  )
}
  const Wrapper = styled.div`
  .card {
    width: 100%;
    border: none;
}
.content {
    width: 100%;
}
  
  
  `;
