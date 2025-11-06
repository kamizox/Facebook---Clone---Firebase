// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBL9dZt-d663Y-pFMm0IpBkw9w9e4oeMxM",
    authDomain: "my-app-98f56.firebaseapp.com",
    projectId: "my-app-98f56",
    storageBucket: "my-app-98f56.firebasestorage.app",
    messagingSenderId: "712433998621",
    appId: "1:712433998621:web:5f221a573ae52665e21ff4",
    measurementId: "G-STFYPKWSQX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{
    createUserWithEmailAndPassword,
    getAuth
}