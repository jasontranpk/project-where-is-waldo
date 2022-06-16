import '../styles/Modal.css';
import { useState } from 'react';
import waldoHeadImg from '../images/waldo.jpeg';
import odlawHeadImg from '../images/odlaw.jpg';
import wizardHeadImg from '../images/wizard.jpeg';

function OpeningModal(props) {
	const [isDisplay, setIsDisplay] = useState('block');
	function startBtnClicked() {
		setIsDisplay('none');
		props.startIsClicked(true);
	}
	return (
		<div className='modal' style={{ display: isDisplay }}>
			<div className='modal-content'>
				<h2>Where's Waldo Game</h2>
				<p>
					The rule of this game is simple: Find all 3 characters below
					in the picture in the shortest time possible. Are you ready?
					Go!
				</p>
				<div className='character-container'>
					<div className='character'>
						<img
							src={waldoHeadImg}
							alt='Waldo'
							className='small-img'
						/>
						<p>Waldo</p>
					</div>
					<div className='character'>
						<img
							src={odlawHeadImg}
							alt='Odlaw'
							className='small-img'
						/>
						<p>Odlaw</p>
					</div>
					<div className='character'>
						<img
							src={wizardHeadImg}
							alt='Wizard'
							className='small-img'
						/>
						<p>Wizard</p>
					</div>
				</div>
				<input type='button' value='Go!' onClick={startBtnClicked} />
			</div>
		</div>
	);
}
export default OpeningModal;
