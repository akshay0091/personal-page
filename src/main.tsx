import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Projectpage from './Projectpage';
import About from './About';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/projects" element={<Projectpage />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
