import React, { Component } from "react";

export default class DonateSection extends Component {
    render() {
        const donate = this.props.donate;
        return (
            <div className="container-fluid py-5" id={this.props.id}>
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{donate.title}</h6>
                        <h1 className="font-secondary display-4">{donate.subtitle}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center text-md-center mr-md-3 mb-4 mb-md-0">
                                <img className="img-fluid mb-4" referrerpolicy="no-referrer" src={donate.bank_account_src.groom} alt={donate.bank_account_src.groom}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="text-center text-md-center mr-md-3 mb-4 mb-md-0">
                                <img className="img-fluid mb-4" referrerpolicy="no-referrer" src={donate.bank_account_src.bride} alt={donate.bank_account_src.bride}/>
                            </div>
                        </div>           
                    </div>
                </div>
            </div>
        );
    }
}