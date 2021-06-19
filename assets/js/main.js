
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  // /**
  //  * Easy on scroll event listener 
  //  */
  // const onscroll = (el, listener) => {
  //   el.addEventListener('scroll', listener)
  // }

  // /**
  //  * Navbar links active state on scroll
  //  */
  // let navbarlinks = select('aloo', true)
  // const navbarlinksActive = () => {
  //   let position = window.scrollY + 200
  //   navbarlinks.forEach(navbarlink => {
  //     if (!navbarlink.hash) return
  //     let section = select(navbarlink.hash)
  //     if (!section) return
  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active')
  //     } else {
  //       navbarlink.classList.remove('active')
  //     }
  //   })
  // }
  // window.addEventListener('load', navbarlinksActive)
  // onscroll(document, navbarlinksActive)

  // /**
  //  * Scrolls to an element with header offset
  //  */
  // const scrollto = (el) => {
  //   let header = select('#header')
  //   let offset = header.offsetHeight

  //   let elementPos = select(el).offsetTop
  //   window.scrollTo({
  //     top: elementPos - offset,
  //     behavior: 'smooth'
  //   })
  // }

  // /**
  //  * Toggle .header-scrolled class to #header when page is scrolled
  //  */
  // let selectHeader = select('#header')
  // if (selectHeader) {
  //   const headerScrolled = () => {
  //     if (window.scrollY > 100) {
  //       selectHeader.classList.add('header-scrolled')
  //     } else {
  //       selectHeader.classList.remove('header-scrolled')
  //     }
  //   }
  //   window.addEventListener('load', headerScrolled)
  //   onscroll(document, headerScrolled)
  // }

  // /**
  //  * Back to top button
  //  */
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add('active')
  //     } else {
  //       backtotop.classList.remove('active')
  //     }
  //   }
  //   window.addEventListener('load', toggleBacktotop)
  //   onscroll(document, toggleBacktotop)
  // }

  // /**
  //  * Mobile nav toggle
  //  */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  // /**
  //  * Mobile nav dropdowns activate
  //  */
  // on('click', '.navbar .dropdown > a', function(e) {
  //   if (select('#navbar').classList.contains('navbar-mobile')) {
  //     e.preventDefault()
  //     this.nextElementSibling.classList.toggle('dropdown-active')
  //   }
  // }, true)

  // /**
  //  * Scrool with ofset on links with a class name .scrollto
  //  */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)

  // /**
  //  * Scroll with ofset on page load with hash links in the url
  //  */
  // window.addEventListener('load', () => {
  //   if (window.location.hash) {
  //     if (select(window.location.hash)) {
  //       scrollto(window.location.hash)
  //     }
  //   }
  // });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      $(".pre-img").css("animation","slideup 1.5s 1 ease-in-out forwards");
      $("#logo-svg").css("display","block");
      setTimeout(() => {
        $("#preloader").css("animation","scale-fade 1s 1 ease-in-out forwards");
       $("#preloader").fadeOut("slow"); 
     }, 5000);
    });
  }


// $("#preloader").fadeOut("slow");
  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
      


  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
function filtering(x){
  
  $(".filter-active").removeClass('filter-active');
  $("#"+x).addClass('filter-active');
  $(".portfolio-item").hide("ease-in-out");
  $("."+x).show("ease-in-out");

}
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

const refresher = (x) => {console.log(x);AOS.refresh()};





class svg_opti {

  constructor(ele){

    this.ele =  ele;
    this.switch = false;

  }

  fuse(){

    if (this.switch){

      this.ele.css("animation-iteration-count","infinite");

    } else{

      this.ele.css("animation-iteration-count","0");

    }

  }

}


var coolsvg = new svg_opti($("#coolsvg *"));
var worksvg = new svg_opti($("#worksvg *"));
var londisvg = new svg_opti($("#londi *"));
var servesvg = new svg_opti($("#servesvg *"));
$("document").ready(function () {
  
  $('#coolsvg').waypoint({
      handler: function (direction) {

       
        var active = $(this);
        if (direction == "down") active = active.prev();
        if (coolsvg.switch){

          coolsvg.fuse();
          coolsvg.switch = false;

        } else{

          coolsvg.fuse();
          coolsvg.switch = true;

        }
      },
      offset: "-50%",
        context: "#main"
    });

    $('#worksvg').waypoint({
      handler: function (direction) {

       
        var active = $(this);
        if (direction == "down") active = active.prev();
        if (worksvg.switch){

          worksvg.fuse();
          worksvg.switch = false;

        } else{

          worksvg.fuse();
          worksvg.switch = true;

        }
      },
      offset: "-100%",
        context: "#main"
    });

      $('#londi').waypoint({
      handler: function (direction) {

        var active = $(this);
        if (direction == "down") active = active.prev();
        if (londisvg.switch){

          londisvg.fuse();
          londisvg.switch = false;

        } else{

          londisvg.fuse();
          londisvg.switch = true;

        }
      },
      offset: "-100%",
        context: "#main"
    });

      $('#servesvg').waypoint({
      handler: function (direction) {

       
        var active = $(this);
        if (direction == "down") active = active.prev();
        if (servesvg.switch){

          servesvg.fuse();
          servesvg.switch = false;

        } else{

          servesvg.fuse();
          servesvg.switch = true;

        }
      },
      offset: "-100%",
        context: "#main"
    });  


  $("#hero .container > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(1) a").attr("class","active");
        },

        offset : "0%",
        context: "#main"
        });  

  $("#about .container > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(2) a").attr("class","active");
        },

        offset : "10%",
        context: "#main"
        });

    $("#skills .container > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(3) a").attr("class","active");
          let progress = $('.progress .progress-bar');
          progress.toArray().forEach((el) => {
           $(el).css("width",$(el).attr("aria-valuenow")+"%")
          });
        },

        offset : "10%",
        context: "#main"
        });   


    $("#portfolio > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(4) a").attr("class","active");
        },

        offset : "10%",
        context: "#main"
        });  

    $("#team .container > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(5) a").attr("class","active");
        },

        offset : "10%",
        context: "#main"
        });               

    $("#contact .section-title").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(6) a").attr("class","active");
        },

        offset : "10%",
        context: "#main"
        });  

});



// var swiper = new Swiper($(".pricingswipe"), {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 30,
//         pagination: {
//           el: $(".swiper-pagination"),
//           clickable: true,
//         },
//       });