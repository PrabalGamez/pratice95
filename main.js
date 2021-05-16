var firebaseConfig = {
    apiKey: "AIzaSyAL5lJzu4bl6KA8GsOv1NgYgc1HZkEkX00",
    authDomain: "practice94-4c07c.firebaseapp.com",
    databaseURL: "https://practice94-4c07c-default-rtdb.firebaseio.com",
    projectId: "practice94-4c07c",
    storageBucket: "practice94-4c07c.appspot.com",
    messagingSenderId: "1054212316243",
    appId: "1:1054212316243:web:2736aa73793dd71adc3aa6",
    measurementId: "G-WW0ZDTPMHF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      username = document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose: "adding user"
              });
  }