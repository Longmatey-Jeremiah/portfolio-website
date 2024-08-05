import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import { Navbar } from '../components/ui/Navbar';

export const MainLayout = ({ children }) => {
    return (<>
        <Navbar />
        <Flex
            w='100vw'
            minH='100vh'
            m={0}
            px={{ base: 4, xl: 16 }}
            pb={4}
        >
            {children}
        </Flex>
    </>);
}
