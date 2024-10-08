import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faEnvelope,
    faBars,
    faClose,
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <svg width="45" height="45">
                    <circle cx="22.5" cy="22.5" r="18" fill="transparent" stroke="#1e1e1e" strokeWidth="2" />
                    <text x="22.5" y="27.5" fontSize="18" fontFamily="'Helvetica Neue'" fill="#e7e3e3" textAnchor="middle">RK</text>
                </svg>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="projects-link"
                    to="/projects"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/robert-kibet/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/swe-robertkibet/'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://wa.me/+254714200683/'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/swe_robertkibet'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar