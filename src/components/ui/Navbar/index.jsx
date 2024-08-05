import React, { useEffect, useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../utils/constants';

const NavLinks = [
    // { label: 'Projects', to: AppRoutes.PROJECTS },
    { label: 'Resume', to: AppRoutes.PROJECTS },
    { label: 'Contact', to: AppRoutes.PROJECTS },
];

export const Navbar = () => {
    // const [bgColor, setBgColor] = useState('transparent');

    // const handleScroll = () => {
    //     if (window.scrollY > 50) {
    //         setBgColor('white');
    //     } else {
    //         setBgColor('transparent');
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <Flex
                flexDir='row'
                w='100vw'
                position='fixed'
                zIndex='10'
                justifyContent='space-between'
                alignItems='center'
                gap={6}
                m={0}
                py={{ base: 3, md: 6 }}
                px={{ base: 4, md: 10, '2xl': 40 }}
                transition="background-color 0.3s ease"
            >
                <Link to={AppRoutes.HOME}><Text fontWeight='medium'>Longmatey</Text></Link>
                <Button
                    variant='primary'
                    as="a"
                    href="https://drive.google.com/file/d/1Fs4cuAYf9C0k-2cZhhttDUizunnyEZ2B/view?usp=drive_link"
                    download
                    target='blank'
                >
                    Download CV
                </Button>

            </Flex>
        </>
    );
};