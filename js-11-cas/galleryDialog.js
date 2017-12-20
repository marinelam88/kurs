var galleryCreator = {
	prepareImageStats: function(imageContainer, image){
		var $likesSpan = $("<span>");
		var $likesIcon = $("<i>");
		$likesIcon.addClass("fa fa-heart");

		$likesSpan.html($likesIcon[0]);
		$likesSpan.append(image.likes);
		$likesSpan.addClass("postStats");

		$commentIcon = $("<i>");
		$commentIcon.addClass("fa fa-comment");
		$likesSpan.append($commentIcon);
		$likesSpan.append(image.commentsNum);

		imageContainer.append($likesSpan);

	},
	openImage: function(currentImg){
		var $imgInfo = $("<div></div>");
		$imgInfo.addClass("clickedImg");
		var $imgDialog = $("<img>",{
			src: currentImg.url,
			alt: "gallery item " + currentImg.id,
			class: "imgDialog"
		});
		
		var $postData = $("<div></div>");
		$postData.addClass("data");
		var $personalInfo = $("<div></div>");
		$personalInfo.addClass("personal");
		var $profile = $("<img>", {
			src: profile.profilePhoto,
			alt: profile.name + " " + profile.lastName
		});
		$personalInfo.append($profile);

		var $username = $("<p>" + profile.username + "</p>");
		$personalInfo.append($username);

		var $button = $("<button href='#'>Follow</button>") ;
		$personalInfo.append($button);

		$postData.append($personalInfo);
		var $info = $("<p>" + profile.username + "<span>" + currentImg.hashTags.join(", ") + "</span>" + "</p>");
		$info.addClass("tags");
		$postData.append($info);

		$imgInfo.append($imgDialog);
		$imgInfo.append($postData);

		var $comments = $("<div></div>");
		$comments.html("<h4>Comments: </h4>")
		for(var i = 0; i < currentImg.comments.length; i++){
			var $singleComment = $("<p>" + currentImg.comments[i] + "</p>");
			$comments.append($singleComment);
		}
		
		$postData.append($comments);

		var $likeSection = $("<div></div>");
		$likeSection.addClass("likeSection");
		var $numOfLikes = $("<i></i>");
		$numOfLikes.addClass("fa fa-heart-o");
		$likeSection.append($numOfLikes);

		var $comment = $("<i></i>");
		$comment.addClass("fa fa-comment-o");
		$likeSection.append($comment);

		var $num = $("<p>" + currentImg.likes + " likes" + "</p>");
		$num.addClass("likes");
		$likeSection.append($num);

		$postData.append($likeSection);

		var $dialog = $("#dialog");
		$dialog.append($imgInfo);

   		$imgInfo.dialog({
   			modal:true,
   			resizable: false,
   			width: "800",
   			height: "400",

   			close: function(event, ui)
	        {
	            $(this).dialog("destroy").remove();
	        }
    	});
	}
}


