import React, { Component } from "react";

function Element(props) {
    const item = props.item;
    const index = props.index;
    // Odd Indexes: Image on left, Text on Right
    if ((index + 1) % 2 !== 0) {
        return (
            <div className="row">
                <div className="col-md-6 text-center text-md-right">
                    <img className="img-fluid mr-md-3" referrerPolicy="no-referrer" src={item.image} alt={item.title}/>
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                        <h4 className="mb-2">{item.title}</h4>
                        <p className="text-uppercase mb-2">{item.date}</p>
                        <p className="m-0">{item.description}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <div className="col-md-6 text-center text-md-right">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                        <h4 className="mb-2">{item.title}</h4>
                        <p className="text-uppercase mb-2">{item.date}</p>
                        <p className="m-0">{item.description}</p>
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <img className="img-fluid ml-md-3" referrerPolicy="no-referrer" src={item.image} alt={item.title}/>
                </div>
            </div>
        );
    }
}

export default class StorySection extends Component {
    render() {
        const story = this.props.story;
        return (
            <div className="container-fluid py-5" id={this.props.id}>
                <div className="container pt-5 pb-3">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{story.title}</h6>
                        <h1 className="font-secondary display-4">{story.subtitle}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="container timeline position-relative p-0">
                        {story.items.map((item, index) => (
                            <Element item={item} index={index} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}