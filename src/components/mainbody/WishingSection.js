import React, { Component } from "react";
import data from "../../data.json";

const wishing = data.wishing;
const form = wishing.form;
const WISHING_ENDPOINT = process.env.REACT_APP_SERVER_HOST + process.env.REACT_APP_WISHING_ENDPOINT;

export default class WishingSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nickname: "",
            message: "",
            nameFieldEmpty: false,
            messageFieldEmpty: false,
            wishingMessages: []
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleNicknameChange(event) {
        this.setState({nickname: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        var isValid = true;
        event.preventDefault();
        if (this.state.name.length === 0) {
            this.setState({nameFieldEmpty: true});
            isValid = false;
        }
        if (this.state.message.length === 0) {
            this.setState({messageFieldEmpty: true});
            isValid = false;
        }

        if (isValid) {
            this.state.wishingMessages.push({
                "name": this.state.name,
                "nickname": this.state.nickname,
                "message": this.state.message
            });     
            fetch(WISHING_ENDPOINT, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_WISHING_USERNAME}:${wishing.token}`),
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify([{
                    "name": this.state.name,
                    "nickname": this.state.nickname,
                    "message": this.state.message
                }])
            })
            .then(response => {
                this.setState({
                    name: "",
                    nickname: "",
                    message: "",
                    nameFieldEmpty: false,
                    messageFieldEmpty: false
                });
            })
            .catch(error => console.log(error));
        }
    }

    componentDidMount() {
        fetch(WISHING_ENDPOINT, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_WISHING_USERNAME}:${wishing.token}`),
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.setState({wishingMessages: data}))
        .catch(error => console.log(error));
    }

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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <input id={form.name.id} value={this.state.name} onChange={this.handleNameChange} type="text" className="form-control bg-secondary border-0 py-4 px-3" placeholder={form.name.placeholder}/>
                                            {this.state.nameFieldEmpty && <div style={{ color: 'red' }}>{form.name.error_message}</div>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input id={form.nickname.id} value={this.state.nickname} onChange={this.handleNicknameChange} type="text" className="form-control bg-secondary border-0 py-4 px-3" placeholder={form.nickname.placeholder}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id={form.message.id} value={this.state.message} onChange={this.handleMessageChange} className="form-control bg-secondary border-0 py-2 px-3" rows="5" placeholder={form.message.placeholder}></textarea>
                                        {this.state.messageFieldEmpty && <div style={{ color: 'red' }}>{form.message.error_message}</div>}
                                    </div>
                                    <div>
                                        <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit">{form.submit.label}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {this.state.wishingMessages.length > 0 && 
                            <div className="col-lg-8 wish-box" style={{overflow: 'scroll', height: '475px', outline: 'none', cursor: '-webkit-grab'}}>
                                {this.state.wishingMessages.map((item, index) => (
                                    <div className="wish-box-item" key={index}>
                                        <strong>{item.name}</strong>{item.nickname.length > 0 && <span>{`${wishing.nickname_phrase}${item.nickname}`}</span>}
                                        <p>{item.message}</p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}