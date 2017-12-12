var publishButton = document.getElementById("novi-status-btn");
var postContent = document.getElementById("novi-status");
var posts = document.getElementById("statusi");


function publishPost(){
	var postInput = postContent.value;

	var post = document.createElement("p");
	var postText = document.createTextNode(postInput);
	post.appendChild(postText);
	post.classList.add("status");

	posts.insertBefore(post, posts.childNodes[0]);
	postContent.value = "";
}


publishButton.onclick = publishPost;

