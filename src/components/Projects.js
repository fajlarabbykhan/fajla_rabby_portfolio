import React from 'react';
import parts from '../assets/projects/AutoParts.PNG';
import talent from '../assets/projects/Talent Recruiter.PNG'

import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-2xl tracking-widest uppercase text-[#5651e5] py-2'>
                    Projects
                </p>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Talent Recruiter '
                        backgroundImg={talent}
                        projectUrl='/talentrecruiter'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Auto Parts'
                        backgroundImg={parts}
                        projectUrl='/AutoParts'
                        tech='React JS'
                    />

                </div>
            </div>
        </div>
    );
};

export default Projects;