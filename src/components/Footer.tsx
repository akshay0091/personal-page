import './StyleSheets/Footer.css';
import git from './images/github-11-64.png';
import linkedin from './images/linkedin-3-64.png';
import { Link } from 'react-router-dom';
import facebook from './images/facebook-4-512.png';
import instagram from './images/instagram-3-512.png';

function Footer() {
	return (
		<div className="MainContainer">
			<div className="SocialContainer">
				<a href="https://github.com/akshay0091">
					<div>
						<img className="socialimage" src={git}></img>
					</div>
				</a>
				<a href="https://www.linkedin.com/in/akshay-radhakrishnan-015317161/">
					<div>
						<img className="socialimage" src={linkedin}></img>
					</div>
				</a>
				<a href="https://www.facebook.com/profile.php?id=100004933714338">
					<div>
						<img className="socialimage" src={facebook}></img>
					</div>
				</a>
				<a href="https://www.instagram.com/akshay_r_007/">
					<div>
						<img className="socialimage" src={instagram}></img>
					</div>
				</a>
			</div>
		</div>
	);
}
export default Footer;
