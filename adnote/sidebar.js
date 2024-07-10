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

const logout = document.getElementById('log-out');
logout.addEventListener('click', (event) => {
    event.preventDefault();

    swal({
        title: "Are you sure?",
        text: "Are you sure you want to log out?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete == true) {
                swal("Logging you out...", {
                    icon: "success",
                    timer: 1000
                });
                auth.signOut();
                window.location.href = "../../index.html";
            } else {
                swal("Happy to have you back.", {
                    icon: "success",
                    timer: 1000
                });
            }
        });
})
