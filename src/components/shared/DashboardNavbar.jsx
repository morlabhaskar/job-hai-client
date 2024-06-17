import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AlignRightOutlined } from "@ant-design/icons";
import Logo from "../Logo";
import { useDashboardContext } from "../../Layout/DashboardLayout";

//antd
import {
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons';
import ToggleModel from './ToggleModel';

const DashboardNavbar = () => {
    const { showSidebar, setShowSidebar, handleLogout } = useDashboardContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        handleLogout()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    //toggle model
    const [open, setOpen] = React.useState(false);
    const showLoading = () => {
        setOpen(true);
    };

    return (
        <Wrapper>
            <div className="nav-container">
                <div className="start">
                    <button
                        className="toggler rounded-full"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        {showSidebar ? <RightOutlined /> : <LeftOutlined />}
                    </button>
                    <button className='small ml-3' onClick={showLoading}>
                        <AlignRightOutlined />
                    </button>

                    <Modal className='model flex flex-col items-center'
                        title={null}
                        open={open}
                        onCancel={() => setOpen(false)}
                        footer={null}
                    >
                        <ToggleModel />
                    </Modal>


                </div>
                <div className="center">
                    <Logo />
                </div>
                <div className="end">
                    <Button type="primary" className="button-85" role="button" onClick={showModal}>
                        <h2 className="flex"><FiLogOut className="text-lg mr-1 text-red-500" /> <span className='text-red-500'> Logout</span></h2>
                    </Button>
                    <Modal className='text-slate-900' title="Delete !" okText={<p className="text-black">Logout</p>}
                        cancelText={<p>Cancel</p>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Are You Sure Want to logout...</p>
                    </Modal>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    padding: 1rem calc(1rem + 0.7vw);
    background-color: var(--color-white);
    z-index: 1;

    .nav-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .start .toggler {
    // display:none;
        font-weight: 900;
        font-size: 20px;
        color: var(--color-primary);
        cursor: pointer;
        position:absolute;
        top:2.5rem;
        left:0%;
        border: 1px solid #57ECAF;
        outline:none;
        padding:1px 5px;
        transition: all 0.3s linear;
    }

    .start .toggler:hover {
        background-color: var(--color-primary);
        color: var(--color-white);
    }
        .small {
        display:none;
        
        }

    .end .logout {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: var(--color-danger);
        letter-spacing: 0.5px;
    }

    @media (min-width: 992px) {
        position: sticky;
        top: 0;

        /* .nav-container {
            padding: 0 calc(1rem + 0.7vw);
        } */
    }
            @media (max-width: 768px) {
             .toggler {
                    display:none;
                }
             .small {
                display:block;
                font-weight: 900;
                font-size: 20px;
                cursor: pointer;
                color: var(--color-primary);
                position:absolute;
                top:2.5rem;
                left:0%;
                border: 1px solid #57ECAF;
                outline:none;
                padding:1px 5px;
                transition: all 0.3s linear;
                border-radius:5px;
             }
                .small:hover{
                background-color: var(--color-primary);
                color: var(--color-white);

                }
                .model {
                    padding:7rem;
        
                }
                    // .nav-link{
                    // display:flex;
                    // align-items:center;
                    // justify-content:center;
                    // }
               
            }
        @media (min-width:425) {
        .small{
         margin-bottom:20px;
        }
        }

    .button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: red;
//   background: #E6F1F1;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
  

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 50s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #E6F1F1;
  color:black;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`;

export default DashboardNavbar;
