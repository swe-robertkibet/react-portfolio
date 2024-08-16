import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [displayedName, setDisplayedName] = useState('');
    const finalName = 'RobertKibet';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        let interval;
        let iteration = 0;
        const maxIterations = 50;

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

    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeout);
    }, [])

    useEffect(() => {
        const applyRandomRubberBand = () => {
            const letters = document.querySelectorAll('.text-animate-hover');
            const randomIndex = Math.floor(Math.random() * letters.length);
            letters[randomIndex].classList.add('rubberBand');
            letters[randomIndex].style.color = '#FFD700';
            setTimeout(() => {
                letters[randomIndex].classList.remove('rubberBand');
                letters[randomIndex].style.color = '';
            }, 1000);
        };

        const interval = setInterval(applyRandomRubberBand, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
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
    )
}

export default Home