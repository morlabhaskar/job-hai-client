import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import LoadingComTwo from "../shared/LoadingComTwo";

import { TbAlertCircleFilled , TbAwardFilled , TbAlertTriangleFilled } from "react-icons/tb";


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
    { id:1, label: 'SL' },
    { id: 2, label: 'Job Position' },
    {
        id: 3,
        label: 'Company',
    },
    {
        id: 4,
        label: 'Status'
    }
];



const Applicant = () => {

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
    } = useQuery({
        queryKey: ["my-jobs"],
        queryFn: async () => {
            const response = await axios.get(
                `https://job-hai-server.vercel.app/api/v1/application/applicant-jobs`,
                { withCredentials: true }
            );
            return response?.data?.result;
        },
    });

    if (isPending) {
        return <LoadingComTwo />;
    }

    if (isError) {
        return <h2 className="">{error?.message}</h2>;
    }

    if (jobs) {
        console.log(jobs);
    }

    if (!jobs?.length === 0) {
        return <h2 className="">No job found</h2>;
    }

    return (
        <Wrapper>
            <div className="content-row">
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Position</th>
                            <th>Company</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.map((job, index) => {
                            let i =
                                index + 1 < 10 ? `0${index + 1}` : index + 1;
                            return (
                                <tr key={jobs?.jobId?._id}>
                                    <td>{i}</td>
                                    <td>{job?.jobId?.position}</td>
                                    <td>{job?.jobId?.company}</td>
                                    <td className="action-row">
                                        {job?.status}
                                        {job?.status == 'accepted' ? <TbAwardFilled className="text-green-600 text-xl" />
                                            : job?.status == 'pending' ? <TbAlertCircleFilled className="text-yellow-500 text-xl" /> : <TbAlertTriangleFilled className="text-red-600 text-xl" />}
                                        
                                        
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
                            {jobs?.map((job, index) => {
                            let i =
                                index + 1 < 10 ? `0${index + 1}` : index + 1;
                            return (
                                <tr key={jobs?.jobId?._id}>
                                    <td>{i}</td>
                                    <td>{job?.jobId?.position}</td>
                                    <td>{job?.jobId?.company}</td>
                                    <td className="action-row">
                                        {job?.status}
                                        {job?.status == 'accepted' ? <TbAwardFilled className="text-green-600 text-xl" />
                                            : job?.status == 'pending' ? <TbAlertCircleFilled className="text-yellow-500 text-xl" /> : <TbAlertTriangleFilled className="text-red-600 text-xl" />}
                                        
                                        {/* (condition1) ? (statement3) : (condition2) ? (statement1) : (statement2) */}
                                        {/* <button
                                            className="action delete"
                                            onClick={() => deleteModal(job._id)}
                                        >
                                            <MdDelete />
                                        </button> */}
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
        width:25rem
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
export default Applicant;
