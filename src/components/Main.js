import waldoImg from '../images/waldo-img.jpg';
import '../styles/Main.css';
import { useState, useEffect } from 'react';
import LeaderBoard from './LeaderBoard';

function Main(props) {
	const RANGE_X = 20;
	const RANGE_Y = 70;
	const IMAGE_STANDARD = { x: 1920, y: 1079 };
	const odlawPos = { x: 270, y: 280 };
	const wizardPos = { x: 691, y: 281 };
	const waldoPos = { x: 1590, y: 310 };
	const [display, setDisplay] = useState('none');
	const [top, setTop] = useState(0);
	const [right, setLeft] = useState(0);
	const [position, setPosition] = useState('relative');
	const [coord, setCoord] = useState({ x: 0, y: 0 });
	const [message, setMessage] = useState(
		'Find all 3 characters in the shortest time'
	);
	const [messageColor, setMessageColor] = useState('green');

	useEffect(() => {
		//const btnContainer = document.querySelector('.btn-container');
		if (props.winner) {
			setMessage('Congratulation! You found all 3 characters');
			setMessageColor('blue');
		}
	});
	function between(val, min, max) {
		return val >= min && val <= max;
	}
	function buildButton(e) {
		const x = e.clientX;
		const y = e.clientY;
		setTop(y);
		setLeft(x);
		setDisplay('block');
		setPosition('fixed');
		setCoord({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
	}
	function closeButton() {
		setDisplay('none');
	}
	function selectCharacter(event) {
		const char = event.target.dataset.char;
		const img = document.querySelector('#waldo-main-img');
		const xRatio = img.width / IMAGE_STANDARD.x;
		const yRatio = img.height / IMAGE_STANDARD.y;
		const rangeXConverted = RANGE_X / xRatio;
		const rangeYConverted = RANGE_Y / yRatio;
		const posX = coord.x / xRatio;
		const posY = coord.y / yRatio;
		if (char === 'odlaw') {
			if (
				between(
					posX,
					odlawPos.x - rangeXConverted,
					odlawPos.x + rangeXConverted
				) &&
				between(
					posY,
					odlawPos.y - rangeYConverted,
					odlawPos.y + rangeYConverted
				)
			) {
				setMessage('');
				setTimeout(setMessage('You found Odlaw!'), 100);
				setMessageColor('green');
				props.foundCharacter(char);
			} else {
				setMessage('');
				setTimeout(() => setMessage('Not Odlaw'), 100);
				setMessageColor('red');
			}
		} else if (char === 'waldo') {
			if (
				between(
					posX,
					waldoPos.x - rangeXConverted,
					waldoPos.x + rangeXConverted
				) &&
				between(
					posY,
					waldoPos.y - rangeYConverted,
					waldoPos.y + rangeYConverted
				)
			) {
				setMessage('');
				setTimeout(setMessage('You found Waldo!'), 100);
				setMessageColor('green');
				props.foundCharacter(char);
			} else {
				setMessage('');
				setTimeout(() => setMessage('Not Waldo'), 100);
				setMessageColor('red');
			}
		} else {
			if (
				between(
					posX,
					wizardPos.x - rangeXConverted,
					wizardPos.x + rangeXConverted
				) &&
				between(
					posY,
					wizardPos.y - rangeYConverted,
					wizardPos.y + rangeYConverted
				)
			) {
				setMessage('');
				setTimeout(setMessage('You found Wizard!'), 100);
				setMessageColor('green');
				props.foundCharacter(char);
			} else {
				setMessage('');
				setTimeout(() => setMessage('Not Wizard'), 100);
				setMessageColor('red');
			}
		}
		//console.log('You clicked at: (' + posX + ',' + posY + ')');
		closeButton();
	}
	return (
		<main>
			<div
				className='btn-container'
				style={{
					display: display,
					top: top,
					left: right,
					position: position,
				}}
			>
				<div className='btn-container-flex'>
					<input
						type='button'
						value='Waldo'
						onClick={selectCharacter}
						data-char='waldo'
					/>
					<input
						type='button'
						value='Odlaw'
						onClick={selectCharacter}
						data-char='odlaw'
					/>
					<input
						type='button'
						value='Wizard'
						onClick={selectCharacter}
						data-char='wizard'
					/>
				</div>
			</div>
			<div className='status' style={{ color: messageColor }}>
				{message}
			</div>
			<div className='waldo-img'>
				<img
					src={waldoImg}
					alt='waldo-pic'
					id='waldo-main-img'
					onClick={buildButton}
				/>
			</div>

			<LeaderBoard />
		</main>
	);
}
export default Main;
