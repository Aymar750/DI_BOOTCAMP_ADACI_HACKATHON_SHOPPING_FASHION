let form = document.forms[0];
let nom_prenom = form.elements.nom_prenom;
let email = form.elements.email;
let pwd = form.elements.pwd;
let pwdconfirm = form.elements.pwdconfirm;
let tel = form.elements.telephone;
let ville = form.elements.ville;

let button1 = document.querySelector("#btn1");
button1.addEventListener( "click", function(ev) { ev.preventDefault();
  if (nom_prenom.value === "" && email.value == "" && pwd.value=="" && pwdconfirm=="" && tel.value=="" && ville.value=="" && tel.value ==Number) {
    window.location.href = "inscription.html";
    nom_prenom.placeholder.style.color = "red"
    alert("remplisser les champs vides")
  } else {
    console.log((email = email.value));
    pwd = pwd.value;
    pwdconfirm = pwdconfirm.value;
    localStorage.setItem("pwd", pwd);
    localStorage.getItem("pwd");
    localStorage.setItem("email", email);
    localStorage.getItem("email");
    pwd === pwdconfirm
      ? (window.location.href = "connexion.html")
      : alert("Sory Mr");
  }
});

let connexion_email = document.getElementById("connexion_email");
let connexion_password = document.getElementById("connexion_password");

let button2 = document.getElementById("btn2");
connexion_email = connexion_email.value;
connexion_password = connexion_password.value;

console.log(connexion_email.value);
// fonction pour verifier les donnee de connexion

button2.addEventListener("click", function (evt) {
  evt.preventDefault();

  pwd = pwd.value;
  pwdconfirm = pwdconfirm.value;
  localStorage.setItem("connexion_password", connexion_password);
  localStorage.setItem("connexion_email", connexion_email);

  localStorage.getItem("connexion_password");
  console.log(localStorage.getItem("connexion_email"));

  if (
    connexion_email == "" ||
    (connexion_password == "" &&
      connexion_password === pwd &&
      connexion_email === email)
  ) {
    window.location.href = "index.html";
  } else {
    console.log("desole!");
  }
});