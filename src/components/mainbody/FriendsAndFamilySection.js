import React, { Component } from "react";
import data from "../../data.json";

export default class FriendsAndFamilySection extends Component {
    render () {
        return (
            <div className="container-fluid py-5" id="family">
                <div className="container pt-5 pb-3">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>Friends & Family</h6>
                        <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul className="list-inline mb-4" id="portfolio-flters">
                                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4" data-filter=".first">Groomsmen</li>
                                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4" data-filter=".second">Bridesmaid</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/groomsmen-1.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/bridesmaid-1.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/groomsmen-2.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/bridesmaid-2.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/groomsmen-3.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative mb-2">
                                <img className="img-fluid w-100" src="img/bridesmaid-3.jpg" alt=""/>
                                <div className="bg-secondary text-center p-4">
                                    <h4 className="mb-3">Full Name</h4>
                                    <p className="text-uppercase">Best Friend</p>
                                    <div className="d-inline-block">
                                        <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}