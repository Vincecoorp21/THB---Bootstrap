let name = document.getElementById('name');
let mail = document.getElementById('email');
let pass1 = document.getElementById('pwd1');
let pass2 = document.getElementById('pwd2');
let submit = document.getElementById('submit');
let msg = document.getElementById('message');
//let myform = document.getElementById('my-form');
// let valpass = ^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$.test(pass1.value);

console.log(submit);
console.log(msg);

// submit.addEventListener('click', fsubmit);

/******ADEVENTLISTENER EN FORM**********/

submit.addEventListener('click', fvalidate);

let users = [];
console.log(users);

/***************FUNCION VALIDACION**********/

function fvalidate(e) {
  e.preventDefault();
  if (
    name.value === '' ||
    mail.value === '' ||
    pass1.value === '' ||
    pass2.value === ''
  ) {
    msg.innerHTML = 'Please enter all fields';
  } else if (/(\w+?@\w+?\x2E.+)/.test(mail.value) !== true) {
    msg.innerHTML = 'Please enter a correct email';
  } else if (pass1.value !== pass2.value) {
    msg.innerHTML = 'Las dos contraseñas no son iguales';
    // } else if ( ^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$.text(pass1.value) !== true){
    //   msg.innerHTML = 'Mínimo 8 caracteres, al menos una letra y un número'
    // }
  } else {
    msg.innerHTML = "Yeah, it's perfect!";
  }
  setTimeout(() => {
    msg.innerHTML = '';
  }, 3000);

  fsubmit();
}

/*************FUNCIÓN AÑADIR USUARIOS*************/
function fsubmit(j) {
  j.preventDefault();
  let users2 = {
    name: name.value,
    email: mail.value,
    pasword1: pass1.value,
    password2: pass2.value,
  };
  users.push(users2);
  localStorage.setItem('users', JSON.stringify(users));
}

/************FUNCION MOSTRAR USUARIOS*********************/
