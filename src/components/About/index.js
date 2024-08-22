import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faNodeJs,
    faReact,
    faJava,
    faCss3,
    faJs,
    faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>

                    <p>I'm a Software Engineer with over 1.5 years of experience in Node.js backend development. I'm passionate about creating efficient and innovative solutions using a variety of technologies.</p>
                    <p>My technical skills include Node.js, Express.js, EJS, CSS, Git version control, and CI/CD Pipeline. I'm also proficient in problem-solving, communication, adaptability, and time management.</p>
                    <p>I'm currently pursuing a Bachelor of Science in Information Technology at Mount Kenya University, expected to graduate in 2025. I'm always eager to learn and take on new challenges in the field of software engineering.</p>

                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About