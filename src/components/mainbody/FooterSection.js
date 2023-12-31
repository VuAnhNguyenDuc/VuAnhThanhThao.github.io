import React, { Component } from "react";

export default class FooterSection extends Component {
    render() {
        const footer = this.props.footer;
        return (
            <div className="container-fluid bg-brown text-white py-5" id={this.props.id} style={{ marginTop: `90px` }}>
                <div className="container text-center py-5">
                    <div className="section-title position-relative text-center">
                        <h1 className="font-secondary display-3 text-white">{footer.title}</h1>
                        <i className="far fa-heart text-white"></i>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        {(footer.urls && footer.urls.twitter) && <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href={footer.urls.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>}
                        {(footer.urls && footer.urls.facebook) && <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href={footer.urls.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>}
                        {(footer.urls && footer.urls.linkedin) && <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href={footer.urls.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>}
                        {(footer.urls && footer.urls.instagram) && <a className="btn btn-lg btn-outline-light btn-lg-square" href={footer.urls.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                    </div>
                    <div className="d-flex justify-content-center py-2">
                        <p className="text-white" href="#">{footer.email}</p>
                        <span className="px-3">|</span>
                        <p className="text-white" href="#">{footer.phone}</p>
                    </div>
                    <p className="m-0">&copy; <a className="text-primary" href={footer.author_website} target="_blank" rel="noreferrer">{footer.copyright}</a>. Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        );
    }
}