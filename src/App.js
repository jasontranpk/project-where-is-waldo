import './styles/App.css';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OpeningModal from './components/OpeningModal';
import EndingModal from './components/EndingModal';
import Timer from './components/Timer';
function App() {
	const [charIsFound, setCharIsFound] = useState({
		waldo: false,
		odlaw: false,
		wizard: false,
	});
	const [isWon, setIsWon] = useState(false);
	const [endingModalDisplay, setEndingModalDisplay] = useState('none');
	const [isStarting, setIsStarting] = useState(false);
	const [totalTime, setTotalTime] = useState(0);
	useEffect(() => {
		checkWinner();
		if (isWon) {
			setEndingModalDisplay('block');
			setIsStarting(false);
		}
	});
	function calculateTotalTime(time) {
		setTotalTime(time);
	}
	function startHandler(runningState) {
		setIsStarting(runningState);
	}
	function handleFoundCharacter(char) {
		const obj = { ...charIsFound };
		obj[char] = true;
		setCharIsFound(obj);
	}
	function checkWinner() {
		if (
			charIsFound.waldo === true &&
			charIsFound.odlaw === true &&
			charIsFound.wizard === true
		) {
			setIsWon(true);
		}
	}

	return (
		<div className='App'>
			<Timer running={isStarting} totalTime={calculateTotalTime} />
			<Header characters={charIsFound} winner={isWon} />
			<Main foundCharacter={handleFoundCharacter} winner={isWon} />
			<Footer />

			<OpeningModal startIsClicked={startHandler} />
			<EndingModal isShown={endingModalDisplay} totalTime={totalTime} />
		</div>
	);
}

export default App;
