function create() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var correct="Your account has been created successfully!";
  var error="Please write on each box";
  var passw="Passwords aren't matching";
  if (username==="" || password==="" || password2===""){
 document.getElementById("demo").innerHTML = error;
}
else if (password2 != password){
 document.getElementById("demo").innerHTML = passw;
}
else{
  document.getElementById("demo").innerHTML = correct;
}
}
function myFun() {
  var x = document.getElementById("password2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }}
