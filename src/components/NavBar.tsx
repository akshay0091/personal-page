import { useState } from 'react';
import './StyleSheets/NavBar.css';
import iamg from '../components/images/down-black-arrow_37413.png';
import { Link } from 'react-router-dom';
function NavBar() {
	const [css_class, setCss] = useState('Navcontainer');
	const [css_button, setBtn] = useState('button');
	const [css_button_down, setBtndn] = useState('down_button');

	function handleClick() {
		if (css_class == 'Navcontainer') {
			setCss('Active');
			setBtn('button_hover');
			setBtndn('down_button_hover');
		} else {
			setCss('Navcontainer');
			setBtn('button');
			setBtndn('down_button');
		}
	}
	return (
		<div className="NavigationContainer">
			<div
				className={css_button}
				onClick={handleClick}
				onBlur={() => setCss('Navcontainer')}
			>
				<img className={css_button_down} src={iamg}></img>
			</div>
			<ul className={css_class}>
				<Link className="Link" to="/">
					<li className="Navitems">Home</li>
				</Link>
				<Link className="Link" to="/about">
					<li className="Navitems">About</li>
				</Link>
				<Link className="Link" to="/projects">
					<li className="Navitems">Projects</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
