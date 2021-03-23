//YOUR FIREBASE LINKS
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

function Send() {
      textinput=document.getElementById("messageti").value;
      firebase.database().ref(room_name).push({
            name:user_name,message:textinput,like:0
      });
      document.getElementById("messageti").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id); console.log(message_data); name = message_data['name']; message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
       

//End code
      } });  }); }
getData();
function updatelike(message_id) { 
console.log("clicked on like button - " + message_id); 
button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }
//function updatelike(xyz) {
//hm=xyz;
//button=document.getElementById(hm).value;
//updatelikes=Number(button)+1;

//firebase.database().ref(room_name).child(xyz).update ({
      //like:updatelikes

      //});



//}
function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";  
}