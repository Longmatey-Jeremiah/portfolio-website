import React from 'react';
import { Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../utils/constants';

export const Navbar = () => {
    return (
        <>
            <Stack flexDirection='row' w={'full'} h={'100px'} justifyContent={'center'} alignItems='center' spacing={6}>
                <Link to={AppRoutes.HOME}>longmateyjeremiah1@gmail.com</Link>
                <Link to={AppRoutes.PROJECTS}>Projects</Link>
                <Link to={AppRoutes.PROJECTS}>Resume</Link>
                <Link to={AppRoutes.PROJECTS}>Services</Link>
                <Link to={AppRoutes.PROJECTS}>Contact</Link>
            </Stack>
        </>
    );
}