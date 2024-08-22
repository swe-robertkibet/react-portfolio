import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders';

const Home = () => {
    const [displayedName, setDisplayedName] = useState('');
    const [letterClass, setLetterClass] = useState('text-animate');
    const animationRef = useRef(false);
    const intervalRef = useRef(null);
    const finalName = 'RobertKibet';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

    useEffect(() => {
        let interval;
        let iteration = 0;
        const maxIterations = 50;

        document.body.style.overflow = 'hidden';

        const scramble = () => {
            if (iteration >= maxIterations) {
                setDisplayedName(finalName);
                clearInterval(interval);
                return;
            }

            const progress = Math.floor((iteration / maxIterations) * finalName.length);

            const scrambledName = finalName.split('').map((letter, index) => {
                if (index < progress) {
                    return finalName[index];
                }
                return characters[Math.floor(Math.random() * characters.length)];
            }).join('');

            setDisplayedName(scrambledName);
            iteration++;
        };

        const delay = setTimeout(() => {
            interval = setInterval(scramble, 50);
        }, 1400);

        return () => {
            clearTimeout(delay);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
            animationRef.current = true;
        }, 4000);

        const startRubberBandEffect = () => {
            const applyRandomRubberBand = () => {
                if (!animationRef.current) return;

                const letters = document.querySelectorAll('.text-animate-hover');
                if (letters.length === 0) return;

                const randomIndex = Math.floor(Math.random() * letters.length);
                const randomLetter = letters[randomIndex];

                if (randomLetter && randomLetter.classList) {
                    randomLetter.classList.add('rubberBand');
                    setTimeout(() => {
                        randomLetter.classList.remove('rubberBand');
                    }, 1000);
                }
            };

            intervalRef.current = setInterval(applyRandomRubberBand, 3000);
        };

        // Start the rubberband effect after 5 seconds
        const rubberBandTimeout = setTimeout(startRubberBandEffect, 5000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(rubberBandTimeout);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                const letters = document.querySelectorAll('.text-animate-hover');
                if (letters.length === 0) return;

                const randomIndex = Math.floor(Math.random() * letters.length);
                const randomLetter = letters[randomIndex];

                if (randomLetter && randomLetter.classList) {
                    randomLetter.classList.add('rubberBand');
                    setTimeout(() => {
                        randomLetter.classList.remove('rubberBand');
                    }, 1000);
                }
            }, 3000);
        }
    };

    return (
        <>
            <div className="container home-page">
                <div className="text-zone" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <span className="scramble-letter">&nbsp;</span>
                        {displayedName.split('').map((letter, index) => (
                            <React.Fragment key={index}>
                                {index === 6 && <span className="scramble-letter">&nbsp;</span>}
                                <span
                                    className={`scramble-letter ${index === 0 || index === 6 ? 'highlight-letter' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {letter}
                                </span>
                            </React.Fragment>
                        ))}

                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Problem solver | Innovator | Learner</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home