const template = `
<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .nav-item{float:right;right: 0px;}
  .my-icon{float: right;margin: 0px 10px 0px 10px;}
    #gal_img,.gal_img{
    height:10em;
    width: 20em;
    margin: 7px;
  }
  .chkbut{padding:4px;}
  .my-btn{margin: 10px;}
.fixed{
  display: block;
  position: fixed;
  z-index: 99;
  margin-top: 4em;
  width: 100%;
  padding: 20px;
  background-color: #fff;
}
@media only screen and (max-width: 800px) {
  .collapse ul{background-color: white;width: 100%;}
  /* .nav-item{background-color:black;} */
  .nav-link h4{color:black;margin-left: 1em;}
  }
.card{margin-top: 0px;margin-bottom: 0px;}
.dp{
  width: auto;
  height: inherit;
  border-radius: 100%;
  position: relative;
  padding-bottom: 8px;
  float: right;
  padding-top: 3px;
}
#naam{margin-right: 2em;margin-left: .5em;}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#343A40;
  color: white;
  text-align: left;
}
.footer p{
  margin: 5px;
  vertical-align: middle;
}
.footer a{
  color:white;
}
.footer a:hover{
color:grey;
}
</style>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#"><h3>Contrivers Admin</h3></a>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><h4>Home</h4> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="admin_add.html"><h4>Add</h4></a>
            </li>
          </ul>
        </div>
         <img class="dp" src="https://i1.sndcdn.com/artworks-000421555080-up93x9-t500x500.jpg">
         <button style="background-color: #343A40;float: right;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div class="fixed" onkeyup="tagit(event)">
        <span id="khaali">All tags : </span><div class="chips chips-initial">
          </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    <div class="accordion" id="accordionExample">
    </div>
    <br><br>
    <div class="footer">
  <p>Designed & Developed by <strong><a href="https://instagram.com/contrivers_512?igshid=196g7fuo2qb7x">CONTRIVERS</a></strong> <a href="https://wa.me/message/VKCHPDT6E5XHJ1" style="float: right; margin-right: 1em;">Help!</a></p>
</div>
`

initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var photoURL = user.photoURL;
            user.getIdToken().then(function(accessToken) {
              read();
              re_tag();
              addit();
              document.querySelector("body").innerHTML = template;
              $(".dp").attr("src",photoURL)
            });
          } else{
            document.querySelector("body").innerHTML = ` <div class="jumbotron jumbotron-fluid container" style="margin-top: 20vh;">
                <div class="container">
                  <h1 class="display-4">Fuck u bro !!</h1>
                  <p class="lead">We have your login credentials we are reaching u soon.</p>
                </div>
              </div>`
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });