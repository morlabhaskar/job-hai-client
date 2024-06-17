import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";
import DashboardNavLinks from "./DashboardNavLinks";
import { useDashboardContext } from "../../Layout/DashboardLayout";
import { useUserContext } from "../../context/UserContext";
import Collapse from "./Collapse";


const LargeSidebar = () => {
    const { user } = useUserContext();
    const { showSidebar } = useDashboardContext();


    return (
        <Wrapper className="bg-[#EFF1F8] pt-3 side ">
            {/* <div
                className={
                    !showSidebar
                        ? "sidebar-container show-sidebar"
                        : "sidebar-container"
                }
            >
                <div className="profile">
                    <BiUserCircle className="text-5xl font-normal" />
                    <h6 className="text-sm font-semibold capitalize mt-1">
                        {user?.username}
                    </h6>
                    <p className="text-xs capitalize -mt-1 font-medium">
                        {user?.role}
                    </p>
                </div>
                <div className="content">
                    <DashboardNavLinks />
                </div>
            </div> */}




            <div className="profile px-2 ">
                <BiUserCircle className="text-5xl text-indigo-300 font-normal" />
                <h6 className="text-sm font-semibold text-purple-800 capitalize mt-1">
                    {user?.username}
                </h6>
                <p className="text-xs capitalize -mt-1 text-[#F4813C] font-medium">
                    {user?.role}
                </p>
            </div>
            {/* <div className={ !showSidebar ? "sidebar-container show-sidebar" : "sidebar-container" }>
                    <DashboardNavLinks />
                </div> */}
            {/* <div id="linkks" className={!showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}> */}
            <div id="linkks" className={!showSidebar ? "hide" : "show"}>
                {showSidebar ? <Collapse /> : <DashboardNavLinks />}

            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    display: none;

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 992px) {
        display: block;
        box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
        // .sidebar-container {
        //     background: var(--background-secondary-color);
        //     min-height: 100vh;
        //     height: 100%;
        //     width: 250px;
        //     margin-left: -250px;
        //     transition: margin-left 0.3s ease-in-out;
        //     padding: 1rem 10px;
        // }
        // .content {
        //     position: sticky;
        //     top: 0;
        // }
        // .show-sidebar {
        //     margin-left: 0;
        // }


        .sidebar-container {
            background: var(--background-secondary-color);
            min-height: 100vh;
            height: 100%;
            width: 250px;
            margin-left: -250px;
            transition: margin-left 0.3s ease-in-out;
            padding: 1rem 10px;
        }
        .content {
            position: sticky;
            top: 0;
        }
        .show-sidebar {
            margin-left: 0;
        }


            #linkks {
              display: flex;
        flex-direction: column;
        align-items: center;
        padding:10px;
            }
            .side {
              display: flex;
        align-items: center;
        background-color:red;
            }


        /* header {
            height: 6rem;
            display: flex;
            align-items: center;
            padding-left: 2.5rem;
        } */
        .nav-links {
            padding-top: 1.5rem;
            display: flex;
            flex-direction: column;
        }
        .nav-link {
            display: flex;
            align-items: center;
            // justify-content:center;
            color: var(--text-secondary-color);
            padding: 0.5rem 0;
            margin: 0.1rem 0;
            padding: 0.5rem 1.5rem;
            text-transform: capitalize;
            transition: all 0.3s linear;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.8;
        }
        .nav-link:hover {
            background-color: #CED6EE;
            opacity: 0.9;
            border-radius:7px;
        }
        .icon {
            font-size: 1.5rem;
            // padding-right: 1rem;
            display: grid;
            place-items: center;
        }
        .active {
            color: var(--color-primary);
            font-weight: 600;
            background-color: #B3C0EC;
            opacity: 1;
            border-radius:7px;
        }
        /* .pending {
            background: var(--background-color);
        } */
    }
`;

export default LargeSidebar;
