import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import styled from "styled-components";
import { useJobContext } from "../context/JobContext";
import LoadingComTwo from "../components/shared/LoadingComTwo";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllHandler } from "../utils/FetchHandlers";

//antd scroll table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}
const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];
const columns = [
    { id:1, label: 'SL'},
    { id:2, label: 'Job Position' },
    {
        id:3,
        label: 'Company',
    },
    {
        id:4,
        label: 'Created By'
    },
    {
        id: 5,
        label: 'Actions'
    },
];

const ManageJobs = () => {


    //antd scroll table
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const {
        isPending,
        isError,
        data: jobs,
        error,
        refetch,
    } = useQuery({
        queryKey: ["my-jobs"],
        queryFn: () =>
            getAllHandler(
                `https://job-hai-server.vercel.app/api/v1/jobs/my-jobs`
            ),
    });

    const deleteModal = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#19b74b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteJobHandler(id);
            }
        });
    };

    const deleteJobHandler = async (id) => {
        try {
            const response = await axios.delete(
                `https://job-hai-server.vercel.app/api/v1/jobs/${id}`,
                { withCredentials: true }
            );

            // const updateJobs = jobs?.result?.filter((job) => job._id !== id);
            // setJobs(updateJobs);
            // handleJobFetch(
            //     `https://job-hai-server.vercel.app/api/v1/jobs?page=1`
            // );
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "Sorry!",
                text: error?.message,
                icon: "error",
            });
        }
    };

    if (isPending) {
        return <LoadingComTwo />;
    }

    if (isError) {
        console.log(error?.message);
        return (
            <h2 className="text-lg md:text-3xl font-bold text-red-600 text-center mt-12">
                {error?.message}
            </h2>
        );
    }

    if (!jobs?.result?.length) {
        return (
            <h2 className="text-lg md:text-3xl font-bold text-red-600 text-center mt-12">
                -- Job List is Empty --
            </h2>
        );
    }
    return (
        <Wrapper>
            <div className="title-row">
                Manage Jobs
                <CiSquarePlus className="ml-1 text-xl md:text-2xl" />
            </div>
            <div className="content-row">
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Position</th>
                            <th>Company</th>
                            <th>Created By</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.result?.map((job, index) => {
                            let i =
                                index + 1 < 10 ? `0${index + 1}` : index + 1;
                            return (
                                <tr key={job._id}>
                                    <td>{i}</td>
                                    <td>{job?.position}</td>
                                    <td>{job?.company}</td>
                                    <td>{job?.createdBy?.username}</td>
                                    <td className="action-row">
                                        <Link
                                            to={`/job/${job._id}`}
                                            className="action view"
                                        >
                                            <MdVisibility />
                                        </Link>
                                        <Link
                                            to={`/dashboard/edit-job/${job._id}`}
                                            className="action edit"
                                        >
                                            <FaRegEdit />
                                        </Link>
                                        <button
                                            className="action delete"
                                            onClick={() => deleteModal(job._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> */}
                {/* antd scroll table */}
                <Paper className="paper">
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                        >
                                            {column.label}

                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {jobs?.result?.map((job, index) => {
                            let i =
                                index + 1 < 10 ? `0${index + 1}` : index + 1;
                            return (
                                <tr key={job._id}>
                                    <td>{i}</td>
                                    <td>{job?.position}</td>
                                    <td>{job?.company}</td>
                                    <td>{job?.createdBy?.username}</td>
                                    <td className="action-row">
                                        <Link
                                            to={`/job/${job._id}`}
                                            className="action view"
                                        >
                                            <MdVisibility />
                                        </Link>
                                        <Link
                                            to={`/dashboard/edit-job/${job._id}`}
                                            className="action edit"
                                        >
                                            <FaRegEdit />
                                        </Link>
                                        <button
                                            className="action delete"
                                            onClick={() => deleteModal(job._id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination className="bg-slate-200"
                        // rowsPerPageOptions={[10, 25, 100]}
                        rowsPerPageOptions={[5]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

@media screen and (max-device-width: 320px) { 
    .paper {
            width:19rem
        }
    
    }
    @media screen and (min-device-width: 321px) and (max-device-width: 375px) { 
    .paper {
            width:22rem
        }
    
    }
    @media screen and (min-device-width: 376px) and (max-device-width: 425px) { 
    .paper {
            width:25rem
        }
    
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 768px) { 
    .paper {
            width:47rem
        }
    
    }

    th {
        background-color: var(--color-accent);
        color: var(--color-white);
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 400;
        text-transform: capitalize;
    }

 th,
     td {
        text-align: left;
        padding: 15px 12px;
    }

     tr {
        font-size: 15px;
        font-weight: 400;
        text-transform: capitalize;
        letter-spacing: 1px;
        transition: all 0.2s linear;
    }

 tr:nth-child(even) {
        background-color: #00000011;
    }


    .title-row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: calc(0.9rem + 0.4vw);
        text-transform: capitalize;
        letter-spacing: 1px;
        font-weight: 600;
        opacity: 0.85;
        color: var(--color-black);
        position: relative;
    }
    .title-row:before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: calc(30px + 0.7vw);
        height: calc(2px + 0.1vw);
        background-color: var(--color-primary);
    }
    .content-row {
        overflow-x: auto;
        margin-top: calc(2rem + 0.5vw);
    }

     .action-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        column-gap: 12px;
    }
     .action-row .action {
        font-size: 21px;
    }
    .action.view {
        color: #22d637;
    }
    .action.edit {
        color: #f1c72f;
    }
    .action.delete {
        color: #f1322f;
    }
`;

export default ManageJobs;
