import React, { useEffect, useRef } from "react";



import Navbar from "../components/shared/Navbar";
import PopularCategory from "../components/Home Page/PopularCategory";
import HowWorks from "../components/Home Page/HowWorks";
import Team from "../components/Home Page/Team";
import Brands from "../components/Home Page/Brands";
import Testimonial from "../components/Home Page/Testimonial";


import { FloatButton } from 'antd';
import Accordation from "../components/Home Page/Accordation";
import Youtube from "../components/Home Page/Youtube";
import Hero from "../components/Home Page/Hero";


const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    // useEffect(() => {
    //     const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    //     heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    // }, []);




    return (
        <div>
            {/* <Navbar navbarRef={navbarRef} /> */}
            <Navbar />
            {/* <Wrapper ref={heroRef} > */}
          
            
            
            <div>
                <Hero/>
                <Brands />
                <Team />
                <Accordation />
                <PopularCategory />
                <HowWorks />
                <Youtube />
                <Testimonial />
                <FloatButton.BackTop style={{ border: '1px solid black' }} />
            </div>
            
        </div>
    );
};


export default Landing;
