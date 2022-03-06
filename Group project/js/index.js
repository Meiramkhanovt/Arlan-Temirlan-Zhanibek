function create() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let correct="Your account has been created successfully!";
    let error="Please write on each box";
    let passW="Passwords aren't matching";


    if (username==="" || password==="" || password2===""){
      var wrong = new Audio();
      wrong.src='wrong-buzzer-6268.mp3';
      wrong.play();
      document.getElementById("demo").innerHTML = wrong;
        document.getElementById("demo").innerHTML = error;

    }
    else if (password2 != password){
      var wrong = new Audio();
      wrong.src='wrong-buzzer-6268.mp3';
      wrong.play();
      document.getElementById("demo").innerHTML = wrong;
        document.getElementById("demo").innerHTML = passW;

    }
    else{

      var audio = new Audio();
      audio.src = 'announcement-sound-4-21464.mp3';
      audio.play();
		document.getElementById("demo").innerHTML = audio;
        document.getElementById("demo").innerHTML = correct;
    }
}
function myFun() {
    let x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function myFunction() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }}
