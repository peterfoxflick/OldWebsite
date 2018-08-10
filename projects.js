// <div class="card">
// 	<img src="./media/projects/001.png">
// 	<h3>Card Title</h3>
// 	<p>A short description would go here and then who knows what would happen to the card. It could end up in outerspace for all I knew.</p>
// 	<div class="links"> 
// 		<a hreg="#" class="tooltip"><i class="fab fa-youtube"></i><span class="tooltiptext">YouTube Video</span></a>
// 		<a hreg="#" class="tooltip"><i class="fab fa-github"></i><span class="tooltiptext">Github Code</span></a>
// 		<a hreg="#" class="tooltip"><i class="fas fa-file-alt"></i><span class="tooltiptext">Instructions</span></a>
// 	</div>
// </div>


var data = [
	{
		name: "Ikea Hacks",
		des: "A short description would go here and then who knows what would happen to the card. It could end up in outerspace for all I knew." ,
		img: "./media/projects/001.png",
		vid: "#" ,
		git: "#" ,
		inst: "#"
	} ,
	{
		name: "Ikea Hacks",
		des: "A short description would go here and then who knows what would happen to the card. It could end up in outerspace for all I knew." ,
		img: "./media/projects/001.png",
		vid: "#" ,
		git: "#" ,
		inst: "#"
	} ,
	{
		name: "Ikea Hacks",
		des: "A short description would go here and then who knows what would happen to the card. It could end up in outerspace for all I knew." ,
		img: "./media/projects/001.png",
		vid: "#" ,
		git: "#" ,
		inst: "#"
	} 
]


function popProjects() {
	var output = "";
	for (var i = data.length - 1; i >= 0; i--) {
		output += '<div class="card">';

		if (data[i].img) {
			output += '<img src="' + data[i].img + '">';
		}

		output += '<h3>' + data[i].name + '</h3>';

		if (data[i].des) {
			output += '<p>' + data[i].des + '</p>';
		}
		output += '<div class="links">';
		if (data[i].vid) {
			output += '<a hreg="' + data[i].vid + '" class="tooltip"><i class="fab fa-youtube"></i><span class="tooltiptext">YouTube Video</span></a>';
		}
		if (data[i].git) {
			output += '<a hreg="' + data[i].vid + '" class="tooltip"><i class="fab fa-github"></i><span class="tooltiptext">Github Code</span></a>';
		}
		if (data[i].inst) {
			output += '<a hreg="' + data[i].vid + '" class="tooltip"><i class="fas fa-file-alt"></i><span class="tooltiptext">Instructions</span></a>';
		}

		output += '</div></div>';
	}

	document.getElementById("projects").innerHTML = output;
}
console.log("IM HERE");

		window.onload = popProjects;


