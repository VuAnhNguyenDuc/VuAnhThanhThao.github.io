import React, { Component } from "react";
import axios from 'axios';

export default class AboutSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            groom: {},
            bride: {}
        }
    }

    getData(){
        const data_url = process.env.REACT_APP_DATA_HOST;
        axios.get(data_url)
            .then(response => {
                var about = response.data.about;
                this.setState({ 
                    title: about.title,
                    groom: about.groom,
                    bride: about.bride
                });
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="container-fluid py-5" id="about">
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{this.state.title}</h6>
                        <h1 className="font-secondary display-4">{this.state.groom.title} & {this.state.bride.title}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                        <div className="col-md-6 p-0 text-center text-md-right">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">{this.state.groom.title}</h3>
                                <p>{this.state.groom.description}</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-male text-primary pr-3"></i>{this.state.groom.name}</h3>
                                <div className="position-relative">
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0" style={{ minHeight: `400px` }}>
                            <img className="position-absolute w-100 h-100" src={this.state.groom.image} style={{ objectFit: `cover` }} alt={this.state.groom.title}/>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-6 p-0" style={{ minHeight: `400px` }}>
                            <img className="position-absolute w-100 h-100" src={this.state.bride.image} style={{ objectFit: `cover` }} alt={this.state.bride.title}/>
                        </div>
                        <div className="col-md-6 p-0 text-center text-md-left">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">{this.state.bride.title}</h3>
                                <p>{this.state.bride.description}</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-female text-primary pr-3"></i>{this.state.bride.name}</h3>
                                <div className="position-relative">
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}