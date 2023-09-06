import React, { Component } from "react";
import AboutSection from "./AboutSection";
import CarouselSection from "./CarouselSection";
import EventSection from "./EventSection";
import FooterSection from "./FooterSection";
import FriendsAndFamilySection from "./FriendsAndFamilySection";
import GallerySection from "./GallerySection";
import WishingSection from "./WishingSection";
import StorySection from "./StorySection";
import VideoModalSection from "./VideoModalSection";
import DonateSection from "./DonateSection";

export default class MainBodySection extends Component {
    render() {
        return (
            <div>
                {/* Carousel Start */}
                <CarouselSection id="home"/>
                {/* Carousel End */}

                {/* Video Modal Start */}
                <VideoModalSection/>
                {/* Video Modal End */}

                {/* About Start */}
                <AboutSection id="about"/>
                {/* About End */}

                {/* Story Start */}
                <StorySection id="story"/>
                {/* Story End */}

                {/* Gallery Start */}
                <GallerySection id="gallery"/>
                {/* Gallery End */}

                {/* Event Start */}
                <EventSection id="event"/>
                {/* Event End */}

                {/* Friends & Family Start */}
                {/* <FriendsAndFamilySection /> */}
                {/* Friends & Family End */}

                {/* RSVP Start */}
                <WishingSection id="wishing"/>
                {/* RSVP End */}

                {/* Donate Start */}
                <DonateSection id="donate"/>
                {/* Donate End */}

                {/* Footer Start */}
                <FooterSection id="contact"/>
                {/* Footer End */}
            </div>
        );
    }
}