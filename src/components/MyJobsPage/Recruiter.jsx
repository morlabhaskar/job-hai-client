import axios from "axios";
import React from "react";
import styled from "styled-components";
import LoadingComTwo from "../shared/LoadingComTwo";

import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { updateHandler } from "../../utils/FetchHandlers";
import Swal from "sweetalert2";
const queryClient = new QueryClient();



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
    { id: 1, label: 'SL' },
    { id: 2, label: 'Job Position' },
    {
        id: 3,
        label: 'Company',
    },
    {
        id: 4,
        label: 'Status'
    },
    {
        id: 5,
        label: 'Actions'
    },
];


const Recruiter = () => {

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
        queryKey: ["rec-jobs"],
        queryFn: async () => {
            const response = await axios.get(
                `https://job-hai-server.vercel.app/api/v1/application/recruiter-jobs`,
                {
                    withCredentials: true,
                }
            );
            return response?.data?.result;
        },
    });

    const updateJobStatusMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            refetch();
            Swal.fire({
                icon: "success",
                title: "Status Updated",
                text: data?.message,
            });
        },
        onError: (error, variables, context) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.response?.data,
            });
        },
    });

    const handleAcceptStatus = (id, recruiterId) => {
        const newStatus = { recruiterId, status: "accepted" };
        updateJobStatusMutation.mutate({
            body: newStatus,
            url: `https://job-hai-server.vercel.app/api/v1/application/${id}`,
        });
    };

    const handleRejectStatus = (id, recruiterId) => {
        const newStatus = { recruiterId, status: "rejected" };
        updateJobStatusMutation.mutate({
            body: newStatus,
            url: `https://job-hai-server.vercel.app/api/v1/application/${id}`,
        });
    };

    const handleResumeView = (drive) => {
        const newWindow = window.open(drive, "_blank");
        if (newWindow) {
            newWindow.focus();
        } else {
            alert("Please allow pop-ups for this site to open the PDF.");
        }
    };
    if (isPending) {
        return <LoadingComTwo />;
    }

    if (isError) {
        return (
            <h2 className="mt-8 text-2xl font-semibold text-center text-red-600">
                -- {error?.response?.data} --
            </h2>
        );
    }

    if (jobs) {
        // console.log(jobs);
    }

    if (!jobs?.length === 0) {
        return <h2 className="">No Application found</h2>;
    }

    return (
        <Wrapper>
            <div className="content-row">

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
                                {jobs?.map((job, index) => {
                                    let i =
                                        index + 1 < 10 ? `0${index + 1}` : index + 1;
                                    return (
                                        <tr key={job?._id}>
                                            <td>{i}</td>
                                            <td>{job?.jobId?.position}</td>
                                            <td>{job?.jobId?.company}</td>
                                            <td>{job?.status}</td>
                                            <td className="action-row">
                                                <button
                                                    className="action resume"
                                                    onClick={() =>
                                                        handleResumeView(job.resume)
                                                    }
                                                >
                                                    resume
                                                </button>

                                                {job?.status === "pending" && (
                                                    <>
                                                        {" "}
                                                        <button
                                                            className="action accept"
                                                            onClick={() =>
                                                                handleAcceptStatus(
                                                                    job._id,
                                                                    job?.recruiterId
                                                                )
                                                            }
                                                        >
                                                            accept
                                                        </button>
                                                        <button
                                                            className="action reject"
                                                            onClick={() =>
                                                                handleRejectStatus(
                                                                    job._id,
                                                                    job?.recruiterId
                                                                )
                                                            }
                                                        >
                                                            Reject
                                                        </button>
                                                    </>
                                                )}

                                                {job?.status === "accepted" && (
                                                    <button
                                                        className="action reject"
                                                        onClick={() =>
                                                            handleRejectStatus(
                                                                job._id,
                                                                job?.recruiterId
                                                            )
                                                        }
                                                    >
                                                        Reject
                                                    </button>
                                                )}

                                                {job?.status === "rejected" && (
                                                    <button
                                                        className="action accept"
                                                        onClick={() =>
                                                            handleAcceptStatus(
                                                                job._id,
                                                                job?.recruiterId
                                                            )
                                                        }
                                                    >
                                                        accept
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        className="bg-slate-200"
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
        width:24rem
    }

}
@media screen and (min-device-width: 426px) and (max-device-width: 768px) { 
.paper {
        width:47rem
    }

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
        padding: 12px;
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

     .action-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        column-gap: 12px;
    }
     .action-row .action {
        font-size: 12px;
        text-transform: capitalize;
        font-weight: 500;
        color: #fff;
        padding: 1px 6px;
        border-radius: 4px;
    }
    .action.accept {
        background-color: #168e24;
    }
    .action.reject {
        background-color: #f1322f;
    }
    .action.resume {
        background-color: #ef9712;
    }
`;

export default Recruiter;
