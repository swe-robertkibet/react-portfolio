import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        // Disable body scroll when component mounts
        document.body.style.overflow = 'hidden';

        return () => {
            clearTimeout(timer);
            // Re-enable body scroll when component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [])

    const projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' },
        { title: 'Project 3', description: 'Description of Project 3' },
        { title: 'Project 4', description: 'Description of Project 4' },
        { title: 'Project 5', description: 'Description of Project 5' },
    ];

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
                    </h1>
                    <p>
                        Here's a showcase of my projects. Each one represents a unique challenge and solution in my development journey.
                    </p>
                </div>
                <div className='projects-container'>
                    {projects.map((project, index) => (
                        <div className='project-card' key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects