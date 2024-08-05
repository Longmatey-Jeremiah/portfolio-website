// src/LazyImage.js
import React, { useState, useEffect, useRef } from 'react';
import { Image, Box } from '@chakra-ui/react';

const LazyImage = ({ src, alt, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = imgRef.current; // Store the current ref value


        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <Box ref={imgRef}>
            {isVisible && <Image src={src} alt={alt} {...props} />}
        </Box>
    );
};

export default LazyImage;
