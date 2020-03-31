import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAL3HKwEPeSegTWox0_Kg2n-__oTw8V5qQ',
	authDomain: 'onlineshop-699fe.firebaseapp.com',
	databaseURL: 'https://onlineshop-699fe.firebaseio.com',
	projectId: 'onlineshop-699fe',
	storageBucket: 'onlineshop-699fe.appspot.com',
	messagingSenderId: '417116290820',
	appId: '1:417116290820:web:d138f985cf04fd2dc75a51',
	measurementId: 'G-37QSNEGE2G'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
