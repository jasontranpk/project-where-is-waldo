import { readLeaderBoard } from './Firebase';
import { useState, useEffect } from 'react';
import '../styles/LeaderBoard.css';
function LeaderBoard() {
	const [leaderBoard, setLeaderBoard] = useState([{ name: '' }]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		loadLeaderBoard();
	}, []);
	async function loadLeaderBoard() {
		const response = await readLeaderBoard();
		setLeaderBoard(response);
		setLoading(false);
	}
	//setTimeout(() => console.log(leaderBoard), 5000);

	if (isLoading) {
		return (
			<div className='leader-board'>
				<p>Leader Board</p>
				<ol>
					<li>Loading...</li>
				</ol>
			</div>
		);
	}
	return (
		<div className='leader-board'>
			<p>Leader Board</p>
			<ol>
				{leaderBoard.map((row) => (
					<li>
						{row.name} -{' '}
						<span>
							{(
								'0' +
								Math.floor((parseInt(row.time) / 60000) % 60)
							).slice(-2)}
							:
						</span>
						<span>
							{(
								'0' +
								Math.floor((parseInt(row.time) / 1000) % 60)
							).slice(-2)}
							:
						</span>
						<span>
							{('0' + ((parseInt(row.time) / 10) % 100)).slice(
								-2
							)}
						</span>
					</li>
				))}
			</ol>
		</div>
	);
}
export default LeaderBoard;
