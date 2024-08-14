import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    const [displayedName, setDisplayedName] = useState('');
    const finalName = 'RobertKibet';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        let interval;
        let iteration = 0;
        const maxIterations = 20;

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

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
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
                    Software Engineer
                </h1>
                <h2>Problem solver | Innovator | Learner</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home