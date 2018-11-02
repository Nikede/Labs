function checkEmail(str) {
  var result = str.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    setFalseEmail(str.length === 0);
    return false;
  }
  setTrueEmail();
  return true;
}

function checkPassword(pass) {
  if (pass.length < 6) {
    setFalsePass(pass.length === 0);
    return false;
  }
  setTruePass();
  return true;
}

function checkPhone(phone) {
  if ((phone.length < "+7 (999) 999-99-99".length || phone.indexOf("_") >= 0)) {
    setFalsePhone();
    return false;
  } else {
    setTruePhone();
    return true;
  }
}

function autorisation() {
  var email = document.getElementsByClassName("registration_login")[0].value;
  var pass = document.getElementsByClassName("password_block_password")[0].value;
  var phone = document.getElementById("phone").value;
  if ((checkEmail(email) || checkPhone(phone)) && checkPassword(pass)) {
    alert("Вы вошли!");
    return true;
  }
  checkPassword(pass);
  checkPhone(phone);
  checkPhone(phone);
  return false;
}

function setFalseEmail(empty) {
  document.getElementsByClassName("registration_login")[0].style.background = "red";
  if (empty) {
    document.getElementsByClassName("registration_text_email")[1].innerHTML = "Небходимо заполнить поле e-mail или номер телефона";
  } else {
    document.getElementsByClassName("registration_text_email")[1].innerHTML = "Неверно указан e-mail";
  }
}

function setTrueEmail() {
  document.getElementsByClassName("registration_login")[0].style.background = "#535b63";
  document.getElementsByClassName("registration_text_email")[1].innerHTML = "";
}

function setFalsePass(empty) {
  document.getElementsByClassName("password_block_password")[0].style.background = "red";
  if (empty) {
    document.getElementsByClassName("password_block_text_password")[1].innerHTML = "Поле обязательно к заполнению!";
  } else {
    document.getElementsByClassName("password_block_text_password")[1].innerHTML = "Неверный пароль!";
  }
}

function setTruePass() {
  pass = document.getElementsByClassName("password_block_password")[0];
  pass.style.background = "#535b63";
  document.getElementsByClassName("password_block_text_password")[1].innerHTML = "";
}

function setFalsePhone() {
  document.getElementById("phone").style.background = "red";
  document.getElementsByClassName("registration_text_email")[3].innerHTML = "Небходимо заполнить поле e-mail или номер телефона";
}

function setTruePhone() {
  document.getElementById("phone").style.background = "#535b63";
  document.getElementsByClassName("registration_text_email")[3].innerHTML = "";
}

document.getElementsByClassName("password_block_password")[0].onblur = function () {
  checkPassword(this.value);
}

document.getElementsByClassName("password_block_password")[0].onfocus = function () {
  setTruePass();
}

document.getElementById("phone").onblur = function () {
  checkPhone(document.getElementById("phone").value);
}

document.getElementById("phone").onfocus = function () {
  setTrueEmail();
  setTruePhone();
}

document.getElementsByClassName("registration_login")[0].onblur = function () {
  checkEmail(document.getElementsByClassName("registration_login")[0].value);
}

document.getElementsByClassName("registration_login")[0].onfocus = function () {
  setTrueEmail();
  setTruePhone();
}

document.getElementsByClassName("registration_button")[0].onclick = function () {
  return autorisation();
};