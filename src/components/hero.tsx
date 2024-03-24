import { Link } from 'react-router-dom';
import image from './images/hero.jpg';
import '../fonts/BrunoAce-Regular.ttf';
import './StyleSheets/hero.css';

function Hero() {
	return (
		<div className="background_img">
			<div className="corrector">
				<div className="herobackground">
					<div className="typewriter">
						<h1>Akshay Radhakrishnan.</h1>
					</div>
					<div className="body_content">
					Welcome to Akshay Radhakrishnan's personal website! As a passionate data scientist, I specialize in deriving actionable insights from complex datasets to drive business solutions. With a strong foundation in statistics, machine learning, and programming, I thrive on solving challenging problems and enhancing decision-making processes. Explore my projects, ranging from medical diagnosis algorithms to predictive modeling in finance and beyond. Dive into my portfolio to witness how I leverage innovative techniques to extract meaningful patterns from data. Join me on this journey of exploration and discovery at the intersection of data science and real-world applications. Let's unlock the power of data together!
						<div className="learn_btn">
							{' '}
							<Link to="/about" className="LinkHero">
								More!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
