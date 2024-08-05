// import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { Text, VStack } from '@chakra-ui/react';
import { Hero } from '../../features';
import { AutoScrollIcons } from '../../components/ui/AutoScrollIcons';



export function Home () {
    return (
        <MainLayout>
            <VStack justifyContent='space-between' align='center' w='full' pb={{ base: 6, md: 0 }}>
                <Text>{""}</Text>
                <Hero />
                <AutoScrollIcons />
            </VStack>
        </MainLayout >
    )
}
