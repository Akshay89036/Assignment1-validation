let formGroupExampleInput = document.getElementById("formGroupExampleInput");
let formGroupExampleInput2 = document.getElementById("formGroupExampleInput2");
let error = document.getElementById("error")
let error1 = document.getElementById("error1")
let check1 = false;
let check2 = false;

function validate() {

  let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,5})(.[a-z]{2,3})?$/;

  let regexppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!regexp.test(formGroupExampleInput.value)) {
    error.innerText = "enter a valid email id";
    error.style.color = "red";
    return false;
  }
  else {
    error.innerHTML = ""
    check1 = true;
  }


  if (!regexppass.test(formGroupExampleInput2.value)) {
    error1.innerText = "enter a valid password";
    error1.style.color = "red";
    return false;
  }
  else {
    error1.innerHTML = ""
    check2 = true;
  }

  if (check1 && check2) {
    return true;
  }

}


let formGroupExampleInput3 = document.getElementById("inputEmail4");
let formGroupExampleInput4 = document.getElementById("inputPassword4");
let formGroupExampleInput5 = document.getElementById("inputAddress");
let formGroupExampleInput6 = document.getElementById("inputcity");
let formGroupExampleInput7 = document.getElementById("inputnumber");
let formGroupExampleInput8 = document.getElementById("inputZip");

let error3 = document.getElementById("error3")
let error4 = document.getElementById("error4")
let error5 = document.getElementById("error5")
let error6 = document.getElementById("error6")
let error7 = document.getElementById("error7")
let error8 = document.getElementById("error8")

let check3 = false;
let check4 = false;
let check5 = false;
let check6 = false;
let check7 = false;
let check8 = false;


function signvalidate() {

  let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,5})(.[a-z]{2,3})?$/;

  // let regexppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  let regexppass = /^([a-z\.-]+){8,20}$/;

  let regexaddress = /^([a-zA-Z0-9\.\,\ -]+){1,40}$/;

  let regexcity = /^([a-zA-Z0-9\.,-]){2,15}$/;

  let regexnumber = /^([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  let regexpin = /^([0-9\.-]){6}$/;

  let strongregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  let mediumregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  let poorregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  if (!regexp.test(formGroupExampleInput3.value)) {
    error3.innerText = "enter a valid email id";
    error3.style.color = "red";
    check3 = false;
  }
  else {
   
    error3.innerHTML = ""
    check3 = true;
  }







  if (!poorregex.test(formGroupExampleInput4.value)) {
    error4.innerText = "enter a strong password";
    error4.style.color = "red";
    formGroupExampleInput4.style.borderColor = "red"
    check4 = false;
  }

  else if (!strongregex.test(formGroupExampleInput4.value)) {
    error4.innerText = "medium password";
    error4.style.color = "orange";
    formGroupExampleInput4.style.borderColor = "orange"
    check4 = false;

  }

  else if (!mediumregex.test(formGroupExampleInput4.value)) {
    error4.innerText = "strong password";
    error4.style.color = "green";
    formGroupExampleInput4.style.borderColor = "green"
    check4 = false;
  }

  else {
    formGroupExampleInput4.style.borderColor = "black"
    error4.innerHTML = ""
    check4 = true;
  }








  if (!regexaddress.test(formGroupExampleInput5.value)) {
    error5.innerText = "enter a valid address";
    error5.style.color = "red";
    check5 = false;
  }
  else {
    error5.innerHTML = ""
    check5 = true;
  }
  if (!regexcity.test(formGroupExampleInput6.value)) {
    error6.innerText = "enter a City name";
    error6.style.color = "red";
    check6 = false;

  }
  else {
    error6.innerHTML = ""
    check6 = true;
  }

  if (!regexnumber.test(formGroupExampleInput7.value)) {
    error7.innerText = "enter a valid number";
    error7.style.color = "red";
    check7 = false;

  }
  else {
    error7.innerHTML = ""
    check7 = true;
  }

  if (!regexpin.test(formGroupExampleInput8.value)) {
    error8.innerText = "enter a valid pincode";
    error8.style.color = "red";
    check8 = false;

  }
  else {
    error8.innerHTML = ""
    check8 = true;
  }

  if (check3 && check4 && check5 && check6 && check7 && check8) {
    return true;
  }
  else{
    return false;
  }

}

