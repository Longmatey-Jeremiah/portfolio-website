import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { Box, Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.5) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.5) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export function Home () {
    return (
        <MainLayout>
            <Box>
                <Text>Hi, I am Jeremiah Longmatey.</Text>
            </Box>
            <Box as={motion.div}
                height='40px'
                width='40px'
                bg='orange.400'
                drag='x'
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition='0.5s linear' />

            <Box
                as={motion.div}
                animation={animation}
                // not work: transition={{ ... }}
                padding="2"
                // @ts-ignore - "Does not exist" Type Error against Motion
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                width="12"
                height="12"
                display="flex"
            />
        </MainLayout>
    )
}
