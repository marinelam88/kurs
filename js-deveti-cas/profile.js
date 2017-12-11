
profile = {
	name: "Marinela",
	lastName: "Misirlis",
	profilePhoto: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p160x160/1384310_10152888070901940_5196279572932000850_n.jpg?oh=73e7a1bb26cee8a251478a2f77d7d1f2&oe=5ACA84FC",
	coverPhoto: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/14359263_10154622778596940_837158050654392995_n.jpg?oh=dc1a16e5bcd459b314ea21e28a442f2e&oe=5AC25B88",
	statusi: [
		"Domaci zadatak test",
		"Drugi status",
		"Treci status",
		"Radi sve :)"
	]
}

var hero = document.getElementById("hero");
var div = document.getElementsByClassName("profile-img-bg");
var profileImg = document.getElementById("profile-img");
var fullName = document.getElementById("full-name");
var posts = document.getElementById("statusi");


hero.style.backgroundImage = "url('" + profile.coverPhoto + "')";

profileImg.src = profile.profilePhoto;
profileImg.alt = profile.name + " " + profile.lastName;

fullName.innerHTML = profile.name + " " + profile.lastName;


for(var i = profile.statusi.length - 1; i >= 0; i--){
	var post = document.createElement("p");
	var text = document.createTextNode(profile.statusi[i]);
	post.appendChild(text);
	posts.appendChild(post);
}







