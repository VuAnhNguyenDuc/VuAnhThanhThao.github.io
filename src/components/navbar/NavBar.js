import React, { Component } from "react";
import data from "../../data.json";
import { Link, animateScroll as scroll } from "react-scroll";

const navbar = data.navbar;

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-brown navbar-dark py-3 py-lg-0 px-lg-5">
                <button className="navbar-brand d-block d-lg-none" onClick={this.scrollToTop}>
                    <h1 className="font-secondary text-white mb-n2">{navbar.groom} <span className="text-primary">&</span> {navbar.bride}</h1>
                </button>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        {navbar["left-items"].map((item, index) => (
                            <Link activeClass="active" className="nav-item nav-link" key={index} to={item.id} spy={true} smooth={true} offset={-70} duration={500}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <button className="navbar-brand navbar-brand-button mx-5 d-none d-lg-block" onClick={this.scrollToTop}>
                        <h1 className="font-secondary text-white mb-n2">{navbar.groom} <span className="text-primary">&</span> {navbar.bride}</h1>
                    </button>
                    <div className="navbar-nav mr-auto py-0">
                        {navbar["right-items"].map((item, index) => (
                            <Link activeClass="active" className="nav-item nav-link" key={index} to={item.id} spy={true} smooth={true} offset={-70} duration={500}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        );
    }
}