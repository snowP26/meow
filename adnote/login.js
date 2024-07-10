import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

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

// LOGIN
const login = document.getElementById('login');
login.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            swal({
                title: 'Logging in...',
                icon: 'success',
                timer: 1000,
                buttons: false
            }).then(() => {
                window.location.href = 'home.html';
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal({
                title: 'Login invalid',
                icon: 'error'
            });
        });
});

