import { useState, useEffect } from 'react';
import '../styles/Timer.css';
function Timer(props) {
	const [time, setTime] = useState(0);
	useEffect(() => {
		let interval;
		if (props.running) {
			interval = setInterval(() => {
				setTime(time + 10);
			}, 10);
		} else if (!props.running) {
			clearInterval(interval);
			props.totalTime(time);
		}
		return () => clearInterval(interval);
	});
	return (
		<div className='stopWatch'>
			<div className='numbers'>
				<span>
					Time: {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
				</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
			</div>
		</div>
	);
}
export default Timer;
