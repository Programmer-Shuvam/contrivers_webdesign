/******************************************************************************
 * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
 * But has been simplified and cleaned up to make it more beginner friendly   *
 * All credit still goes to Martin and any issues/complaints/questions to me. *
 ******************************************************************************/

// if you want to store your email server-side (hidden), uncomment the next line
// var TO_ADDRESS = "contrivers512@gmail.com";

// spit out all the keys/values from the form in HTML for email
// uses an array of keys if provided or the object to determine field order
// let forms = document.querySelectorAll('.php-email-form');
// forms.onsubmit = function(e){
//     event.preventDefault();
//     var xhttp = new XMLHttpRequest();
//     // xhttp.onreadystatechange = function() {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //     document.getElementById("demo").innerHTML = this.responseText;
//     //     }
//     // };
//     xhttp.open("POST", "https://script.google.com/macros/s/AKfycbyj76RooElV9hASL4y6lZUeSjMzl6ylogER56tBx5Gs6VWEz1g-wLCiPvU_C__UB2OoXQ/exec", true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send("name=shuvam&email=shuvamanupam7@gmail.com&subject=appreciation&message=thank_you");
// };