var firebaseConfig = {
      apiKey: "AIzaSyDtvub0MPmRSkc1ejCp1XLi3EAqjYhwHYw",
      authDomain: "kwitter-5fa07.firebaseapp.com",
      databaseURL: "https://kwitter-5fa07-default-rtdb.firebaseio.com",
      projectId: "kwitter-5fa07",
      storageBucket: "kwitter-5fa07.appspot.com",
      messagingSenderId: "166436090721",
      appId: "1:166436090721:web:e5595403d4b5cdfbd80b20",
      measurementId: "G-VEYBPJBQXL"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("new_user");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name = "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementsById("output").innerHTML += row;
      //End code
      });});}
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location = "kwitter_page.html";
      }

      function log_out() {
            localStorage.removeItem("new_user");
            localStorage.removeItem("room_name");
            window.location = "thanks.html";
      }
      function support() {
            window.location = "support.html";
      }
getData();

function join() {
      window.location = "https://swarnimmayukh.github.io/GupShap-Meeting/";
}
setTimeout(function() {
      review_reminder.style.display = "block";
      document.getElementById("review_reminder").innerHTML;
      setTimeout(function() {
            review_reminder.style.display = "none";
      },2500);
},2000);
