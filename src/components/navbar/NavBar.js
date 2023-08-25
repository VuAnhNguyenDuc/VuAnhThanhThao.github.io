import React, { Component } from "react";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const navbar = data.navbar;
        return (
            <div>
                {navbar ? 
                    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <h1 className="font-secondary text-white mb-n2">{navbar.groom} <span className="text-primary">&</span> {navbar.bride}</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                {navbar["left-items"].map((item, index) => (
                                    <a href={item.href} className={index === 0 ? "nav-item nav-link active" : "nav-item nav-link"} key={index}>{item.name}</a>
                                ))}                    
                            </div>
                            <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                                <h1 className="font-secondary text-white mb-n2">{navbar.groom} <span className="text-primary">&</span> {navbar.bride}</h1>
                            </a>
                            <div className="navbar-nav mr-auto py-0">
                                {navbar["right-items"].map((item, index) => (
                                    <a href={item.href} className="nav-item nav-link" key={index}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                    </nav> : null
                }
            </div>
        );
    }
}