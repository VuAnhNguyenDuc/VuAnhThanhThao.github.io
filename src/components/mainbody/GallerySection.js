import React, { Component } from "react";
import data from "../../data.json";
import OwlCarousel from 'react-owl-carousel';

const gallery = data.gallery;

export default class GallerySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options : {
                items: 4,
                nav: true,
                rewind: true,
                autoplay: true,
                dots: false,
                loop: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 2,
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="container-fluid bg-gallery" id="gallery" style={{ padding: `120px 0`, margin: `90px 0` }}>
                <div className="section-title position-relative text-center" style={{ marginBottom: `120px` }}>
                    <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{gallery.title}</h6>
                    <h1 className="font-secondary display-4 text-white">{gallery.subtitle}</h1>
                    <i className="far fa-heart text-white"></i>
                </div>
                <OwlCarousel
                    className="owl-carousel gallery-carousel" {...this.state.options}>
                    {gallery.items.map((item, index) => (
                        <div className="gallery-item" key={index}>
                            <img className="img-fluid w-100 h-50" src={item} alt={index}/>
                            <a href={item} data-lightbox="gallery">
                                <i className="fa fa-2x fa-plus text-white"></i>
                            </a>
                        </div>
                    ))}
                </OwlCarousel>
                <div className="text-center" style={{ paddingTop: `100px` }}>
                    <a className="btn btn-primary font-weight-bold py-3 px-5" target="_blank" rel="noreferrer" href={gallery.album.href}>{gallery.album.title.toUpperCase()}</a>
                </div>
            </div>
        );
    }
}