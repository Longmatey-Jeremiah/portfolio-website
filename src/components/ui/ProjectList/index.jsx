// import React from 'react';
import { ProjectItem } from '../ProjectItem';
import { projects } from '../../../utils';

export const ProjectList = () => {
    return (<>
        {projects.map((project, index) => (
            <ProjectItem
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                isReversed={index % 2 === 0}
                link={project?.link}
            />
        ))}
    </>
    );
};

