import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';

const StaggeredText = ({ text }) => {
    const elements = text.split(/(<br\s*\/?>)/gi);
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: false });

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <Text
            as={motion.div}
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            display="inline-flex"
            flexWrap="wrap"
            whiteSpace="pre-wrap"
            fontSize='14px'
            color="black"
            textAlign="center"
        >
            {elements.map((element, index) => (
                element.match(/<br\s*\/?>/gi) ? (
                    <Box key={index} width="100%" height="0" />
                ) : (
                    element.split('').map((letter, letterIndex) => (
                        <Box
                            as={motion.span}
                            key={`${index}-${letterIndex}`}
                            variants={childVariants}
                            display="inline-block"
                            mx="1px"
                        >
                            {letter}
                        </Box>
                    ))
                )
            ))}
        </Text>
    );
};

export default StaggeredText;
