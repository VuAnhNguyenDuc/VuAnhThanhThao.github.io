import React, { Component } from "react";
import AboutSection from "./AboutSection";
import CarouselSection from "./CarouselSection";
import EventSection from "./EventSection";
import FooterSection from "./FooterSection";
import GallerySection from "./GallerySection";
import WishingSection from "./WishingSection";
import StorySection from "./StorySection";
import VideoModalSection from "./VideoModalSection";
import DonateSection from "./DonateSection";

export default class MainBodySection extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {/* Carousel Start */}
                <CarouselSection id="home" carousel={data.carousel}/>
                {/* Carousel End */}

                {/* Video Modal Start */}
                <VideoModalSection carousel={data.carousel}/>
                {/* Video Modal End */}

                {/* About Start */}
                <AboutSection id="about" about={data.about}/>
                {/* About End */}

                {/* Story Start */}
                <StorySection id="story" story={data.story}/>
                {/* Story End */}

                {/* Gallery Start */}
                <GallerySection id="gallery" gallery={data.gallery}/>
                {/* Gallery End */}

                {/* Event Start */}
                <EventSection id="event" event={data.event}/>
                {/* Event End */}

                {/* RSVP Start */}
                <WishingSection id="wishing" wishing={data.wishing}/>
                {/* RSVP End */}

                {/* Donate Start */}
                <DonateSection id="donate" donate={data.donate}/>
                {/* Donate End */}

                {/* Footer Start */}
                <FooterSection id="contact" footer={data.footer}/>
                {/* Footer End */}
            </div>
        );
    }
}