import { Flex, Heading } from '@chakra-ui/react';
import { MainLayout } from '../../layouts/MainLayout';
import { ProjectItem } from '../../components/ui/ProjectItem';
import { useLocation } from 'react-router-dom';
import { projects } from '../../utils'



export const ProjectInfo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const project = projects[id - 1];
    return (
        <MainLayout>
            <Flex flexDir='column' gap={6} py={4} w='full' justifyContent="start" mt={{ base: 16, md: 20 }}>
                <Heading textAlign='center'>{project.title}</Heading>
                {project.info.map((item, index) => (

                    <ProjectItem
                        key={index}
                        id={project.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        images={item.images}
                        isReversed={index % 2 === 0}
                        link={item.link}
                        label={item.link_label}
                        hasLink={item.hasLink}
                    />
                )
                )}
            </Flex>
        </MainLayout >
    )
}
