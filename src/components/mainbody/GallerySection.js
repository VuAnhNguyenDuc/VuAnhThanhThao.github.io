import React, { Component } from "react";
import data from "../../data.json";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const gallery = data.gallery;

export default class GallerySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
                <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 500: 2, 700: 3, 900: 4}}>
                    <Masonry gutter="10px">
                        {gallery.items.map((image, index) => (
                            <div className="gallery-item" key={index}>
                                <img className="img-fluid w-100" key={index} src={image} alt={image} style={{ width: "100%", display: "block" }}/>
                                <a href={image} data-lightbox="gallery">
                                    <i className="fa fa-2x fa-plus text-white"></i>
                                </a>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <div className="text-center" style={{ paddingTop: `100px` }}>
                    <a className="btn btn-primary font-weight-bold py-3 px-5" target="_blank" rel="noreferrer" href={gallery.album.href}>{gallery.album.title.toUpperCase()}</a>
                </div>
            </div>
        );
    }
}