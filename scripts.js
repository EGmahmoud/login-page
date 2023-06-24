function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter a username and password.");
    return false;
  }

  if (password.length < 8) {
    alert("Your password must be at least 8 characters long.");
    return false;
  }

  return true;
}
