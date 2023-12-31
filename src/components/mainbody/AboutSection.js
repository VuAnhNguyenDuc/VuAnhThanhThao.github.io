import React, { Component } from "react";

export default class AboutSection extends Component {
    render() {
        const about = this.props.about;
        const groom = about.groom;
        const bride = about.bride;
        return (
            <div className="container-fluid py-5" id={this.props.id}>
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{about.title}</h6>
                        <h1 className="font-secondary display-4">{about.groom.title} & {about.bride.title}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                        <div className="col-md-6 p-0 text-center text-md-right">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">{about.groom.title}</h3>
                                <p>{about.groom.description}</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-male text-primary pr-3"></i>{about.groom.name}</h3>
                                <div className="position-relative">
                                    {(groom.urls && groom.urls.twitter) && <a className="btn btn-outline-primary btn-square mr-1" href={groom.urls.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>}
                                    {(groom.urls && groom.urls.facebook) && <a className="btn btn-outline-primary btn-square mr-1" href={groom.urls.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>}
                                    {(groom.urls && groom.urls.linkedin) && <a className="btn btn-outline-primary btn-square mr-1" href={groom.urls.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>}
                                    {(groom.urls && groom.urls.instagram) && <a className="btn btn-outline-primary btn-square" href={groom.urls.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0" style={{ minHeight: `400px` }}>
                            <img className="position-absolute w-100 h-100" referrerPolicy="no-referrer" src={about.groom.image} style={{ objectFit: `cover` }} alt={about.groom.title}/>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-6 p-0" style={{ minHeight: `400px` }}>
                            <img className="position-absolute w-100 h-100" referrerPolicy="no-referrer" src={about.bride.image} style={{ objectFit: `cover` }} alt={about.bride.title}/>
                        </div>
                        <div className="col-md-6 p-0 text-center text-md-left">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">{about.bride.title}</h3>
                                <p>{about.bride.description}</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-female text-primary pr-3"></i>{about.bride.name}</h3>
                                <div className="position-relative">
                                    {(bride.urls && bride.urls.twitter) && <a className="btn btn-outline-primary btn-square mr-1" href={bride.urls.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>}
                                    {(bride.urls && bride.urls.facebook) && <a className="btn btn-outline-primary btn-square mr-1" href={bride.urls.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>}
                                    {(bride.urls && bride.urls.linkedin) && <a className="btn btn-outline-primary btn-square mr-1" href={bride.urls.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>}
                                    {(bride.urls && bride.urls.instagram) && <a className="btn btn-outline-primary btn-square" href={bride.urls.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}