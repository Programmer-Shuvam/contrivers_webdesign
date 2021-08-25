  /**
   * Portfolio details slider
   */

const teamscroll = () =>{

  var teamslide = new Swiper(".teamslide", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

}

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

var proj_img = new svg_opti($(".portfolio  *"));
proj_img.fuse()
proj_img.switch = true;

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
      offset: "0%",
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
      offset: "-50%",
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
      offset: "-50%",
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
      offset: "-50%",
        context: "#main"
    });  
// $('.portfolio').waypoint({
//       handler: function (direction) {

       
//         var active = $(this);
//         if (direction == "down") active = active.prev();
//         if (proj_img.switch){

//           proj_img.fuse();
//           proj_img.switch = true;

//         } else{

//           proj_img.fuse();
//           proj_img.switch = false;

//         }
//       },
//       offset: "-50%",
//         context: "#main"
//     });  

  $("#hero .container > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(1) a").attr("class","active");
        },

        offset : "150%",
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

        offset : "25%",
        context: "#main"
        });   


    $("#portfolio > *").waypoint({

      handler : function(direction) {

          var active = $(this);
          if (["up", "down"].includes(direction)) active = active.prev();
          $(".navcontent ul li a.active").removeClass()
          $(".navcontent ul li:nth-child(4) a").attr("class","active");
          if (proj_img.switch){

            proj_img.fuse();
            proj_img.switch = false;

          } else{

            proj_img.fuse();
            proj_img.switch = true;

          }
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


if (screen.width > 768){

  var slidesper = 3;
} else {

  var slidesper = 1;

}


 var swiper = new Swiper(".mySwiper", {
        slidesPerView: slidesper,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });



document.getElementById("main").onscroll = () => {

  if (screen.height >= document.getElementById("main").scrollTop) {

     let x = document.getElementById('main').scrollTop / screen.height
     $("#hero .container").css({"transform":`scale3d(1,${1-x},1)`,"opacity":`${1-x}`})

  }

};
