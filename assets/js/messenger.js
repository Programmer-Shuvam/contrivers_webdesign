function sendEmail() {
      event.preventDefault()
      $("#mail-form .loading").css("display","block");
      let name = $('#formname').val();
      let email = $('#formemail').val();
      let subject = $('#formsubject').val();
      let message = $('#formmessage').val();

      Email.send({
        Host: "smtp.gmail.com",
        Username: "contact.contrivers@gmail.com",
        Password: "Babu@Bubuaugjan3002",
        To: 'contrivers512@gmail.com',
        From: email,
        Subject: subject,
        Body: message,
      })
        .then(function (message) {
          $("#mail-form .loading").css("display","none");
          $("#mail-form .sent-message").css("display","block");
          setTimeout(function(){ 
            $("#mail-form .sent-message").css("display","none");
            let name = $('#formname').val("");
            let email = $('#formemail').val("");
            let subject = $('#formsubject').val("");
            let message = $('#formmessage').val("");

           }, 3000);
        })
        .catch(error => {
          $("#mail-form .error-message").css("display","none");
          $("#mail-form .error-message").append("Something went wrong!");
        });
    }