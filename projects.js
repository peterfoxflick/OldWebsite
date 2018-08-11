
	// {
	//  id: 0,
	// 	name: "AtTiny Dark Detector",
	// 	des: "This little project makes an ATtiny tell you when it is dark or bright. This project is an excellent introduction to the capabilities of the ATtiny85 chip." ,
	// 	img: "./media/projects/AttinyDarkDetector.jpeg",
	// 	showName: true,
	// 	vid: "#" ,
	// 	git: "#" ,
	// 	inst: "#"
	// } ,

var data = [
	{
		id: 0,
		name: "AtTiny Dark Detector",
		des: "This little project makes an ATtiny tell you when it is dark or bright. This project is an excellent introduction to the capabilities of the ATtiny85 chip." ,
		img: "./media/projects/AttinyDarkDetector.jpg",
		showName: true,
		git: "https://gist.github.com/peterfoxflick/89b8bf96cc63584de7f1508845731b1b" ,
		inst: "https://www.instructables.com/id/ATtiny-Dark-Detector"
	} ,
	{
		id: 1,
		name: "Programing AtTiny with Arduino",
		des: "A quick guide on getting the Arduino IDE to upload code to an Attiny chip." ,
		img: "./media/projects/AttinyArduinoIDE.jpg",
		showName: true,
		inst: "https://www.instructables.com/id/Programing-an-Attiny-with-Arduino/"
	} ,
	{
		id: 2,
		name: "AtTiny Flower Pot",
		des: "This flower pot has a built-in sensor that detects when the soil is dry and lets you know. The circuit uses an ATtiny85 as the brain and copper tape as the sensor. " ,
		img: "./media/projects/AttinyFlowerPot.jpg",
		showName: true,
		git: "https://gist.github.com/peterfoxflick/ed59843c6a8567972b84252c02a43d19" ,
		inst: "https://www.instructables.com/id/ATtiny-Flower-Pot/"
	} , 
	{
		id: 3,
		name: "Trello on Google Script",
		des: "A large project from work that takes a Google Form and creates a Trello Card when a responce is submited. The code also creates a Google Doc for every responce based off the answers given." ,
		img: "./media/projects/trelloGoogleScript.png",
		showName: true,
		git: "https://gist.github.com/peterfoxflick/767671089d661155ace7f4d0adde30fc" ,
	} ,
	{
		id: 4,
		name: "Bulk Change Google Sheets",
		des: "In connection with the 'Trello on Google Script' project, this code will take a list of Google Sheet IDs and make changes to every sheet on the list. The tricky part was getting it to work with more than 1200 sheets." ,
		img: "./media/projects/GoogleChangeAll.png",
		showName: true,
		git: "https://gist.github.com/peterfoxflick/f29816299e7a2b05d006b7f728b03e70" ,
	} ,
]


function popProjects() {
	document.getElementById("projects").innerHTML = "";

	for (var i = data.length - 1; i >= 0; i--) {
		var card = document.createElement('div');

		card.className = "card";

		if (data[i].img) {
			card.innerHTML += '<img src="' + data[i].img + '">';
		}

		if(data[i].showName){
			card.innerHTML += '<h3>' + data[i].name + '</h3>';
		}

		if (data[i].des) {
			card.innerHTML += '<p>' + data[i].des + '</p>';
		}

		var links = document.createElement('div');
		links.className = "links";

		if (data[i].vid) {
			links.innerHTML += '<a href="' + data[i].vid + '" class="tooltip"><i class="fab fa-youtube"></i><span class="tooltiptext">YouTube Video</span></a>';
		}

		if (data[i].git) {
			links.innerHTML += '<a href="' + data[i].git + '" class="tooltip"><i class="fab fa-github"></i><span class="tooltiptext">Github Code</span></a>';
		}

		if (data[i].inst) {
			links.innerHTML += '<a href="' + data[i].inst + '" class="tooltip"><i class="fas fa-file-alt"></i><span class="tooltiptext">Instructions</span></a>';
		}
		card.appendChild(links);
		document.getElementById("projects").appendChild(card);

	}

}

window.onload = popProjects;


