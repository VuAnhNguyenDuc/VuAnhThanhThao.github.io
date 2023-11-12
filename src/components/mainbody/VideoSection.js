import React from "react";

function YouTubeIframe(props) {
    const title = props.title;
    const source = props.source;
    return (
        <div style={{ paddingTop: `56.25%`, position: `relative`, display: `block`, height: `80%`, width: `80%`}}>
            <iframe 
                width="100%" 
                height="100%"
                style={{ position: `absolute`, top: 0, left: 0, bottom: 0, right: 0, width: `100%`, height: `100%` }}
                src={source} 
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share">
            </iframe>
        </div>
    );
}

function VideoSection({ title, subtitle, video }) {
    return (
        <div className="container-fluid py-5" id="video">
            <div className="container pt-5 pb-3">
                <div className="section-title position-relative text-center">
                    <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{title}</h6>
                    <h1 className="font-secondary display-4">{subtitle}</h1>
                    <i className="far fa-heart text-dark"></i>
                </div>
            </div>
            <center>
                {video && video.source && video.title &&
                    <YouTubeIframe title={video.title} source={video.source} />
                }
            </center>
        </div>
    );
}

export default VideoSection;