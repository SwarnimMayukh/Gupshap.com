function add_user() {
    user_name = document.getElementById("new_user").value;
    localStorage.setItem("new_user", user_name);
    window.location = "kwitter_room.html";
}