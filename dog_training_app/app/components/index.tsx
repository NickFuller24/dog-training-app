// Some basic functions
// Again copied from firebase page

import firebase from 'firebase/app';
import 'firebase/auth';

function facebook_make_credential(response) {
	var credential = firebase.auth.FacebookAuthProivder.credential(
		response.authResponse.accessToken);
}

function facebook_signout() {
	firebase.auth().signOut().then(() => {
		// Signed out
	}).catch((error) => {
		var code = error.code;
		var msg = error.msg;
		var email = error.email;
		var credential = error.credential;	
	});
}

function firebase_set_language(language_code) {
	try {
		firebase.auth().languageCode = language_code;
	} catch(error) {
		// error handling goes here, most likely language_code is wrong
	}
}
