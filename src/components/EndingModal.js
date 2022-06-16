import '../styles/Modal.css';
import { addLeaderBoard } from './Firebase';

function EndingModal(props) {
	const time = props.totalTime;
	function restartClicked() {
		const player = {};
		const name = document.querySelector('#player-name');
		player.name = name.value;
		player.time = time;
		console.log(player);
		addScore(player);
		//window.location.reload();
	}
	async function addScore(player) {
		const score = await addLeaderBoard(player);
		window.location.reload();
	}
	return (
		<div className='modal' style={{ display: props.isShown }}>
			<div className='modal-content'>
				<p>Congratulation! You found all 3 characters</p>
				<p style={{ padding: 0, margin: 0 }}>
					<span>Total time:</span>
					<span>
						{(' 0' + Math.floor((time / 60000) % 60)).slice(-2)}:
					</span>
					<span>
						{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
					</span>
					<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
				</p>
				<div>
					<label htmlFor='name'>Enter Your Name </label>
					<input type='text' name='name' id='player-name' />
				</div>
				<input type='button' value='restart' onClick={restartClicked} />
			</div>
		</div>
	);
}
export default EndingModal;
