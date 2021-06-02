import React from 'react';
import '../static/css/top.css';
import BgImg from '../static/img/bg.jpg';
import Logo from '../static/img/logo.svg';

const Topintro = () => {
    return (
        <section id="top">
            <img className="top-bg-img" src={BgImg} alt="black-white"/>

            <div className="top-summerice">
                <h1 className="top-title-one">
                    <div className="line"></div>
                    WEB DESIGNS , DEVLOPMENT , DEPLOYMENT
                </h1>

                <h1 className="top-title-two">
                    Reasons Why Meheb Is  Getting <br/> More Popular
                </h1>

                <p className="top-dicription">
                    Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior
                    started to roll out as stationary material. Once the brand strategy was sharp and real for everyone
                    inside of the company,
                </p>
            </div>

            <div className="nav-wrapper">
                <a className="the_logo" href="">
                    <img src={Logo} alt="m tech logo" />
                </a>
                

                <div className="nav_links">
                    <a name="refresh" href="#">REFRESH</a>
                    <a name="services" href="#">SERVICES</a>
                    <a name="portfolio" href="#">PORTFOLIO</a>
                    <a name="about_me" href="#">ABOUT ME</a>
                </div>
            </div>
        </section>
    )
}

export default Topintro
