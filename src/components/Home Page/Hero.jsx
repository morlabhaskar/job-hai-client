import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
// import head from "../assets/media/head.png"
import head from "../../assets/media/head.png"
// import photo from "../assets/media/LandingPage/hero.png";
import photo from "../../assets/media/LandingPage/hero.png";

const Hero = () => {
  return (
    <Wrapper>
        <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col-reverse items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 mt-3">
                        {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br class="hidden lg:inline-block"/>readymade gluten
                        </h1> */}
                        <h1 className="text-4xl font-medium text-slate-800 mb-3">
                            <img className="h-12" src={head} alt="job viva photo" />
                            Get Your <span className="fancy text-blue-800">Dream Job </span> <br />
                            Today!
                        </h1>
                        <p className="mb-4">
                            Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.
                        </p>
                        <div className="flex ">
                        <Link to="/all-jobs">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply</button>
                            </Link>
                        </div>
                    </div>
                    <div className="right lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </section>

    </Wrapper>
  )
}
const Wrapper = styled.div`
.right {
  position: relative;
  animation-name: example;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
  @keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:13px; top:0px;}
  50%  {left:13px; top:13px;}
  75%  {left:0px; top:13px;}
  100% {left:0px; top:0px;}
}

`;

export default Hero