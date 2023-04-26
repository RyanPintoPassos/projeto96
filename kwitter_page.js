// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8ftXUyx5BzExSXkAqG8ZDOIdAEJy-EeY",
    authDomain: "kwitter-38046.firebaseapp.com",
    databaseURL: "https://kwitter-38046-default-rtdb.firebaseio.com",
    projectId: "kwitter-38046",
    storageBucket: "kwitter-38046.appspot.com",
    messagingSenderId: "482031047115",
    appId: "1:482031047115:web:6e316e72f2606b9302a64e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("romm_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }

  function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }

  function voltar () {
    window.location.replace("kwitter_room.html");
  }
  