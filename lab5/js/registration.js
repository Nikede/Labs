function checkEmail(str) {
  var result = str.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    setFalseEmail(str.length === 0);
    return false;
  }
  setTrueEmail();
  return true;
}

function checkPassword(pass, confirm) {
  if (pass.length < 6) {
    return onBlurCheckPassword(pass, confirm, true);
  }
  if (pass !== confirm) {
    return onBlurCheckPassword(pass, confirm, false);
  }
  return true;
}

function checkAgreementRules() {
  var result = document.getElementsByClassName("registration_check_confirmation")[0].checked;
  if (!result) {
    setFalseAgreementRules();
    return false;
  }
  setTrueAgreementRules();
  return true;
}

function checkPhone(phone) {
  if (phone.length < "+7 (999) 999-99-99".length || phone.indexOf("_") >= 0) {
    setFalsePhone();
    return false;
  } else {
    setTruePhone();
    return true;
  }
}

function registration() {
  var email = document.getElementsByClassName("registration_login")[0].value;
  var pass = document.getElementsByClassName("password_block_password")[0].value;
  var passConfirm = document.getElementsByClassName("password_block_password_repeat")[0].value;
  var phone = document.getElementById("phone").value;
  if (checkEmail(email) && checkPassword(pass, passConfirm) && checkAgreementRules() && checkPhone(phone)) {
    alert("Регистрация прошла успешно!");
    return true;
  }
  checkPassword(pass, passConfirm);
  checkAgreementRules();
  checkPhone(phone);
  return false;
}

function setFalseEmail(empty) {
  document.getElementsByClassName("registration_login")[0].style.background = "red";
  if (empty) {
    document.getElementsByClassName("registration_text_email")[1].innerHTML = "Поле обязательно к заполнению!";
  } else {
    document.getElementsByClassName("registration_text_email")[1].innerHTML = "Неверно указан e-mail";
  }
}

function setTrueEmail() {
  document.getElementsByClassName("registration_login")[0].style.background = "#535b63";
  document.getElementsByClassName("registration_text_email")[1].innerHTML = "";
}

function setFalseAgreementRules() {
  document.getElementsByClassName("registration_check_confirmation")[1].innerHTML = "Для регистрации необходимо принять условия и правила сайта";
}

function setTrueAgreementRules() {
  document.getElementsByClassName("registration_check_confirmation")[1].innerHTML = "";
}

function setFalsePass(empty) {
  document.getElementsByClassName("password_block_password")[0].style.background = "red";
  if (empty) {
    document.getElementsByClassName("password_block_text_password")[1].innerHTML = "Поле обязательно к заполнению!";
  } else {
    document.getElementsByClassName("password_block_text_password")[1].innerHTML = "Длина пароля должна быть не менее 6-ти символов";
  }
}

function setTruePass() {
  pass = document.getElementsByClassName("password_block_password")[0];
  pass.style.background = "#535b63";
  document.getElementsByClassName("password_block_text_password")[1].innerHTML = "";
}

function setFalseConfirmPass() {
  document.getElementsByClassName("password_block_password_repeat")[0].style.background = "red";
  document.getElementsByClassName("password_block_text_password_confirmation")[1].innerHTML = "Пароли не совпадают";
}

function setTrueConfirmPass() {
  document.getElementsByClassName("password_block_password_repeat")[0].style.background = "#535b63";
  document.getElementsByClassName("password_block_text_password_confirmation")[1].innerHTML = "";
}

function setFalsePhone() {
  document.getElementById("phone").style.background = "red";
  document.getElementsByClassName("registration_text_email")[3].innerHTML = "Поле обязательно к заполнению!";
}

function setTruePhone() {
  document.getElementById("phone").style.background = "#535b63";
  document.getElementsByClassName("registration_text_email")[3].innerHTML = "";
}

function onBlurCheckPassword(pass, confirm, onPass) {
  if (pass.length < 6 && onPass) {
    if (pass.length === 0) {
      setFalsePass(true);
    } else {
      setFalsePass(false);
    }
    return false;
  }
  if (pass !== confirm && !onPass) {
    setFalseConfirmPass();
    return false;
  }
  return true;
}

document.getElementsByClassName("password_block_password")[0].onblur = function () {
  onBlurCheckPassword(document.getElementsByClassName("password_block_password")[0].value,
    document.getElementsByClassName("password_block_password_repeat")[0].value,
    true)
}

document.getElementsByClassName("password_block_password")[0].onfocus = function () {
  setTruePass();
}

document.getElementById("phone").onblur = function () {
  checkPhone(document.getElementById("phone").value);
}

document.getElementById("phone").onfocus = function () {
  setTruePhone();
}

document.getElementsByClassName("password_block_password_repeat")[0].onblur = function () {
  onBlurCheckPassword(document.getElementsByClassName("password_block_password")[0].value,
    document.getElementsByClassName("password_block_password_repeat")[0].value,
    false)
}

document.getElementsByClassName("password_block_password_repeat")[0].onfocus = function () {
  setTrueConfirmPass();
}

document.getElementsByClassName("registration_login")[0].onblur = function () {
  checkEmail(document.getElementsByClassName("registration_login")[0].value)
}

document.getElementsByClassName("registration_login")[0].onfocus = function () {
  setTrueEmail();
}

document.getElementsByClassName("registration_check_confirmation")[0].onchange = function () {
  checkAgreementRules();
}

document.getElementsByClassName("registration_button")[0].onclick = function () {
  window.location.href = "autorisation.html";
}

document.getElementsByClassName("registration_button")[1].onclick = function () {
  return registration();
};