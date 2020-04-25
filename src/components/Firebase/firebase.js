import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Cookies from 'js-cookie';

class Firebase {
    state = {
        authenticatedUser: Cookies.getJSON('authUser') || null
    }
    
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyB5MgCpxDn7CcpULPhvRhl40tyzmOjup-8",
            authDomain: "calendar-ca8f1.firebaseapp.com",
            databaseURL: "https://calendar-ca8f1.firebaseio.com",
            projectId: "calendar-ca8f1",
            storageBucket: "calendar-ca8f1.appspot.com",
            messagingSenderId: "1083796719557",
            appId: "1:1083796719557:web:71e64929816520919a2dac",
            measurementId: "G-9GDXJ5L2VJ"
        };
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.database = app.database();
        this.authenticatedUser = this.state.authenticatedUser;
    }
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password).then(user => {
            return this.auth.currentUser.getIdToken().then(idToken => {
                console.log(idToken);
                const cookieOptions = {
                    expires: 30
                };
                Cookies.set('authUser', idToken, cookieOptions);
            })
        });

    doSignOut = () => {
        console.log("Signing out");
        this.auth.signOut()
        Cookies.remove('authUser');
    };

    addEvent = (event) => {
        const eventsRef = this.database.ref('events');
        eventsRef.push(event);
    }
}

export default Firebase;