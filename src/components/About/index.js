import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>

                <p> pariatur irure irure irure labore et nulla deserunt ex occaecat labore aliqua commodo consequat minim esse tempor voluptate id ea occaecat occaecat dolore nostrud elit magna tempor non est cillum
                </p>
                <p>
                    quis sit aliqua in velit ea deserunt voluptate commodo in irure quis voluptate velit magna eu do dolore enim dolore veniam aute nulla enim dolor excepteur do ipsum magna ipsum quis aute amet quis eiusmod
                </p>
                <p>
                    culpa voluptate exercitation consequat esse aliquip nulla fugiat labore veniam tempor do incididunt incididunt deserunt consectetur consequat ipsum ut nulla id ea ut commodo elit voluptate pariatur et qui ad consectetur consectetur anim
                </p>

            </div>
        </div>

    )
}

export default About