import './components/StyleSheets/About.css';
import pandas from './components/images/pandas.svg';
import CSS from './components/images/CSS.png';
import HTML from './components/images/html.png';
import JS from './components/images/js.png';
import numpy from './components/images/numpy.svg';
import python from './components/images/python.png';
import r from './components/images/r.svg';
import n from './components/images/node.png';

function About() {
	return (
		<>
			<div className="Aboutmaincontainer">
				<div className="detail_container">
					<div className="photo">
						<div className="aboutcontainer">
							<h1 className="aboutheading">Overview</h1>
							<p>
								{' '}
								I'm Akshay Radhakrishnan, a dedicated data scientist with a passion for leveraging data-driven insights to solve complex problems and drive business growth. With a Master's degree in Data Science and a strong foundation in statistics, machine learning, and programming, I possess the skills and expertise to tackle a wide range of challenges.

My journey in data science began with a Bachelor's degree in Computer Applications, where I honed my skills in programming and data analysis. Since then, I have embarked on a path of continuous learning and professional development, constantly exploring new technologies and methodologies to stay at the forefront of the field.

During my time as a Data Science Intern at Pantechs Solutions, I gained valuable experience in data cleaning, modeling, and visualization, working on projects that involved analyzing customer behavior and predicting market trends. These experiences have equipped me with the practical knowledge and hands-on experience necessary to excel in the field of data science.

In addition to my professional work, I am deeply passionate about contributing to the data science community. I actively participate in Kaggle competitions, where I have been recognized as a Kaggle Notebook Expert. I also enjoy sharing my knowledge and insights through my personal blog and GitHub repository, where I document my projects and experiments in data science.

Outside of work, I have a keen interest in cooking and video games. I love experimenting with new recipes and flavors, and I find that cooking provides a creative outlet that complements my analytical work in data science. When I'm not in the kitchen or coding, you can often find me immersed in a video game, exploring virtual worlds and challenging myself to new adventures.

I created this website as a platform to share my journey, experiences, and insights in the field of data science. Whether you're a fellow data enthusiast, a potential collaborator, or simply curious about the world of data science, I invite you to explore my portfolio, read my blog posts, and connect with me on social media. Together, let's harness the power of data to drive positive change and innovation in the world.
							</p>

							<p className="contacts">
								Email Address:
								<a href="mailto:akshayrkrishnan009@gmail.com">
								akshayrkrishnan009@gmail.com
								</a>
								&nbsp; Mobile Number:
								<a href="tel:+447721703031">+447721703031</a>
							</p>
						</div>
						<div className="photocontainer"></div>
					</div>
				</div>
				<div className="Skillcontainer">
					<h1 className="aboutheading">skills:</h1>
					<div className="Skillitem">
						<img className="skill" src={JS}></img>
						<img className="skill" src={HTML}></img>
						<img className="skill" src={CSS}></img>
						<img className="skill" src={python}></img>
						<img className="skill" src={pandas}></img>
						<img className="skill" src={numpy}></img>
						<img className="skill" src={r}></img>
						<img className="skill" src={n}></img>
					</div>
				</div>
			</div>
			<div className="Educontainer">
				<h1 className="aboutheading">Education:</h1>
				<div className="poonjar">
					<div className="Poonjarabout">
						<h2 className="colname">College of Engineering,Poonjar</h2>
						<p>
							<b>Batch:</b> 2016-2020
						</p>
						<p>
							Graduated from IHRD colage Of Applied Science, Karthikapally in the year 2020
							with BCA .  I undertook a comprehensive curriculum covering a wide array of modules essential for building a strong foundation in computer science. These modules included in-depth studies in Data Structures and Algorithms, Linear Algebra and Differential Equations, Probability, Statistical Inference, Intro to Bayesian Statistics, Discrete Math, Software Design/Implementation, Regression Analysis, Design/Analysis of Algorithms, Programming in C, C++, Java, Web development, SQL, and Introduction to Database Systems. Through rigorous coursework and hands-on projects, I gained proficiency in various programming languages and acquired a deep understanding of fundamental concepts in computer science and data analysis.



						</p>
					</div>
					<div className="Poonjarpic"></div>
				</div>
				<div className="essex">
					<div className="Essexpic"></div>
					<div className="Essexabout">
						<h2 className="colname">University of Essex</h2>
						<p>
							<b>Batch:</b> 2022-2023
						</p>
						<p>
							Graduated from University of Essex in the year 2023 with a PG Diploma
							in data science. I delved into an intensive curriculum covering a diverse range of modules crucial for mastering the field. These included Introduction to Programming in Python, Data Visualization using R, Databases and Data Processing with SQL, Modelling Experimental Data focusing on statistical modeling, Applied Statistics encompassing multivariate methods and support vector machines, Machine Learning exploring major approaches and their applications, Text Analytics covering unsupervised and supervised text mining, Big Data for Computational Finance with modern algorithms and case studies. Through these modules, I gained a profound understanding of data science techniques, preparing me for real-world applications and challenges in the field.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
