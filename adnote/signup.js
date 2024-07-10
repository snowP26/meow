import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: 'AIzaSyDUQqKziYtb3ywbSeQab8nmX-ab1vOKmNM',
    authDomain: 'mkfruits.firebaseapp.com',
    projectId: 'mkfruits',
    storageBucket: 'mkfruits.appspot.com',
    messagingSenderId: '420448057013',
    appId: '1:420448057013:web:4bd7adb05b05912b9d30fc',
    measurementId: 'G-GQ0BQKTSDC'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// SIGNIN
const sign = document.getElementById('login');
sign.addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('confirm_pass').value;

    // Example code for Firebase authentication (if needed)
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "index.html";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});