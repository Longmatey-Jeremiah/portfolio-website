import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../components/ui';

export const MainLayout = ({ children }) => {
    return (<>
        <Box h='100dvh' w='100dvw' m={0} p={0}>
            <Navbar />
            <Box pt={4} px={4}>
                {children}
            </Box>
        </Box>
    </>);
}
