import '../src/components/StyleSheets/Projectspage.css';
import photo1 from './components/images/Screenshot 2024-03-24 193832.png';
import photo2 from './components/images/Screenshot 2024-03-24 193959.png';

function Projectpage() {
	const projects = [
		{
			name: 'Medical Checkup',
			photoLink: photo1,
			content:
				'The Medical Checkup project is a comprehensive algorithmic solution designed to assist in diagnosing various medical conditions including tuberculosis, kidney stones, skin cancer, and pneumonia using X-ray images. By leveraging Convolutional Neural Networks (CNNs) and advanced image processing techniques, the system effectively analyzes X-ray images to detect abnormalities and provide accurate diagnoses. Utilizing Python along with libraries such as Pandas, NumPy, Django, and TensorFlow, this project demonstrates the application of machine learning in healthcare, offering a promising avenue for early detection and improved medical outcomes through automated and efficient diagnostic tools.',
			link: 'https://medical-scan-checkup.herokuapp.com/home/',
			Skills: 'Skills needed for Medical Checkup project: Image processing, Convolutional Neural Networks (CNN), Python programming, Django web development, data preprocessing.,HTML,CSS',
		},
		{
			name: 'Hotel Booking Site',
			photoLink: photo2,
			content:
				'Predicting the fare of flights in India involves utilizing machine learning algorithms to analyze various factors influencing flight prices, such as route, time of booking, airline, and demand. By collecting and preprocessing relevant data, including historical fare data and flight details, predictive models can be trained to forecast future ticket prices accurately. Classification algorithms like Logistic Regression, Random Forest, and Support Vector Machines are commonly employed in this task. The goal is to develop a robust predictive model that helps travelers make informed decisions about flight bookings while also assisting airlines in pricing optimization strategies.',
			link: ' https://flight-fare-prediction100.herokuapp.com/',
			Skills: 'Skills needed for predicting flight fares in India: Data preprocessing, feature engineering, machine learning algorithms (e.g., regression, classification), Python programming, data visualization.,HTML,CSS',
		},
	];

	return (
		<div className="projectsback">
			<div className="projectpage">
				{projects.map((project) => (
					<div key={project.name} className="projectpagecontainer">
						<div className="projectpictureframe">
							<img src={project.photoLink} className="projectpictureframe" />
						</div>
						<div className="project_body_writeup">
							<div className="project_heading">{project.name}</div>
							<div className="project_body_text">{project.content}</div>
							<div className="Skillset">
								<b>Tools Used:</b>
								{project.Skills}
							</div>
							<div className="projectbuttoncontainer">
								<a href={project.link}>
									<div className="learn_btnp">to site!</div>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projectpage;
