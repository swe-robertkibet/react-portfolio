import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
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

                    <p>I am a passionate Software Engineer with over 2 years of experience. My journey in technology began with a deep curiosity about how things work, which naturally evolved into a love for programming and software development.</p>
                    <p>Throughout my career, I have had the opportunity to work on various projects that have challenged and honed my skills. From developing a comprehensive web application that integrates user authentication and payment processing to creating innovative solutions like a Process Scheduling Simulator and a Gaming PC Builder tool, I have demonstrated my ability to tackle complex problems and deliver impactful results.</p>
                    <p>Beyond my technical skills, I am a strong advocate for continuous learning and knowledge sharing. I am always eager to take on new challenges and look forward to contributing my skills and passion to exciting software engineering roles.</p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About