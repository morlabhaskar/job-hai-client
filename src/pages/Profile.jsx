import React from "react";
import {MailOutlined,EnvironmentOutlined} from '@ant-design/icons';

import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

import styled from "styled-components";

import avatar from "../assets/media/avatar.jpg";

import { useUserContext } from "../context/UserContext";

import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

const Profile = () => {
    const { user } = useUserContext();
    const date = dayjs(user?.createdAt).format("MMM Do, YYYY");

    return (
        <Wrapper>
            {/* <div className="wrapper">
                <h5 className="title">Informations</h5>
                <div className="profile-container">
                    <div className="first-col">
                        <img src={avatar} alt="avatar" className="avatar" />
                        <div className=" flex flex-col justify-center items-center mt-6">
                            <Link
                                to={`/dashboard/edit-profile/${user?._id}}`}
                                className="flex items-center"
                            >
                                <FiEdit />
                                <span className="text-xs capitalize ml-1 font-medium ">
                                    edit
                                </span>
                            </Link>
                            {/* <Link to="" className="flex items-center mt-3">
                                <GrPowerReset />
                                <span className="text-xs capitalize ml-1 font-medium ">
                                    Reset Password
                                </span>
                            </Link> */}
            {/* </div>
                    </div>
                    <table className="information-table">
                        <tbody>
                            <tr className="row">
                                <td className="info">Username :</td>
                                <td className="value">{user?.username}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Role :</td>
                                <td className="value">{user?.role}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">email :</td>
                                <td className="value email">{user?.email}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Join :</td>
                                <td className="value">{date}</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Location :</td>
                                <td className="value">
                                    {user?.location || "not available"}
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="info">Gender :</td>
                                <td className="value">Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="resume text-justify">
                    <span className="info">resume</span>
                    <span className="value overflow-hidden">
                        {user?.resume}
                    </span>
                </p>
            </div> */}


            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex md:px-60 py-10 md:flex-row flex-col items-center rounded-xl border-solid border-2 border-sky-500">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:pr-40 lg:pr-40 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={avatar} />
                        <div class="flex justify-center mt-3">
                            <Link
                                to={`/dashboard/edit-profile/${user?._id}}`}
                                className="flex items-center"
                            >

                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center"><FiEdit className="mr-2" /> Edit</button>
                            </Link>

                        </div>
                    </div>
                    <div class="lg:flex-grow w-full  md:px-2 flex flex-col flex justify-center">
                        <div className="className flex flex-col items-center border-solid border-2 border-sky-800 mb-3 rounded-xl">
                            <h1 class="title-font sm:text-4xl text-3xl font-medium mb-1 text-gray-900 flex items-center text-indigo-500">{user?.username}</h1>
                            <p class="mb-1 leading-relaxed"><MailOutlined className="text-blue-400"  /> {user?.email}</p>
                            <p class=" leading-relaxed"> <EnvironmentOutlined className="text-blue-400" /> {user?.location || "Not Available"}</p>

                        </div>

                        <p class="mb-8 leading-relaxed"><span className="mr-2 text-fuchsia-500">Joining : </span>{date}</p>
                        <p class="mb-8 leading-relaxed"><span className="mr-2 text-fuchsia-500">Gender : </span>{user?.gender || "Not Available"}</p>
                        <p class="mb-8 leading-relaxed"><span className="mr-2 text-fuchsia-500">Resume : </span>{user?.resume || "Not Available"}</p>

                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding-top: calc(1rem + 1vh);
    padding-bottom: calc(1rem + 1vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .wrapper {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1),
            -2px -2px 4px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        border-radius: 6px;
        width: 100%;
        max-width: 600px;
    }
    .title {
        font-size: calc(22px + 0.5vw);
        text-transform: capitalize;
        font-weight: 700;
        color: #0000009c;
        margin-bottom: calc(20px + 1vw);
    }
    .avatar {
        width: 100%;
        max-width: 250px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    .profile-container {
        display: flex;
        justify-content: center;
        gap: calc(20px + 2vw);
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            width: 100%;
            padding: 2rem 1rem;
        }
    }
    @media screen and (max-width: 485px) {
        .profile-container {
            flex-direction: column;
        }
        .avatar {
            max-width: 200px;
        }
    }
    .first-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .information-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    .information-table .info {
        width: 120px;
    }
    .information-table .value {
        width: calc(100% - 120px);
    }
    .information-table .value.email {
        width: calc(100% - 120px);
        text-transform: none;
    }

    th.row,
    td {
        text-align: left;
        padding: 5px;
    }

    td {
        font-size: calc(12px + 0.15vw);
        font-weight: 500;
        text-transform: capitalize;
        color: #00000097;
        margin-bottom: 20px;
    }
    td.value {
        color: #000000e0;
    }
    @media screen and (max-width: 785px) {
        .title {
            margin-bottom: 25px;
        }
        .information-table .info {
            width: 40%;
        }
        .information-table .value {
            width: 60%;
        }
    }
`;

export default Profile;
