import waldoHeadImg from '../images/waldo.jpeg';
import odlawHeadImg from '../images/odlaw.jpg';
import wizardHeadImg from '../images/wizard.jpeg';

function Header() {
	return (
		<header>
			<h1>Where's Waldo</h1>
			<div className='character-container'>
				<div class='character'>
					<img src={waldoHeadImg} alt='Waldo' className='small-img' />
					<p>Waldo</p>
				</div>
				<div class='character'>
					<img src={odlawHeadImg} alt='Odlaw' className='small-img' />
					<p>Odlaw</p>
				</div>
				<div class='character'>
					<img
						src={wizardHeadImg}
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
