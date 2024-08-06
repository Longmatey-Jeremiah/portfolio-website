import React from 'react'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import StaggeredText from '../components/ui/StaggeredText'
import { AppRoutes } from '../utils';

export const Hero = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    return (
        <Flex ref={ref} flexDirection='column' justifyContent='center' alignItems='center' gap={6} p={6}
            zIndex={2}
        >
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
            >
                <Text align='center'>Hello there</Text>
                <Heading fontWeight='700' size={['lg', '2xl']} textAlign='center'>I'm Jeremiah Longmatey, <br />a Creative Frontend Engineer. </Heading>
            </motion.div>
            <StaggeredText text="I'm passionate about crafting user-friendly products that make human lives easier." />
            <Button
                variant='primary'
                as="a"
                href={AppRoutes.PROJECTS}
            >
                View Projects
            </Button>

        </Flex >
    )
};