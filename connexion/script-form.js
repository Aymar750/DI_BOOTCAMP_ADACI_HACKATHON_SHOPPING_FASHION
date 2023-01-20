let form = document.forms[0];
let nom_prenom = form.elements.nom_prenom;
let email = form.elements.email;
let pwd = form.elements.password;
let pwdconfirm = form.elements.pwdconfirm;
let tel = form.elements.telephone;
let ville = form.elements.ville;


//inscription


function inscription() {
  if (
    nom_prenom.value === "" &&
    email.value == "" &&
    pwd.value == "" &&
    pwdconfirm == "" &&
    tel.value == "" &&
    ville.value == "" &&
    tel.value == Number
  ) {
    window.location.href = "inscription.html";
    nom_prenom.placeholder.style.color = "red";
    alert("remplisser les champs vides");
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
      : alert("mot de passe erroner");
  }
}
// let button1 = document.querySelector("#btn1");
// button1.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (
//     nom_prenom.value === "" &&
//     email.value == "" &&
//     pwd.value == "" &&
//     pwdconfirm == "" &&
//     tel.value == "" &&
//     ville.value == "" &&
//     tel.value == Number
//   ) {
//     window.location.href = "inscription.html";
//     nom_prenom.placeholder.style.color = "red";
//     alert("remplisser les champs vides");
//   } else {
//     console.log((email = email.value));
//     pwd = pwd.value;
//     pwdconfirm = pwdconfirm.value;
//     localStorage.setItem("pwd", pwd);
//     localStorage.getItem("pwd");
//     localStorage.setItem("email", email);
//     localStorage.getItem("email");
//     pwd === pwdconfirm
//       ? (window.location.href = "connexion.html")
//       : alert("mot de passe erroner");
//   }
// });
let button2 = document.getElementById("btn2");
let connexion_email = document.getElementById("connexion_email");
let connexion_password = document.getElementById("connexion_password");

//connexion

button2.addEventListener("click",  (e)=> {
  e.preventDefault();

  pwd.value;
  pwdconfirm = pwdconfirm.value;
  localStorage.setItem("connexion_password", connexion_password);
  localStorage.setItem("connexion_email", connexion_email);

  localStorage.getItem("connexion_password");
  localStorage.getItem("connexion_email");

  if (
    connexion_email == "" ||
    (connexion_password == "" &&
      connexion_password === pwd &&
      connexion_email === email)
  ) {
  } else {
    console.log("desole!");
  }
});



//console.log(connexion_email.value);
// fonction pour verifier les donnee de connexion

// ///x.placeholder.style.color="red";
// let plhd = document.querySelector("#all-name")
// function valeur(){
//     plhd.placeholder.style.backgroundColor="red"
// }
