import app from 'firebase/app';
import 'firebase/auth';

class Firebase {
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
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

}

export default Firebase;