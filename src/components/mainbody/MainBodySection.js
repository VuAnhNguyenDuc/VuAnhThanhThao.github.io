import React, { Component } from "react";
import AboutSection from "./AboutSection";
import CarouselSection from "./CarouselSection";
import EventSection from "./EventSection";
import FooterSection from "./FooterSection";
import FriendsAndFamilySection from "./FriendsAndFamilySection";
import GallerySection from "./GallerySection";
import RSVPSection from "./RSVPSection";
import StorySection from "./StorySection";
import VideoModalSection from "./VideoModalSection";

export default class MainBodySection extends Component {
    render() {
        return (
            <div>
                {/* Carousel Start */}
                <CarouselSection />
                {/* Carousel End */}

                {/* Video Modal Start */}
                <VideoModalSection />
                {/* Video Modal End */}

                {/* About Start */}
                <AboutSection />
                {/* About End */}

                {/* Story Start */}
                <StorySection />
                {/* Story End */}

                {/* Gallery Start */}
                <GallerySection />
                {/* Gallery End */}

                {/* Event Start */}
                <EventSection />
                {/* Event End */}

                {/* Friends & Family Start */}
                {/* <FriendsAndFamilySection /> */}
                {/* Friends & Family End */}

                {/* RSVP Start */}
                <RSVPSection />
                {/* RSVP End */}

                {/* Footer Start */}
                <FooterSection />
                {/* Footer End */}
            </div>
        );
    }
}