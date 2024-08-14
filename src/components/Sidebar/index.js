import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
            <p className='logo-subtitle'>Robert Kibet</p>
        </Link>
    </div>
)

export default Sidebar