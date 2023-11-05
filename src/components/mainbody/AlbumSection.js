import React from "react";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Measure from 'react-measure';
import OptimizedImage from "./OptimizedImage";

function AlbumSection({ sectionTitle, albums, selectedAlbum, handleAlbumSelect }) {
    return (
        <div className="container-fluid py-5" id="family">
            <div className="container pt-5 pb-3">
                <div className="section-title position-relative text-center">
                    <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{sectionTitle}</h6>
                    <h1 className="font-secondary display-4">{selectedAlbum.title}</h1>
                    <i className="far fa-heart text-dark"></i>
                </div>
                <div className="row">
                    <div className="col-12 text-center mb-2">
                        <ul className="list-inline mb-4" id="portfolio-flters">
                            {
                                albums && albums.length > 0 && 
                                    albums.map((album, index) => (
                                        <li className={"btn btn-outline-primary font-weight-bold m-1 py-2 px-4 " + (selectedAlbum && album && selectedAlbum.id === album.id ? 'active' : '')} key={index} id={album.id} onClick={handleAlbumSelect}>{album.title}</li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            { selectedAlbum && selectedAlbum.images && selectedAlbum.images.length > 0 &&
                <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 576: 2, 1200: 3}}>
                    <Masonry gutter="5px">
                        {selectedAlbum.images.map((image, index) => (
                            <Measure key={index}>
                                {({ measureRef }) => (
                                    <div className="gallery-item" ref={measureRef}>
                                        <OptimizedImage id={image.id} url={generateImageSrc(image)} width={image.width} height={image.height} blur_hash={image.blur_hash} />
                                        <a href={generateImageSrc(image)} data-lightbox="gallery">
                                            <i className="fa fa-2x fa-plus text-white"></i>
                                        </a>
                                        {/** 
                                        <img className="img-fluid w-100" loading="lazy" key={index} 
                                            referrerPolicy="no-referrer" src={generateImageSrc(image)} alt={image.id} style={{ width: "100%", display: "block" }}
                                            />
                                        */}
                                    </div>
                                )}
                            </Measure>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            }
        </div>
    ); 
}

export default AlbumSection;

function generateImageSrc(image) {
    if (image) {
        var public_url = image.url;
        var width = image.width;
        var height = image.height;
        return public_url + "=w" + width + "-h" + height;
    }
    return "";
}