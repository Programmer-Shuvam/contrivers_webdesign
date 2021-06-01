<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "contrivers512@gmail.com";
$subject = $_POST['subject'];
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@contrivers.forms.com" . "\r\n" .
"CC: noreply@contrivers.forms.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    header("Location:https://programmer-shuvam.github.io/contrivers_webdesign/index.html");
}
//redirect

?>