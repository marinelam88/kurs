var postContent = document.getElementById("post-content");
var submitBtn = document.getElementById("submit-btn");

var tweets = document.getElementById("tweets");

var tweetsP = document.createElement("p");
var tweetTitle = document.createTextNode("Tweets");
tweetsP.appendChild(tweetTitle);
tweets.appendChild(tweetsP);

var tweetSpan = document.createElement("span");
tweetSpan.classList.add("tweetNum");
var tweetNum = document.createTextNode(profile.tweets);
tweetSpan.appendChild(tweetNum);

tweets.appendChild(tweetSpan);


function publishPost(){
	var postText = postContent.value;

	if(postText !== "" && postText.length <= 140){		
		var post = postCreator.create(postText);
		posts.insertBefore(post, posts.childNodes[0]);
		postContent.value = "";
		
		var currentTweets = parseInt(tweetNum.nodeValue);
		tweetNum.nodeValue = currentTweets + 1;		

	}else if(postText.length > 140){
		alert("You can not publish post that contains more than 140 characters.");
	}
}

submitBtn.onclick = publishPost;

