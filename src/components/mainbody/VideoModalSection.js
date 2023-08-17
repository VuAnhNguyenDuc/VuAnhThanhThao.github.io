import React, { Component } from "react";
import data from "../../data.json";

const carousel = data.carousel;

export default class VideoModalSection extends Component {
    render() {
        return (
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={carousel.slideshow} id="video" allowscriptaccess="always" allow="autoplay" title={carousel.title}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}