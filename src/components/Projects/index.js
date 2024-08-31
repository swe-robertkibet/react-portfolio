import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [focusedCardIndex, setFocusedCardIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isManualRotation, setIsManualRotation] = useState(false);
    const containerRef = useRef(null);
    const rotationIntervalRef = useRef(null);
    const manualRotationTimeoutRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    const rotateCards = (direction) => {
        setFocusedCardIndex((prevIndex) => {
            const newIndex = (prevIndex + direction + projects.length) % projects.length;
            return newIndex;
        });
    };

    const handleManualRotation = (direction) => {
        rotateCards(direction);
        setIsManualRotation(true);
        clearTimeout(manualRotationTimeoutRef.current);
        manualRotationTimeoutRef.current = setTimeout(() => {
            setIsManualRotation(false);
        }, 10000);
    };

    useEffect(() => {
        const startRotation = () => {
            rotationIntervalRef.current = setInterval(() => rotateCards(1), 5000);
        };

        const stopRotation = () => {
            clearInterval(rotationIntervalRef.current);
        };

        if (isHovering || isManualRotation) {
            stopRotation();
        } else {
            startRotation();
        }

        return () => {
            clearInterval(rotationIntervalRef.current);
            clearTimeout(manualRotationTimeoutRef.current);
        };
    }, [isHovering, isManualRotation]);

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
                card.style.zIndex = index === focusedCardIndex ? 2 : 1;
                card.style.pointerEvents = index === focusedCardIndex ? 'auto' : 'none';

                // Remove blur for focused card on smaller screens
                if (window.innerWidth <= 768 && index === focusedCardIndex) {
                    card.style.filter = 'blur(0px)';
                }
            });
        };

        updateCardPositions();

        window.addEventListener('resize', updateCardPositions);

        return () => {
            window.removeEventListener('resize', updateCardPositions);
        };
    }, [focusedCardIndex]);

    const projects = [
        {
            title: 'Logic Gate Simulator',
            description: 'React app that simulates basic logic gates (AND, OR, NOT, NAND, NOR). Users can input binary values and see the output of different gates.',
            liveLink: 'https://logicsim.robertkibet.com/',
            githubLink: 'https://github.com/swe-robertkibet/logic-gate-simulator'
        },
        {
            title: 'Color Theme Generator',
            description: ' A react app that helps users create color schemes for their projects. By choosing a primary color, the app generates palettes with matching colors that are both accessible and visually appealing.',
            liveLink: 'https://colorgen.robertkibet.com/',
            githubLink: 'https://github.com/swe-robertkibet/react-color-theme-generator'
        },
        {
            title: 'Process Scheduling Simulator',
            description: 'It is a web-based tool designed to simulate and analyze CPU scheduling algorithms, with a focus on the Shortest Remaining Time (SRT) algorithm.',
            liveLink: 'https://schedulesimulator.robertkibet.com/',
            githubLink: 'https://github.com/swe-robertkibet/Process-Scheduling-Simulator'
        },
        {
            title: 'Node Authentication System',
            description: 'Allows users to sign up with unique usernames and emails, securely hashes passwords using bcrypt, and facilitates user login with robust validation checks.',
            liveLink: '',
            githubLink: 'https://github.com/swe-robertkibet/NodeJs-Authentication'
        },
        {
            title: 'Java Inventory System',
            description: 'It features client management, stock tracking, supplier management, sales processing, and reporting, with data stored in MongoDB and a user interface built using Java Swing.',
            liveLink: '',
            githubLink: 'https://github.com/swe-robertkibet/java-inventorysystem'
        },
        {
            title: 'Java Geometry Visualizer',
            description: 'A Java Swing application for creating and customizing basic geometric shapes with real-time preview and color selection.',
            liveLink: '',
            githubLink: 'https://github.com/swe-robertkibet/java-geometry-visualizer'
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
                    <div className="navigation-buttons">
                        <button onClick={() => handleManualRotation(-1)} className="nav-button up">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                        <button onClick={() => handleManualRotation(1)} className="nav-button down">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>
                    {projects.map((project, index) => (
                        <div className='project-card' key={index}>
                            <h3>{project.title}</h3>
                            <div className="project-description" style={{ flex: 1 }}>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-links">
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
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