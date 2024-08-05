import React from 'react';
import { Box, Flex, Text, Image, Link, Icon } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { MdArrowRightAlt } from 'react-icons/md';
import { AppRoutes } from '../../../utils';
import PropTypes from 'prop-types'
import LazyImage from '../LazyImage';

export const ProjectItem = ({ id, title, description, image, images, isReversed, link, label, hasLink = true }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref);
    const getAnimation = (isReversed) => {
        return {
            initial: { opacity: 0, x: isReversed ? -10 : 10 },
            animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -10 : 10 }
        }
    }

    if (window.innerWidth < 768) {
        return (
            <Flex
                direction={isReversed ? ['column', 'row-reverse'] : ['column', 'row']}
                alignItems="center"
                justifyContent="center"
                p={{ base: 0, xl: 6 }}
                w='100%'
                mx="auto"
                maxWidth={{ base: '100%', lg: "1200px" }}
                gap={{ base: 4, md: 8 }}
                ref={ref}
            >
                <Box flex="1" mr={isReversed ? [0, 8] : [0, 8]} mb={[2, 0]}>
                    <motion.div
                        {...getAnimation(isReversed)}
                        transition={{ duration: 0.3 }}
                    >
                        <Text fontSize="2xl" fontWeight="medium" mb={1}>
                            {title}
                        </Text>
                        <Text>{description}</Text>

                        <Flex w='100px'>
                            <Link href={link && hasLink ? link : `${AppRoutes.PROJECT}?id=${id}`} target={link && '_blank'}>
                                <Flex py={4} justifyContent='start' align='center' gap={2} w='150px'>
                                    <Text>{label ? label : "Take a look"}</Text>
                                    <Icon as={MdArrowRightAlt} />
                                </Flex>
                            </Link>
                        </Flex>

                    </motion.div>
                </Box>
                <Box flex="1" mr={[0, 8]}>
                    <motion.div
                        {...getAnimation(isReversed)}
                        borderRadius="10px"
                        transition={{ duration: 0.3 }}
                        style={{ position: 'relative' }}
                    >
                        {images &&
                            <Flex gap={2}>

                                {images.map((item, index) => (
                                    <LazyImage key={index} src={item} alt={title} />
                                )
                                )}
                            </Flex>
                        }
                        {image && <LazyImage src={image} alt={title} />}
                    </motion.div>
                </Box>
            </Flex>
        );
    } else {


        return (
            <Flex
                direction={isReversed ? ['column', 'row-reverse'] : ['column', 'row']}
                alignItems="center"
                justifyContent="center"
                p={{ base: 0, xl: 6 }}
                mx="auto"
                w='100%'
                maxWidth="1200px"
                gap={{ base: 4, md: 8 }}
                ref={ref}
            >
                <Box flex="1" mr={isReversed ? [0, 8] : [0, 8]} mb={[2, 0]}>
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? -100 : 100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -100 : 100 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Text fontSize="2xl" fontWeight="medium" mb={1}>
                            {title}
                        </Text>
                        <Text>{description}</Text>

                        {hasLink &&
                            <Flex w='100px'>
                                <Link href={link ? link : `${AppRoutes.PROJECT}?id=${id}`} target={link && '_blank'}>
                                    <Flex py={4} justifyContent='start' align='center' gap={2} w='150px'>
                                        <Text>
                                            {label ? label : "Take a look"}
                                        </Text>
                                        <Icon as={MdArrowRightAlt} />
                                    </Flex>
                                </Link>
                            </Flex>
                        }

                    </motion.div>
                </Box>
                <Box flex="1" mr={[0, 8]}>
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                        borderRadius="10px"
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 100 : -100 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        style={{ position: 'relative' }}
                    >
                        {images &&
                            <Flex gap={2}>

                                {images.map((item, index) => (
                                    <LazyImage key={index} src={item} alt={title} />
                                )
                                )}
                            </Flex>
                        }
                        {image && <LazyImage src={image} alt={title} />}
                    </motion.div>
                </Box>
            </Flex>
        );
    }
};

ProjectItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.array,
    isReversed: PropTypes.bool,
    link: PropTypes.string,
    label: PropTypes.string,
    hasLink: PropTypes.bool
};
