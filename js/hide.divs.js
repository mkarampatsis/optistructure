
document.getElementById("holistic").style.display = "none";
document.getElementById("life-cycle").style.display = "none";
document.getElementById("construction").style.display = "none";
document.getElementById("solutions").style.display = "none";

var divs = ["holistic", "life-cycle", "construction", "solutions"]

function showActivity(id){
	for ( let div of divs)
		document.getElementById(div).style.display = "none";
	
	document.getElementById(id).style.display = "block";
}
