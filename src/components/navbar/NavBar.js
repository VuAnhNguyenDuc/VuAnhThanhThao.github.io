import React, { Component } from "react";
import data from "../../data.json";

const navbar = data.navbar;

export default class NavBar extends Component {
    render() {
        return (
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
                        {/** 
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#story" className="nav-item nav-link">Story</a>
                        <a href="#gallery" className="nav-item nav-link">Gallery</a>
                        */}                       
                    </div>
                    <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                        <h1 className="font-secondary text-white mb-n2">{navbar.groom} <span className="text-primary">&</span> {navbar.bride}</h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        {navbar["right-items"].map((item, index) => (
                            <a href={item.href} className="nav-item nav-link" key={index}>{item.name}</a>
                        ))}
                        {/**
                        <a href="#family" className="nav-item nav-link">Family</a>
                        <a href="#event" className="nav-item nav-link">Event</a>
                        <a href="#rsvp" className="nav-item nav-link">RSVP</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                        */}
                    </div>
                </div>
            </nav>
        );
    }
}