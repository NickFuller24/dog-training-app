// This is all pretty much directly copied from the 
// firebase page using web version 8

import firebase from 'firebase/app';
import 'firebase/auth';

function facebook_provider() {
	var provider = new firebase.auth.FacebookAuthProvider();	
}

function facebook_signin_popup(provider) {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			var credential = result.credential;
			// user info
			var user = result.user;
			// facebook access token to access facebook API
			var access_token = credential.accessToken;
		})
		.catch((error) => { // Error catching
			var code = error.code;
			var msg = error.message;
			// email of user account that caused error
			var email = error.email;
			var credential = error.credential;
		});
}


function facebook_signin_redirected_result() {
	firebase
		.auth()
		.getRedirectedResult()
		.then((result) => {
			if (result.credential) {
				var credential = result.credential;
				var access_token = credential.accessToken;
			}
			var user = result.user;
		}).catch((error) => {
			var code = error.code;
			var msg = error.message;
			var email = error.email;
			var credential = error.credential;
		})	
}

function facebook_check_login_state(response) {
	if (response.authResponse) {
		var unsubscribe = firebase.auth().onAuthStateChanged((firebase_user) => {
			unsubscribe();
			if (!facebook_user_equal(response.authResponse, firebase_user)) {
				var credential = firebase.auth.FacebookAuthProvider.credential(
					response.authResponse.accessToken);
				
				firebase.auth().signInWithCredential(credential)
					.catch((error) => {
						var code = error.code;
						var msg = error.message;
						var email = error.email;
						var credential = error.credential;
					});
			} else {
				// User is already signed in
			}
		});
	} else {
		// User is already signed out
		firebase.auth().signOut();
	}
}

function facebook_user_equal(facebook_auth_response, firebase_user) {
	if (firebase_user) {
		var data = firebase_user.providerData;
		for (var i = 0; i < data.length; i++) {
			if (data[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
				data[i].uid === facebook_auth_response.userID) {
				return true; 
			}
		}
	}
	return false;
}
