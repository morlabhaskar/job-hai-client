import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getSingleHandler } from "../utils/FetchHandlers";
import LoadingComTwo from "../components/shared/LoadingComTwo";

import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

import { MdAccessTime } from "react-icons/md";
import Navbar from "../components/shared/Navbar";
// dayjs.extend(advancedFormat);

import { Steps, Badge, Space, Watermark } from 'antd';
import { useUserContext } from "../context/UserContext";


const Job = () => {
    const { user } = useUserContext();
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: job,
        error,
    } = useQuery({
        queryKey: ["job"],
        queryFn: () =>
            getSingleHandler(
                `http://localhost:3000/api/v1/jobs/${id}`
            ),
    });

    const date = dayjs(job?.jobDeadline).format("MMM Do, YYYY");

    if (isLoading) {
        return <LoadingComTwo />;
    }
    if (isError) {
        return <h2 className="">{error?.message}</h2>;
    }
    // if (job) {
    //     console.log(job.result);
    // }


    return (
        <>
            <Navbar />
            <Wrapper>
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                        width: '100%',
                    }}
                >
                    <Badge.Ribbon text={job?.company} color="cyan">
                        <div className="top-row bg-indigo-100 rounded-lg py-2  ">
                            <h2 className="title text-purple-700">
                                <span className="capitalize "></span>
                                {job?.position}
                            </h2>
                            <h4 className="company">
                                <span className="fancy">posted by: </span>
                                {job?.company}
                            </h4>
                            <h4 className="post-date">
                                <MdAccessTime className="text-lg mr-1" />
                                {dayjs(job?.result?.createdAt).format("MMM Do, YYYY")}
                            </h4>
                        </div>
                    </Badge.Ribbon>
                </Space>


                <Watermark content={job?.company} >
                    <Steps
                        className="p-10 rounded-3xl border-solid border-2 border-sky-900"
                        progressDot
                        current={7}
                        direction="vertical"
                        items={[
                            {
                                title: <h3 className=" text-orange-800 text-xl">Description</h3>,
                                description: <p className="text-slate-900 ">{job?.jobDescription}</p>
                            },
                            {
                                title: <h3 className=" text-orange-800 text-xl">Deadline</h3>,
                                description: <span className="text-slate-900">{date}</span>,
                            },
                            {
                                title: <h3 className="text-orange-800 text-xl">Job Vacancy</h3>,
                                description: <span className="text-slate-900">{job?.jobVacancy}</span>,
                            },
                            {
                                title: <h3 className=" text-orange-800 text-xl">Requirements</h3>,
                                description: <ul>
                                    {job?.jobSkills?.map((skill) => (
                                        <li className="text-slate-900" key={skill}>{skill}</li>
                                    ))}
                                </ul>,
                            },
                            {
                                title: <h3 className=" text-orange-800 text-xl">Facilities</h3>,
                                description: <ul>
                                    {job?.jobFacilities?.map((facility) => (
                                        <li className="text-slate-900" key={facility}>{facility}</li>
                                    ))}
                                </ul>,
                            },
                            {
                                title: <h3 className=" text-orange-800 text-xl">Salary</h3>,
                                description: <span className="text-slate-900">{job?.jobSalary}</span>,
                            },
                            {
                                title: <h3 className=" text-orange-800 text-xl">To Apply</h3>,
                                description: <p className="text-slate-950">Send Your cv/Resume To
                                    <p className="text-slate-900">Email: {job?.jobContact}</p></p>,
                            }
                        ]}
                    />
                </Watermark>
            </Wrapper >
        </>
    );
};

const Wrapper = styled.section`
    padding: 2rem 0;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: calc(20px + 1vw);
    width: 100%;

    .top-row {
        margin-bottom: calc(30px + 1vw);
    }
    .top-row .title {
        font-size: calc(14px + 1vw);
        text-align: center;
    }
    .top-row .company {
        font-size: calc(11px + 0.35vw);
        text-align: center;
        text-transform: capitalize;
        font-weight: 600;
        margin-top: 4px;
        opacity: 0.75;
    }
    .top-row .post-date {
        font-size: 11px;
        font-weight: 600;
        text-transform: capitalize;
        text-align: center;
        opacity: 0.75;
        margin-top: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .middle-row .description h3 {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .description p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .deadline {
        font-size: calc(13px + 0.1vw);
        font-weight: 600;
        opacity: 0.8;
        margin-top: calc(10px + 0.3vw);
    }
    .middle-row .vacancy {
        font-size: calc(13px + 0.1vw);
        font-weight: 600;
        opacity: 0.8;
        margin-top: 4px;
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .requirement {
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .requirement .sec-title {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .requirement p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .requirement ul {
        margin-top: 6px;
        list-style: circle;
        margin-left: calc(30px + 0.5vw);
    }
    .middle-row .requirement ul li {
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-transform: capitalize;
        padding: 2px 0;
    }

    .middle-row .facility .sec-title {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .facility {
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .facility p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .facility ul {
        margin-top: 6px;
        list-style: circle;
        margin-left: calc(30px + 0.5vw);
    }
    .middle-row .facility ul li {
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-transform: capitalize;
        padding: 2px 0;
    }
    .middle-row .salary {
        font-size: calc(14px + 0.1vw);
        font-weight: 600;
        opacity: 0.85;
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .apply h3 {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .apply p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
    }
    .middle-row .apply p.intro {
        text-transform: capitalize;
    }
    .middle-row .apply p.info {
        font-weight: 600;
        opacity: 0.8;
    }
`;

export default Job;
