import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });
    const form = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                setMessage({ text: 'Message sent successfully!', type: 'success' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setMessage({ text: 'Failed to send the message, please try again', type: 'error' });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => {
                    setMessage({ text: '', type: '' });
                }, 3000); // Hide message after 3 seconds
            });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                        I'm a Software Engineer with expertise in Node.js backend development, always open to new opportunities and collaborations. Whether you have a project in mind, a job opportunity, or just want to connect, I'd love to hear from you. Reach out to me at kurgatroba@gmail.com or find me on LinkedIn. Let's create something great together!
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required style={{ fontSize: '16px' }} />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required style={{ fontSize: '16px' }} />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required style={{ fontSize: '16px' }} />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required style={{ fontSize: '16px' }}></textarea>
                                </li>
                                <li className='submit-container'>
                                    {!loading && !message.text && (
                                        <input type='submit' className='flat-button' value="SEND" />
                                    )}
                                    {loading && (
                                        <div className="spinner"></div>
                                    )}
                                    {message.text && (
                                        <div className={`message ${message.type}`}>
                                            {message.text}
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact