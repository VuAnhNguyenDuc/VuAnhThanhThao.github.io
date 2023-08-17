import React, { Component } from "react";
import data from "../../data.json";

const footer = data.footer;

export default class FooterSection extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: `90px` }}>
                <div className="container text-center py-5">
                    <div className="section-title position-relative text-center">
                        <h1 className="font-secondary display-3 text-white">{footer.title}</h1>
                        <i className="far fa-heart text-white"></i>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                        <p className="text-white" href="#">{footer.email}</p>
                        <span className="px-3">|</span>
                        <p className="text-white" href="#">{footer.phone}</p>
                    </div>
                    <p className="m-0">&copy; <a className="text-primary" href={footer.author_website} target="_blank">{footer.copyright}</a>. Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        );
    }
}