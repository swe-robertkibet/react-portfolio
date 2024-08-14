import devImg from '../../assets/images/developer.svg';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={devImg} alt="developer" />
                    Robert
                    <br />
                    Software Engineer
                </h1>

                <h2>Problem solver | Innovator | Learner</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>

    )
}

export default Home