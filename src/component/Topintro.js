import React from 'react';
import '../static/css/top.css';
import BgImg from '../static/img/bg.jpg';
import Logo from '../static/img/logo.svg';

const Topintro = () => {
    return (
        <section id="top">
            <img className="top-bg-img" src={BgImg} alt="black-white"/>

            <div className="container">
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
            </div>

            <div className="nav-wrapper">
                <a className="the_logo" href="https://mehedi23.github.io/portfolio/">
                    <img src={Logo} alt="m tech logo" />
                </a>
                

                <div className="nav_links">
                    <a name="refresh" href="https://mehedi23.github.io/portfolio/">REFRESH</a>
                    <a name="services" href="https://mehedi23.github.io/portfolio/#services">SERVICES</a>
                    <a name="portfolio" href="https://mehedi23.github.io/portfolio/#portfolio">PORTFOLIO</a>
                    <a name="about_me" href="https://mehedi23.github.io/portfolio/#about">ABOUT ME</a>
                </div>
            </div>
        </section>
    )
}

export default Topintro
