import React, { Component } from "react";

export default class EventSection extends Component {
    render() {
        const event = this.props.event;
        return (
            <div className="container-fluid py-5" id={this.props.id}>
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{event.title}</h6>
                        <h1 className="font-secondary display-4">{event.subtitle}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h5 className="font-weight-normal text-muted mb-3 pb-3">{event.description}</h5>
                        </div>
                    </div>
                    <div className="row">
                        {event.items.map((item, index) => (
                            <div className={index === event.items.length - 1 ? "col-md-4" : "col-md-4 border-right border-primary"} key={index}>
                                <div className="text-center text-md-center mr-md-3 mb-4 mb-md-0">
                                    <img className="img-fluid mb-4" referrerpolicy="no-referrer" src={item.image} alt={item.title}/>
                                    <h4 className="mb-3">{item.title}</h4>
                                    <h5 className="mb-2">{item.address}</h5>
                                    <p className="mb-0">{item.datetime}</p>
                                    <a className="mb-0" href={item.directions} target="_blank" rel="noreferrer">Xem Bản Đồ</a>
                                    {/*
                                    <p className="mb-0">{item.datetime}</p>
                                    */}
                                </div>
                            </div>
                        ))}               
                    </div>
                </div>
            </div>
        );
    }
}