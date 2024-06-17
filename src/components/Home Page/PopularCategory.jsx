import React from "react";
// import './style.css';
import styled from "styled-components";
import { WiTime4 } from "react-icons/wi";
import { IoHome } from "react-icons/io5";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { GoChevronRight } from "react-icons/go";




const PopularCategory = () => {
  const data = [
    {
      icon:<IoHome />,
      name:"Work from Home",
      number:"2,30,000"
    },
    {
      icon:<WiTime4 />,
      name:"Part Time",
      number:"3,50,000"
    },
    {
      icon:<FcBusinesswoman />,
      name:"Jobs for Womens",
      number:"4,70,000"
    },
    {
      icon:<FcBusinessman />,
      name:"Fresher Jobs",
      number:"6,50,000"
    },
  ]

  return (
    <Wrapper>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-800">What type of job do you want?</h1>
        </div>
        <div className="popular flex flex-wrap -m-4 ">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex items-center border-2 border-gray-300 px-2 py-3 rounded-lg">
              <h1 className="text-green-800 mx-2 text-2xl">
              <IoHome />
              </h1>
              <div className="ml-3 ">
                <h1 className="title-font text-lg font-medium text-slate-900">Work from Home</h1>
                <p className="flex items-center"><span className="text-sm">2,30,000+ Vacancies</span> <span><GoChevronRight /></span></p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex items-center border-2 border-gray-300 px-2 py-3 rounded-lg">
              <h1 className="text-orange-500 mx-2 text-2xl">
              <WiTime4 />
              </h1>
              <div className="ml-3 ">
                <h1 className="title-font text-lg font-medium text-slate-900">Part Time</h1>
                <p className="flex items-center"><span className="text-sm">3,50,000+ Vacancies</span> <span><GoChevronRight /></span></p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex items-center border-2 border-gray-300 px-2 py-3 rounded-lg">
              <h1 className="text-green-800 mx-2 text-2xl">
              <FcBusinesswoman />
              </h1>
              <div className="ml-3 ">
                <h1 className="title-font text-lg font-medium text-slate-900">Jobs for Womens</h1>
                <p className="flex items-center"><span className="text-sm">4,70,000+ Vacancies</span> <span><GoChevronRight /></span></p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex items-center border-2 border-gray-300 px-2 py-3 rounded-lg">
              <h1 className="text-green-800 mx-2 text-2xl">
              <FcBusinessman />
              </h1>
              <div className="ml-3 ">
                <h1 className="title-font text-lg font-medium text-slate-900">Fresher Jobs</h1>
                <p className="flex items-center"><span className="text-sm">6,50,000+ Vacancies</span> <span><GoChevronRight /></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Wrapper>



  )
}

const Wrapper = styled.div`
// @media (min-width:760px) {
//   .popular {
//     display:flex;
//     flex-direction:column;
//     justify-content-center
//     // display:none;
//   }
// }
`;

export default PopularCategory;
