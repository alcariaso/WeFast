import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageLoader = ({src, alt}) => (
    <LazyLoadImage >
        <img src={src} alt={alt} ></img>
    </LazyLoadImage>
)

export default ImageLoader