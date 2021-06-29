const scrollu = (bool) => {

	if (bool){$(".galleryitems img").css("height","auto")}
	else {$(".galleryitems img").removeAttr('style')}


}

function endstarter(){

	$("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");
	$("#preloader").fadeOut("slow"); 

}

var projswiper = new Swiper(".showcase", {
		slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });


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


showCase = cat => {

	$(".category").fadeOut();
	$(".exhibition").fadeIn(2000);
	$(`.exhibition header li a#${cat}`).addClass('active');
  try {
    seggregator(cat);
  }
  catch(err) {
    console.log("Sorry, currently we don't have projects on this.");
  }

}

$(`.exhibition header li a`).click((event) => {

	event.preventDefault();
	$(`.exhibition header li a`).removeClass();
	event.target.className = "active";
  try {
    seggregator(event.target.getAttribute( 'id' ));

  }
  catch(err) {
    console.log("Sorry, currently we don't have projects on this.");
  }

})

var db = firebase.firestore();
var myStore = {};
var mapper = {};

db.collection("mediatags").where("tags","==",false).get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    let key = doc.id;
    let data = doc.data().ids
    mapper[key] =  data;

  })

})

db.collection("projects").get().then((snapshot) => {

  snapshot.docs.forEach(el => {

    let key = el.id;
    let data = el.data();
    myStore[key] =  data;

  })


  let dataid = []
  snapshot.docs.forEach(el => {

    dataid.push(el.id);

  })
  mapper["all"] = dataid;
  endstarter();

});

function seggregator( para ) {

  $(".swiper-wrapper").empty();
  $(".casepreloader").css("display","block");
  $(".showcase").css("display","none");

  mapper[ para ].forEach(el => {

    let arr = [];
    arr.push(myStore[el].cover);
    myStore[el].gallery.forEach( img => {

      arr.push(img);

    } );

    let temp = "";
    let real = "";

    arr.forEach(item => {
      let code = `<div class="swiper-slide">
                      <img onmouseover="scrollu(true)" onmouseout="scrollu(false)" src="`+item+`" alt="image of name `+item+` of project named `+this.name+`">
                    </div>`;

        temp = real + code;
        real = temp;

    })

    let load = `
      <section id="portfolio-details" class="portfolio-details swiper-slide">
        <div class="container">

          <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper-container project-swiper">
            <div class="align-items-top galleryitems swiper-wrapper">
              ${real}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: <span id="category">${myStore[el].category}</span></li>
                  <li><strong>Client</strong>: <span id="client">${myStore[el].client}</span></li>
                  <li><strong>Project date</strong>: <span id="date">${myStore[el].date}</span></li>
                  <li><strong>Project URL</strong>: <a href="${myStore[el].link}" target="_blank" id="link">${myStore[el].category}</a></li>
                </ul>
              </div>
              <div class="portfolio-description">
                <h2 id="mainTitle">${myStore[el].name} </h2>
                <p id="fetchedDesc">${myStore[el].descrip}</p>
              </div>
            </div>

          </div>

        </div>
      </section>`


    $(".exhibition .showcase .swiper-wrapper").append(load);

  })

  $(document).ready(function() {
       $(".casepreloader").css("display","none");
       $(".showcase").css("display","block");
       projswiper.update();
    })
  projswiper.update();
  swiper.update();

}




// class myStore {

//   constructor (){



//   }

// }
    // db.collection("mediatags")       

