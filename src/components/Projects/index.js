import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, } from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])


    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's ']} idx={15} />
                    </h1>
                    <p>
                        I have donne several projects lorem22
                    </p>

                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects