import { Link } from 'react-router-dom';
import './StyleSheets/Projects.css';

function Projects() {
	return (
		<div className="projeectbback">
			<div className="projectcontainer">
				<div className="pictureframe">
					<h1></h1>
				</div>
				<div className="body_writeup">
					<div className="body_text">
						Click on the link below to learn more about my projects. The page is
						subject to updates constantly adding to the potfolio!
					</div>
					<div className="buttoncontainer">
						<Link className="Link" to="/projects">
							<div className="learn_btn">More!</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
