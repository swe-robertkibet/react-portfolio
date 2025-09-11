import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I am always open to new opportunities and collaborations. Whether you have a project in mind, a job opportunity, or just want to connect, I'd love to hear from you. Let's create something great together!
                    </p>

                    <div className='contact-info'>
                        <div className='email-section'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href='mailto:contact@swe-robertkibet.com'>contact@swe-robertkibet.com</a>
                        </div>

                        <div className='social-links'>
                            <h3>Connect with me</h3>
                            <div className='social-icons'>
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/robert-kibet/' title='LinkedIn'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://github.com/swe-robertkibet/' title='GitHub'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://wa.me/+254714200683/' title='WhatsApp'>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://twitter.com/swe_robertkibet' title='X (Twitter)'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact