import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
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