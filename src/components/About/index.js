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

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faNodeJs} color='#3C873A' />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color='#61DBFB' />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faJs} color='#F0DB4F' />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} color='#f89820' />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faCss3} color='#264de4' />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#F1502F' />
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About