import React, { Component } from "react";

export default class CarouselSection extends Component {
    render() {
        const carousel = this.props.carousel;
        return (
            <div className="container-fluid p-0 mb-5 pb-5" id={this.props.id}>
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {carousel.images.map((item, index) => (
                            <div className={index === 0 ? "carousel-item position-relative active" : "carousel-item position-relative"} style={{ height: `100vh`, minHeight: `400px` }} key={index}>
                                <img className="position-absolute w-100 h-100" referrerPolicy="no-referrer" src={item} style={{ objectFit: `cover` }} alt={carousel.title}/>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: `900px` }}>
                                        <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">{carousel.title}</h1>
                                        <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                            {carousel.subtitle && <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: `2px` }}>{carousel.subtitle}</h3>}
                                            {carousel.weddingdate && <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: `2px` }}>{carousel.weddingdate}</h3>}     
                                        </div>
                                        {carousel.video_modal_enable && carousel.video_modal_enable === true && 
                                            <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                                data-src={carousel.slideshow} data-target="#videoModal">
                                                <span></span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/**
                    <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary px-0" style={{ width: `68px`, height: `68px` }}>
                            <span className="carousel-control-prev-icon mt-3"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                        <div className="btn btn-primary px-0" style={{ width: `68px`, height: `68px` }}>
                            <span className="carousel-control-next-icon mt-3"></span>
                        </div>
                    </a>
                    */}
                </div>
            </div>
        );
    }
}