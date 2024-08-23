import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [focusedCardIndex, setFocusedCardIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);
    const rotationIntervalRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    const rotateCards = () => {
        if (!isHovering) {
            setFocusedCardIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }
    };

    useEffect(() => {
        rotationIntervalRef.current = setInterval(rotateCards, 3000);
        return () => clearInterval(rotationIntervalRef.current);
    }, [isHovering]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const container = containerRef.current;
        const cards = container.getElementsByClassName('project-card');

        const updateCardPositions = () => {
            const totalCards = cards.length;
            const radius = window.innerWidth > 768 ? 200 : 150;

            Array.from(cards).forEach((card, index) => {
                const angle = ((index - focusedCardIndex + totalCards) % totalCards) * (2 * Math.PI / totalCards);
                const y = radius * Math.sin(angle);
                const z = radius * Math.cos(angle) - radius;

                const scale = index === focusedCardIndex ? 1 : 0.8;
                const opacity = index === focusedCardIndex ? 1 : 0.6;
                const blur = index === focusedCardIndex ? 0 : 5;

                card.style.transform = `translateY(${y}px) translateZ(${z}px) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.filter = `blur(${blur}px)`;
                card.style.zIndex = index === focusedCardIndex ? 1 : 0;
            });
        };

        updateCardPositions();

        window.addEventListener('resize', updateCardPositions);
        return () => window.removeEventListener('resize', updateCardPositions);
    }, [focusedCardIndex]);

    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            liveLink: 'https://project1.com',
            githubLink: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            liveLink: 'https://project2.com',
            githubLink: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            liveLink: 'https://project3.com',
            githubLink: 'https://github.com/yourusername/project3'
        },
        {
            title: 'Project 4',
            description: 'Description of Project 4',
            liveLink: 'https://project4.com',
            githubLink: 'https://github.com/yourusername/project4'
        },
        {
            title: 'Project 5',
            description: 'Description of Project 5',
            liveLink: 'https://project5.com',
            githubLink: 'https://github.com/yourusername/project5'
        },
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
                <div
                    className='projects-container'
                    ref={containerRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {projects.map((project, index) => (
                        <div className='project-card' key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects