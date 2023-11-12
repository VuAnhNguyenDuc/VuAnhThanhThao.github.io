import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

function OptimizedImage({ id, url, height, width, blur_hash }) {
    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);
  
    const handleLoad = () => {
      setLoaded(true);
    };
  
    const handleLoadStarted = () => {
      setLoadStarted(true);
    };
  
    return (
      <div>
        <LazyLoadImage
          className="img-fluid w-100"
          referrerPolicy="no-referrer"
          alt={id}
          key={id}
          src={url}
          height={height}
          width={width}
          onLoad={handleLoad}
          beforeLoad={handleLoadStarted}
          style={{ width: "100%", display: "block" }}
        />
        {!isLoaded && isLoadStarted && blur_hash && (
          <Blurhash
            hash={blur_hash}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </div>
    );
}

export default OptimizedImage;