import React from "react";
import { useUserContext } from "../context/UserContext";
import LoadingComTwo from "../components/shared/LoadingComTwo";
import { CiSquarePlus } from "react-icons/ci";
import styled from "styled-components";

import Swal from "sweetalert2";
import { getAllHandler } from "../utils/FetchHandlers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FcBusinessman } from "react-icons/fc";





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
    { id: 'name', label: 'SL' },
    { id: 'code', label: 'UserName' },
    {
        id: 'population',
        label: 'Email',
    },
    {
        id: 'size',
        label: 'Role'
    },
    {
        id: 'density',
        label: 'Actions'
    },
];

const ManageUsers = () => {




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


    const { user: me } = useUserContext();
    const {
        isPending,
        isError,
        data: users,
        error,
        refetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            getAllHandler(`https://job-hai-server.vercel.app/api/v1/users`),
    });

    const updateUserModal = (id, role) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#19b74b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                UpdateUserRole(id, role);
            }
        });
    };

    const UpdateUserRole = async (id, role) => {
        const updateUser = { id, role };
        try {
            const response = await axios.patch(
                `https://job-hai-server.vercel.app/api/v1/admin/update-role`,
                updateUser,
                { withCredentials: true }
            );
            refetch();
            Swal.fire({
                title: "Done!",
                text: "Role Updated Successfully",
                icon: "success",
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Sorry!",
                text: error?.response?.data,
                icon: "error",
            });
        }
    };

    if (isPending) {
        return <LoadingComTwo />;
    }
    if (users) {
        // console.log(users);
    }

    if (!users?.result?.length) {
        return (
            <h2 className="text-lg md:text-3xl font-bold text-red-600 text-center mt-12">
                -- User List is Empty --
            </h2>
        );
    }

    return (
        <Wrapper>
            <div className="title-row">
                Manage Users
                <CiSquarePlus className="ml-1 text-xl md:text-2xl" />
            </div>
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
                                {users?.result?.map((user, index) => {
                                    let i =
                                        index + 1 < 10 ? `0${index + 1}` : index + 1;
                                    return (
                                        <tr key={user._id}>
                                            <td>{i}</td>
                                            <td>{user?.username}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.role}</td>
                                            <td className="action-row">
                                                {user?._id === me._id ? <FcBusinessman className="text-2xl ml-4" /> : (
                                                    <>
                                                        {" "}
                                                        {user?.role === "admin" ? null : (
                                                            <button
                                                                className="action admin"
                                                                onClick={() =>
                                                                    updateUserModal(
                                                                        user._id,
                                                                        "admin"
                                                                    )
                                                                }
                                                            >
                                                                admin
                                                            </button>
                                                        )}
                                                        {user?.role ===
                                                            "recruiter" ? null : (
                                                            <button
                                                                className="action recruiter"
                                                                onClick={() =>
                                                                    updateUserModal(
                                                                        user._id,
                                                                        "recruiter"
                                                                    )
                                                                }
                                                            >
                                                                recuiter
                                                            </button>
                                                        )}
                                                        {user?.role ===
                                                            "user" ? null : (
                                                            <button
                                                                className="action user"
                                                                onClick={() =>
                                                                    updateUserModal(
                                                                        user._id,
                                                                        "user"
                                                                    )
                                                                }
                                                            >
                                                                user
                                                            </button>
                                                        )}
                                                    </>
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

 .action-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        column-gap: 12px;
    }
     .action-row .action {
        font-size: 16px;
        padding: 1px 8px;
        border-radius: 4px;
        color: #fff;
        text-transform: capitalize;
    }
    .action.recruiter {
        background-color: #ac04ac;
    }
    .action.admin {
        background-color: #5f14c7;
    }
    .action.user {
        background-color: #c714c7;
    }
`;

export default ManageUsers;
