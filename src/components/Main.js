import waldoImg from '../images/waldo-img.jpg';

function Main() {
	return (
		<main>
			<div className='waldo-img'>
				<img src={waldoImg} alt='waldo-pic' />
			</div>
			<div className='status'>Correct, You found Waldo</div>
			<div className='leader-board'>
				<h2>Leader Board</h2>
				<ol>
					<li>winner</li>
					<li>winner</li>
					<li>winner</li>
				</ol>
			</div>
		</main>
	);
}
export default Main;
