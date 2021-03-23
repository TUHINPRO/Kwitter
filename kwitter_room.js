 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAKSTLMXy0SA0HcAKZzQGNwJVVyj5FCyEA",
  authDomain: "classroom-b152d.firebaseapp.com",
  databaseURL: "https://classroom-b152d-default-rtdb.firebaseio.com",
  projectId: "classroom-b152d",
  storageBucket: "classroom-b152d.appspot.com",
  messagingSenderId: "283163505381",
  appId: "1:283163505381:web:dd8942c8ca68ba16dc1a0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML="Welcome " +  user_name+" !";

  function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update ({
        purpose : "adding room name"
        });

        localStorage.setItem("room_name",room_name);

        window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey = childSnapshot.key; 
  Room_names = childKey;
  console.log("room_name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
 }); 
}); 
}
getData();

function redirecrttoroom(name) {
  localStorage.setItem("room_names",name);
  window.location="kwitter_page.html";
}
function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


