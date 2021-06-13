$(".servicessvg h4").text("chaman");

let feature = ["Data Acquistion", "Development", "Business Boost-Up", "Insight Analytics", "Re-evaluation of Data"]
var x = 0;
let space = $(".servicessvg h4")
space.fadeOut("slow");
function workchange(x){
	space.text(feature[x]);
	space.fadeIn("slow")
	setTimeout(() => {space.fadeOut("slow");},2000)
	setTimeout(function(){ 
		x = x + 1;
		if (x > 4) {

			x = 0;

		}
		workchange(x); 
	}, 4000);


};

workchange(x);