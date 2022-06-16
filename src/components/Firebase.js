import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { limit, doc, addDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyACs4Qq9s-y0gx92wMrifyIzVPfsvMkNa8',
	authDomain: 'small-projects-f3743.firebaseapp.com',
	projectId: 'small-projects-f3743',
	storageBucket: 'small-projects-f3743.appspot.com',
	messagingSenderId: '639093176179',
	appId: '1:639093176179:web:e2975c162c2d4843c67706',
};
const conn = initializeApp(firebaseConfig);
const db = getFirestore(conn);
async function addLeaderBoard(player) {
	const docRef = await addDoc(collection(db, 'walgo_game'), {
		name: player.name,
		time: player.time,
	});
	//console.log(docRef);
}
async function readLeaderBoard() {
	const leaderBoardArr = [];
	const querySnapshot = await getDocs(
		collection(db, 'walgo_game'),
		orderBy('time'),
		limit(5)
	);
	querySnapshot.forEach((item) => {
		leaderBoardArr.push(item.data());
	});
	//console.log(leaderBoardArr);
	return leaderBoardArr;
}

export { readLeaderBoard, addLeaderBoard };
