import React from "react";
import styled from "styled-components";
import one from '../../assets/media/brands/amazon.png';
import two from '../../assets/media/brands/asian.png';
import three from '../../assets/media/brands/birla.png';
import four from '../../assets/media/brands/flipkart.png';
import five from '../../assets/media/brands/loreal.png';
import six from '../../assets/media/brands/walmart.png';
import seven from '../../assets/media/brands/wipro.png';

export default function Brands() {
    return (
      // <div className="bg-white ">
      //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
      //     <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
      //       Trusted by the world’s most innovative teams
      //     </h2>
      //     <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      //       <img
      //         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      //         src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
      //         alt="Transistor"
      //         width={158}
      //         height={48}
      //       />
      //       <img
      //         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      //         src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
      //         alt="Reform"
      //         width={158}
      //         height={48}
      //       />
      //       <img
      //         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      //         src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
      //         alt="Tuple"
      //         width={158}
      //         height={48}
      //       />
      //       <img
      //         className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
      //         src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
      //         alt="SavvyCal"
      //         width={158}
      //         height={48}
      //       />
      //       <img
      //         className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
      //         src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
      //         alt="Statamic"
      //         width={158}
      //         height={48}
      //       />
      //     </div>
      //   </div>
      // </div>
      // <div>
      //   <h1>SIX</h1>
      // </div>
      <Wrapper className=" bg-[#EFF6F6]">
      <div className="slider ">
        <div className="slide-track ">
          <div className="slide">
            <img src={one} alt=""   />
          </div>
          <div className="slide">
            <img src={two} alt=""   />
          </div>
          <div className="slide">
            <img src={three} alt="" />
          </div>
          <div className="slide">
            <img src={four} alt="" />
          </div>
          <div className="slide">
            <img src={five} alt="" />
          </div>
          <div className="slide">
            <img src={six} alt=""  />
          </div>
          <div className="slide">
            <img src={seven} alt="" />
          </div>

          <div className="slide">
            <img src={one} alt=""   />
          </div>
          <div className="slide">
            <img src={two} alt=""   />
          </div>
          <div className="slide">
            <img src={three} alt="" />
          </div>
          <div className="slide">
            <img src={four} alt="" />
          </div>
          <div className="slide">
            <img src={five} alt="" />
          </div>
          <div className="slide">
            <img src={six} alt=""  />
          </div>
          <div className="slide">
            <img src={seven} alt="" />
          </div>

          <div className="slide">
            <img src={one} alt=""   />
          </div>
          <div className="slide">
            <img src={two} alt=""   />
          </div>
          <div className="slide">
            <img src={three} alt="" />
          </div>
          <div className="slide">
            <img src={four} alt="" />
          </div>
          <div className="slide">
            <img src={five} alt="" />
          </div>
          <div className="slide">
            <img src={six} alt=""  />
          </div>
          <div className="slide">
            <img src={seven} alt="" />
          </div>

          <div className="slide">
            <img src={one} alt=""   />
          </div>
          <div className="slide">
            <img src={two} alt=""   />
          </div>
          <div className="slide">
            <img src={three} alt="" />
          </div>
          <div className="slide">
            <img src={four} alt="" />
          </div>
          <div className="slide">
            <img src={five} alt="" />
          </div>
          <div className="slide">
            <img src={six} alt=""  />
          </div>
          <div className="slide">
            <img src={seven} alt="" />
          </div>

          
        </div>
      </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
  
    .slider {
    height: 10rem;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    overflow: hidden;
    // background-color:red;
    // box-shadow:2px 2px 10px grey;
    border-radius:10px
}
 .slide-track {
    display: flex;
    // width: calc(250px * 18);
    animation: scroll 80s linear infinite;
}
 .slide-track:hover {
    animation-play-state: paused;
}
    @keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px*9));
    }
}
.slide {
    // height: 13rem;
    width: 13rem;
    display: flex;
    align-items: center;
    // padding: 6px;
    perspective: 100px;
}
img {
    height:7rem;
    transition: transform 1%;
}

.slider::before,
.slider::after {
    height: 100%;
    position: absolute;
    width: 15px;
    z-index:2;
}
.slider::before {
    left: 0;
    top: 0;
}
.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

    
`;
  