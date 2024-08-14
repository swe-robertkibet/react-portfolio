import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
            <p className='logo-subtitle'>Robert Kibet</p>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
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
                <a target='_blank' rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar