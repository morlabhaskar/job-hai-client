import React from 'react'
import { Input } from 'antd';
import styled from "styled-components";
const Footer = () => {
    return (
        <div>
            <Wrapper>
                <div className="new_footer_area bg_color bg-slate-200">
                    <div className="new_footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                        <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                        <p>Don’t miss any updates!</p>
                                        <form action="/" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                            <Input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                            <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                                            <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                        <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                        <ul className="list-unstyled f_list">
                                            <li><a href="/">FAQ</a></li>
                                            <li><a href="/">Term &amp; conditions</a></li>
                                            <li><a href="/">Reporting</a></li>
                                            <li><a href="/">Documentation</a></li>
                                            <li><a href="/">Support Policy</a></li>
                                            <li><a href="/">Privacy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-3">
                                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                                        <h3 className="f-title f_600 t_color f_size_18">Social Media</h3>
                                        <div className="f_social_icon">
                                            <a href="https://www.facebook.com/bhaskar.nani.7564" className="fab fa-facebook" target='blank'></a>
                                            <a href="https://twitter.com/Bhaskar_nani073" className="fab fa-twitter" target='blank'></a>
                                            <a href="https://www.instagram.com/bhaskar_nani_goud/" className="fab fa-instagram" target='blank'></a>
                                            <a href="https://www.linkedin.com/in/bhaskar-morla-429738258/" className="fab fa-linkedin" target='blank'></a>
                                            <a href="https://github.com/morlabhaskar?tab=repositories" className="fab fa-github" target='blank'></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bg">
                            <div className="footer_bg_one"></div>
                            <div className="footer_bg_two"></div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-7">                        </div>
                                <div className="col-lg-6 col-sm-5 text-right">
                                    <p>Made with <i className="icon_heart"></i> in Bhaskar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.section`
@media screen and (min-device-width: 376px) and (max-device-width: 425px) { 
        .row {
            margin-left:1rem;
        }
    }
.new_footer_area {
    // background: #fbfbfd;
    // background: red;
}


.new_footer_top {
    padding: 120px 0px 270px;
    position: relative;
      overflow-x: hidden;
}
.new_footer_area .footer_bottom {
    padding-top: 5px;
    padding-bottom: 50px;
}
.footer_bottom {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #7f88a6;
    padding: 27px 0px;
}
.new_footer_top .company_widget p {
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: #6a7695;
    margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
    border-width: 1px;
    margin-top: 20px;
}
.btn_get_two:hover {
    background: transparent;
    color: #5e2ced;
}
.btn_get:hover {
    color: #fff;
    background: #6754e2;
    border-color: #6754e2;
    -webkit-box-shadow: none;
    box-shadow: none;
}
a:hover, a:focus, .btn:hover, .btn:focus, button:hover, button:focus {
    text-decoration: none;
    outline: none;
}
.new_footer_top .f_widget.about-widget .f_list li a:hover {
    color: #5e2ced;
}
.new_footer_top .f_widget.about-widget .f_list li {
    margin-bottom: 11px;
}
.f_widget.about-widget .f_list li:last-child {
    margin-bottom: 0px;
}
.f_widget.about-widget .f_list li {
    margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
    margin-bottom: 0px;
}
.new_footer_top .f_social_icon a {
    width: 44px;
    height: 44px;
    line-height: 43px;
    background: transparent;
    border: 1px solid #e2e2eb;
    font-size: 24px;
}
.f_social_icon a {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    color: #858da8;
    display: inline-block;
    background: #ebeef5;
    text-align: center;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.ti-facebook:before {
    content: "\e741";
}
.ti-twitter-alt:before {
    content: "\e74b";
}
.ti-vimeo-alt:before {
    content: "\e74a";
}
.ti-pinterest:before {
    content: "\e731";
}

.btn_get_two {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #5e2ced;
    border-color: #5e2ced;
    color: #fff;
}

.btn_get_two:hover {
    background: transparent;
    color: #5e2ced;
}

.new_footer_top .f_social_icon a:hover {
    background: #5e2ced;
    border-color: #5e2ced;
  color:white;
}
.new_footer_top .f_social_icon a + a {
    margin-left: 4px;
}
.new_footer_top .f-title {
    margin-bottom: 30px;
    color: #263b5e;
}
.f_600 {
    font-weight: 600;
}
.f_size_18 {
    font-size: 18px;
}
h1, h2, h3, h4, h5, h6 {
    color: #4b505e;
}
.new_footer_top .f_widget.about-widget .f_list li a {
    color: #6a7695;
}


.new_footer_top .footer_bg {
    position: absolute;
    bottom: 0;
    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center 0;
    width: 100%;
    height: 266px;
}

.new_footer_top .footer_bg .footer_bg_one {
    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center;
    width: 330px;
    height: 105px;
  background-size:100%;
    position: absolute;
    bottom: 0;
    left: 30%;
    -webkit-animation: myfirst 22s linear infinite;
    animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center;
    width: 88px;
    height: 100px;
  background-size:100%;
    bottom: 0;
    left: 38%;
    position: absolute;
    -webkit-animation: myfirst 30s linear infinite;
    animation: myfirst 30s linear infinite;
}



@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

`;

export default Footer