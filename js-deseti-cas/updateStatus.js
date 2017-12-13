var postContent = document.getElementById("post-content");
var submitBtn = document.getElementById("submit-btn");

function publishPost(){
	var postText = postContent.value;

	if(postText !== "" && postText.length <= 140){
		var post = postCreator.create(postText);
		posts.insertBefore(post, posts.childNodes[0]);
		postContent.value = "";
	}else if(postText.length > 140){
		alert("You can not publish post that contains more than 140 characters.");
	}
}

submitBtn.onclick = publishPost;