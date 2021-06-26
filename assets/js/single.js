firebase.initializeApp({
  apiKey: "AIzaSyAxRCFcOEBEp0IwbiNkpabK9UjrAiYGb4Q",
  authDomain: "contriversdev.firebaseapp.com",
  projectId: "contriversdev",
  storageBucket: "contriversdev.appspot.com",
  messagingSenderId: "1019807225038",
  appId: "1:1019807225038:web:27e3161c49b943b2abac9f",
  measurementId: "G-S162K48CSL"
});

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

class fetchSingle {
	constructor(id){
		this.imgs = [];
		this.keywords = null;
		this.name = null;
		this.category = null;
		this.client = null;
		this.date = null;
		this.link = null;
		this.descrip = null;
		this.id = id;
		this.gallery = $(".galleryitems");
		this.head = $("#fetchedTitle");
		this.title = $("#mainTitle");
		this.pageDescrip = $("#fetchedDesc");
		this.pageCatgory = $("#category");
		this.pageClient = $("#client");
		this.pageDate = $("#date");
		this.pageLink = $("#link");
	}

	fetchFromStore(){
		var db = firebase.firestore();
		db.collection("projects").doc(this.id).get().then((doc) => {
		    if (doc.exists) {
				this.imgs.push(doc.data().cover);
				this.keywords = doc.data().tags.join(", ");
				this.name = doc.data().name;
				this.category = doc.data().category;
				this.descrip = doc.data().descrip;
				this.client = doc.data().client;
				this.date = doc.data().date;
				this.link = doc.data().link;
				doc.data().gallery.forEach(item => {this.imgs.push(item)});
				this.renderproject(doc);

		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
		}).catch((error) => {
		    console.log("Error getting document:", error);
		});
	}

	renderproject(doc){

		document.querySelector('meta[name="keywords"]').setAttribute("content", this.keywords);
		document.querySelector('meta[name="description"]').setAttribute("content", "Project by Contrivers for "+this.name+" : "+this.descrip);
		document.title = "Project by Contrivers for "+this.name
		this.head.append(this.name);
		this.title.append(this.name);
		this.pageDescrip.append(this.descrip);
		this.pageCatgory.append(this.category);
		this.pageClient.append(this.client);
		this.pageDate.append(this.date);
		this.pageLink.append(this.link);
		this.pageLink.attr("href",this.link);

		this.imgs.forEach(item => {
			let code = `<div class="swiper-slide">
		                  <img onmouseover="scrollu(true)" onmouseout="scrollu(false)" src="`+item+`" alt="image of name `+item+` of project named `+this.name+`">
		                </div>`;

		    this.gallery.append(code);
		})

		 var swiper = new Swiper(".project-swiper", {
		        slidesPerView: 1,
		        spaceBetween: 30,
		        loop: true,
		        autoplay: {
		                    delay: 5000,
		                  },
		        loopFillGroupWithBlank: true,
		        centeredSlides: true,
		        pagination: {
		          el: ".swiper-pagination",
		          clickable: true,
		        },
		      });

	}

};

let pushProject = new fetchSingle(id);
pushProject.fetchFromStore();

scrollu = (bool) => {

	if (bool){$(".galleryitems img").css("height","auto")}
	else {$(".galleryitems img").css("height","75vh")}


}

class related {
  constructor(){
    this.projContainer = $(".related-items");
    this.relateditems = null;
  }

  projectsFromStore(){
    var db = firebase.firestore();
    db.collection("mediatags").where("ids", "array-contains", id).where("category","==",true).get().then((snapshot) => {
      snapshot.docs.forEach((cat) =>{
          this.relateditems = cat.data().ids
          const index = this.relateditems.indexOf(id);
					if (index > -1) {
					  this.relateditems.splice(index, 1);
					}
          this.callProjects();
      })


  });
     return Promise.resolve("Success");
  };

  callProjects(){

  	    var db = firebase.firestore();
  	    this.relateditems.forEach(el => {

		    		var db = firebase.firestore();
						db.collection("projects").doc(el).get().then((doc) => {
						    if (doc.exists) {
						    	this.addProject(doc);
						    } else {
						        // doc.data() will be undefined in this case
						        console.log("No such document!");
						    }
						}).catch((error) => {
						    console.log("Error getting document:", error);
						});

  	    })

  }

  addProject(doc){
    let name = doc.data().name
    let cover = doc.data().cover
    let id = doc.id
    let code = `
      <div class="col-lg-4 col-md-6 portfolio-item">
            <div class="portfolio-img"><img src="`+cover+`" onload="endstarter()" onerror="endstarter()" class="img-fluid" alt=""></div>
            <div class="portfolio-info">
              <h4>`+name+`</h4>
              <a href="./?of-name=`+name+`&id=`+id+`" class="details-link" title="More Details" ><small>Go to `+name+`</small><i class="bx bx-link"></i></a>
            </div>
          </div>
    `
    this.projContainer.append(code);
  };  


  }


let relatedprojects = new related();
relatedprojects.projectsFromStore()

function endstarter(){

	$("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");
	$("#preloader").fadeOut("slow"); 

}


// window.addEventListener('load', () => {
// 	      $("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");$("#preloader").fadeOut("slow"); 
// 	    });