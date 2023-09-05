import React, { Component } from "react";
import data from "../../data.json";

const wishing = data.wishing;
const form = wishing.form;

export default class WishingSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5" id={this.props.id}>
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: `3px` }}>{wishing.title}</h6>
                        <h1 className="font-secondary display-4">{wishing.subtitle}</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <input id={form.name.id} type="text" className="form-control bg-secondary border-0 py-4 px-3" placeholder={form.name.placeholder}/>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input id={form.email.id} type="email" className="form-control bg-secondary border-0 py-4 px-3" placeholder={form.email.placeholder}/>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <select className="form-control bg-secondary border-0" style={{ height: `52px` }}>
                                                <option>Number of Guest</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <select className="form-control bg-secondary border-0" style={{ height: `52px` }}>
                                                <option>I'm Attending</option>
                                                <option>All Events</option>
                                                <option>Wedding Party</option>
                                            </select>
                                        </div>
                                    </div>
                                    */}
                                    <div className="form-group">
                                        <textarea id={form.message.id} className="form-control bg-secondary border-0 py-2 px-3" rows="5" placeholder={form.message.placeholder} required="required"></textarea>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit">{form.submit.label}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 wish-box" style={{overflow: 'hidden', outline: 'none', cursor: '-webkit-grab'}}>
                            <div class="wish-box-item ">
                                <strong>Kimmy ^-^</strong>
                                <p>Nhân ngày đặc biệt này, em chúc Anh Chị luôn luôn hạnh phúc , luôn giữ lửa như những ngày đầu mới yêu, hai đôi tay luôn nắm chặt cùng song hành trong quãng đường còn lại của cuộc đời!</p>
                            </div>
                            <div class="wish-box-item ">
                                <strong>Em Brianna</strong>
                                <p>Em chúc anh chị có thật nhiều khoảnh khắc và kỉ niệm tuyệt vời trong ngày cưới. Chúc anh chị trăm năm hạnh phúc ạ 🧡</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}