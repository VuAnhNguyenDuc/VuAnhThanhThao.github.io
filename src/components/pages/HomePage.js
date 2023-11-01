import React, { Component } from "react";
import NavBar from '../navbar/NavBar';
import MainBodySection from '../mainbody/MainBodySection';

export default class HomePage extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                { data &&
                    <section>
                        {/* NavBar Start */}
                        <NavBar data={data} />
                        {/* NavBar End */}
                
                        {/* Main Body Start */}
                        <MainBodySection data={data} />
                        {/* Main Body End */}
                    </section>
                }
            </div> 
        );
    }
}