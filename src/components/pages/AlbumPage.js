import React, { useState, useEffect } from "react";
import CarouselSection from "../mainbody/CarouselSection";
import VideoModalSection from "../mainbody/VideoModalSection";
import FooterSection from "../mainbody/FooterSection";
import WishingSection from "../mainbody/WishingSection";
import NavBar from "../navbar/NavBar";
import data from "../../data.json";
import albums_data from "../../vuanh-thanhthao-albums.json";
import { useSearchParams } from 'react-router-dom';
import AlbumSection from "../mainbody/AlbumSection";

const DASH_CHARACTER = "-";

function AlbumPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [sectionTitle] = useState(albums_data.section_title);
    const [albums, setAlbums] = useState(albums_data.albums);
    const [albumsMap, setAlbumsMap] = useState(getAlbumsMap(albums_data.albums));
    const [selectedAlbum, setSelectedAlbum] = useState({});

    const IMAGES_URL = process.env.REACT_APP_IMAGES_BANK;
    const ALBUMS_URL = process.env.REACT_APP_IMAGES_BANK;

    const handleAlbumSelect = (event) => {
        event.preventDefault();
        const albumId = event.target.id;
        setSelectedAlbum(albumsMap.get(albumId));
        setSearchParams({id: buildAlbumPatternFromId(albumsMap.get(albumId))});
    }

    useEffect(() => {
        if (JSON.stringify(selectedAlbum) === '{}') {
            var albumId = getAlbumIdFromPattern(searchParams.get('id'));
            if (albumId) {
                setSelectedAlbum(albumsMap.get(albumId));
            } else {
                setSelectedAlbum(albums[0]);
            }
        }
    }, []);

    return (
        <div>
            { albums && albums.length > 0 && selectedAlbum &&
                <div>
                    <NavBar data={data} />
                    <CarouselSection id="home" carousel={data.carousel}/>
                    <VideoModalSection carousel={data.carousel}/>
                    <AlbumSection sectionTitle={sectionTitle} albums={albums}
                            selectedAlbum={selectedAlbum}
                            handleAlbumSelect={handleAlbumSelect}/>
                    <WishingSection id="wishing" wishing={data.wishing}/>
                    <FooterSection id="contact" footer={data.footer}/>
                </div>
            }
        </div>
    );
}

function getAlbumsMap(albums) {
    const albumsMap = new Map();
    if (albums && albums.length > 0) {
        albums.forEach((item) => albumsMap.set(item.id, item));
    }
    return albumsMap;
}

function getAlbumIdFromPattern(pattern) {
    if (Object.is(pattern, null)) {
        return null;
    }
    var splittedPattern = pattern.split(DASH_CHARACTER);
    var albumId = splittedPattern && splittedPattern.length > 0 ? splittedPattern[0] : null;
    return albumId;
}

function buildAlbumPatternFromId(album) {
    return album.id + DASH_CHARACTER + album.path;
}

export default AlbumPage;