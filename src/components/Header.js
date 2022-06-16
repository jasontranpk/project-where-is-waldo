import waldoHeadImg from '../images/waldo.jpeg';
import odlawHeadImg from '../images/odlaw.jpg';
import wizardHeadImg from '../images/wizard.jpeg';
import { useState, useEffect } from 'react';
import '../styles/Header.css';
function Header(props) {
	let waldoOpacity = 1;
	let odlawOpacity = 1;
	let wizardOpacity = 1;
	if (props.characters.waldo === true) {
		waldoOpacity = 0.2;
	}
	if (props.characters.odlaw === true) {
		odlawOpacity = 0.2;
	}
	if (props.characters.wizard === true) {
		wizardOpacity = 0.2;
	}

	return (
		<header>
			<h1>Where's Waldo</h1>
			<div className='character-container'>
				<div className='character'>
					<img
						src={waldoHeadImg}
						style={{ opacity: waldoOpacity }}
						alt='Waldo'
						className='small-img'
					/>
					<p>Waldo</p>
				</div>
				<div className='character'>
					<img
						src={odlawHeadImg}
						style={{ opacity: odlawOpacity }}
						alt='Odlaw'
						className='small-img'
					/>
					<p>Odlaw</p>
				</div>
				<div className='character'>
					<img
						src={wizardHeadImg}
						style={{ opacity: wizardOpacity }}
						alt='Wizard'
						className='small-img'
					/>
					<p>Wizard</p>
				</div>
			</div>
		</header>
	);
}
export default Header;
