import { Flex, Heading } from '@chakra-ui/react';
import { MainLayout } from '../../layouts/MainLayout';
import { ProjectList } from '../../components/ui/ProjectList';



export const Projects = () => {

    return (
        <MainLayout>
            <Flex flexDir='column' gap={6} py={4} w='full' justifyContent="center" mt={{ base: 16, md: 20 }}>
                <Heading textAlign='center'>My Projects</Heading>
                <ProjectList />
            </Flex>
        </MainLayout >
    )
}
