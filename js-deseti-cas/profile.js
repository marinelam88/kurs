profile = {
	name: "Marinela",
	lastName: "Misirlis",
	profilePhoto: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p160x160/1384310_10152888070901940_5196279572932000850_n.jpg?oh=73e7a1bb26cee8a251478a2f77d7d1f2&oe=5ACA84FC",
	coverPhoto: "https://images.pexels.com/photos/262750/pexels-photo-262750.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
	username: "@marinela",
	tweets: 4,
	follows: 10,
	followers: 30,
	posts: [
		"I just created my first twitter status",
		"Second twitter status",
		"Third twitter status",
		"It works! :)",
		"No empty posts here :)"
	]

}

var postCreator = {

	create: function(postText){
		var postContainer = document.createElement("div");
		postContainer.id = "post_" + i;
		postContainer.classList.add("single-post");

		var photoContainer = document.createElement("div");
		photoContainer.classList.add("col-xs-1");

		var photo = document.createElement("img");
		photo.src = profile.profilePhoto;
		photo.alt = profile.name + " " + profile.lastName;
		photo.classList.add("post-photo");

		photoContainer.appendChild(photo);

		var authorContainer = document.createElement("div");
		authorContainer.classList.add("col-xs-10", "author");

		var authorName = document.createElement("span");
		var authorNameText = document.createTextNode(profile.name + " " + profile.lastName + " " + profile.username);

		authorName.appendChild(authorNameText);
		authorContainer.appendChild(authorName);

		var postContentContainer = document.createElement("div");
		postContentContainer.classList.add("post-content", "col-xs-12");

		var content = document.createElement("p");
		var text = document.createTextNode(postText);

		content.appendChild(text);
		postContentContainer.appendChild(content);

		postContainer.appendChild(photoContainer);
		postContainer.appendChild(authorContainer);
		postContainer.appendChild(postContentContainer);

		iconContainer = document.createElement("div");
		iconContainer.classList.add("post-icons");

		var faComment = document.createElement("i");
		faComment.classList.add("fa", "fa-comment-o");
		iconContainer.appendChild(faComment);

		var faRetweet = document.createElement("i");
		faRetweet.classList.add("fa", "fa-retweet");
		iconContainer.appendChild(faRetweet);

		var faHeart = document.createElement("i");
		faHeart.classList.add("fa", "fa-heart-o");
		iconContainer.appendChild(faHeart);

		var faChart = document.createElement("i");
		faChart.classList.add("fa", "fa-bar-chart");
		iconContainer.appendChild(faChart);

		postContainer.appendChild(iconContainer);

		return postContainer;
	}
}

var coverImg = document.getElementById("cover-img");
coverImg.style.backgroundImage = "url('" + profile.coverPhoto + "')";

var profileImg = document.getElementById("profile-photo");
profileImg.src = profile.profilePhoto;
profileImg.alt = profile.name + " " + profile.lastName;


var fullName = document.getElementById("full-name");
var nameP = document.createElement("p");
var usernameSpan = document.createElement("span");
var spanText = document.createTextNode(profile.username);
var nameText = document.createTextNode(profile.name + " " + profile.lastName);
nameP.appendChild(nameText);
usernameSpan.appendChild(spanText)

fullName.appendChild(nameP);
fullName.appendChild(usernameSpan);

var follows = document.getElementById("follows");

var followsP = document.createElement("p");
var followsTitle = document.createTextNode("Follows");
followsP.appendChild(followsTitle);
follows.appendChild(followsP);

var followsSpan = document.createElement("span");
var followsNum = document.createTextNode(profile.follows);
followsSpan.appendChild(followsNum);
follows.appendChild(followsSpan);

var followers = document.getElementById("followers");
var followersP = document.createElement("p");
var followersTitle = document.createTextNode("Followers");
followersP.appendChild(followersTitle);
followers.appendChild(followersP);

var followersSpan = document.createElement("span");
var followersNum = document.createTextNode(profile.followers);
followersSpan.appendChild(followersNum);
followers.appendChild(followersSpan);

var posts = document.getElementById("posts");

for(var i = profile.posts.length -1; i >= 0; i--){
	
	var post = postCreator.create(profile.posts[i]);
	posts.appendChild(post);

}





