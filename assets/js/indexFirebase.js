firebase.initializeApp({
  apiKey: "AIzaSyAxRCFcOEBEp0IwbiNkpabK9UjrAiYGb4Q",
  authDomain: "contriversdev.firebaseapp.com",
  projectId: "contriversdev",
  storageBucket: "contriversdev.appspot.com",
  messagingSenderId: "1019807225038",
  appId: "1:1019807225038:web:27e3161c49b943b2abac9f",
  measurementId: "G-S162K48CSL"
});
const messaging = firebase.messaging();
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

invokemessages = () => {
  event.preventDefault()
  let newSubscriber = new secMessages();
  newSubscriber.applyfornotification();
}



class secMessages {
  constructor(name,email){
    this.name = $("#mce-FNAME").val();
    this.email = $("#mce-EMAIL").val();
    this.token = null;
  }

  applyfornotification(){
      event.preventDefault()
      messaging.getToken({vapidKey: "BFhXwPMVMteu5xUfAFcdzjHM_6tifrDY4Jox07IR9ZZDqALX_N-xPGZACLFxC1KpI3s9w7JGHAgGdCWNdAkPqHY"})
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          this.token = currentToken;
          this.userMessageIdtoFirebase();
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    };

  userMessageIdtoFirebase(){
    var db = firebase.firestore();
    db.settings({timestampsInSnapshots:true})
    db.collection("notification").add({
      name : this.name,
      email : this.email,
      token : this.token,
      showhim: true
  }).then(() => {
          console.log("Successfully Added notification.");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

  }  
};
class projectFromStore {
  constructor(){
    this.projContainer = $(".mainitems");
  }


  projectsFromStore(){

    var db = firebase.firestore();
    db.collection("projects").where("showit","==",true).get().then((snapshot) => {
      snapshot.docs.forEach((doc) =>{
          this.addProject(doc);
      })

      return true


  }).then(() => {

    var projectswipe = new Swiper(".projectswiper", {
            slidesPerView: slidesper,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            autoplay: {
                        delay: 5000,
                      },
            loopFillGroupWithBlank: true,
          });
    
    $(".pre-img").css("animation","slideup 1.5s 1 ease-in-out forwards");
    $("#logo-svg").css("display","block");
    setTimeout(() => {
      $("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");
      $("#preloader").fadeOut("slow");
      teamscroll(); 
    }, 5000);      

  }).catch((err) => {

    $(".portfolio").css("display","none");
    $(".pre-img").css("animation","slideup 1.5s 1 ease-in-out forwards");
    $("#logo-svg").css("display","block");
    setTimeout(() => {
      $("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");
      $("#preloader").fadeOut("slow"); 
    }, 5000);


  });
     return Promise.resolve("Success");
  };

  addProject(doc){
    let name = doc.data().name
    let cover = doc.data().cover
    let tags = doc.data().tags
    let id = doc.id
    let code = `
    <div class="swiper-slide">
          <div class="col-lg-4 col-md-6 portfolio-item filter-all filter-`+tags.join(" filter-")+`">
            <div class="portfolio-img"><img src="`+cover+`" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>`+name+`</h4>
              <a href="projects-by-contrivers?of-name=`+name+`&id=`+id+`" class="details-link" title="More Details" ><small>Go to `+name+`</small><i class="bx bx-link"></i></a>
            </div>
          </div>
    </div>
    `
    this.projContainer.append(code);
  };  


  }

  let pushToPorfolio = new projectFromStore();
  pushToPorfolio.projectsFromStore();