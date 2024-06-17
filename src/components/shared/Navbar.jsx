/* eslint-disable react/prop-types */

import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

import { Tag } from 'antd';

const Navbar = ({ navbarRef }) => {
    const { user } = useUserContext();
    const cred = user.username; 
    return (
        <Wrapper ref={navbarRef}>
            <div className="container">
                <Logo />
                <div className="flex justify-end items-center">
                    <NavLink className="nav-item" to="/all-jobs">
                        Jobs
                    </NavLink>
                    {/* <NavLink className="nav-item hidden sm:block" to="/dashboard">
                        Dashboard
                    </NavLink> */}
                    {!cred &&
                    <NavLink className="nav-item" to="/login">
                        <span className="bg-[#247BF7] text-white px-6 py-2 rounded">Login</span>
                    </NavLink>
                     }
                    {cred &&
                    <NavLink className="nav-item" to="/dashboard">
                        <span className="bg-[#247BF7] text-white px-6 py-2 rounded">{user?.username}</span>
                    </NavLink>
                     }
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px var(--shadow-light);
    padding: 1rem 0;
    // position:fixed;
    // z.inxex:1000;

    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // z-index:100;
        
    }
    .container .nav-item {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        margin-left: 20px;
        text-decoration:none;
        color: var(--color-black);
    }
    .container .nav-item.active {
        color: var(--color-primary);
    }
    @media screen and (max-width: 1200px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 600px) {
        padding: 1.2rem 1rem;
        .container {
            display: flex;
            /* justify-content: center; */
        }
    }
`;

export default Navbar;
