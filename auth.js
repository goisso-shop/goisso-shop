const firebaseConfig = {
  apiKey: "AIzaSyDAdzz5PxCInMpw4L7SmmPeFhWLEzal5ls",
  authDomain: "seth-shop.firebaseapp.com",
  projectId: "seth-shop",
  storageBucket: "seth-shop.appspot.com",
  messagingSenderId: "651151563819",
  appId: "1:651151563819:web:dbee518579f492bb791e6e",
  measurementId: "G-80Q8KFYKYL"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Connexion réussie !");
      window.location.href = "shop.html"; // page produits
    })
    .catch(error => {
      alert(error.message);
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      userCredential.user.sendEmailVerification();
      alert("Inscription réussie ! Vérifie ton email.");
    })
    .catch(error => {
      alert(error.message);
    });
} 

// Lier le bouton login à la fonction login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", login);
}
