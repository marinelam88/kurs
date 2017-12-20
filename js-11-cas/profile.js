profile = {
	name: "Marinela",
	lastName: "Misirlis",
	username: "marinela_m",
	followers: 50,
	follows: 50,
	profilePhoto: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p160x160/1384310_10152888070901940_5196279572932000850_n.jpg?oh=73e7a1bb26cee8a251478a2f77d7d1f2&oe=5ACA84FC",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum viverra nunc, | sed feugiat metus commodo eu. Maecenas ornare, tortor sed imperdiet pretium, | neque ex suscipit orci, eget lacinia nisl.",
	gallery: [
		img1 = {
			id: 1,
			url: "https://images.pexels.com/photos/230629/pexels-photo-230629.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#nature", "#water"],
			likes: 5,
			commentsNum: 1,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
		},

		img2 = {
			id: 2,
			url: "https://images.pexels.com/photos/533118/pexels-photo-533118.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#collie", "#dog", "#pet"],
			likes: 53,
			commentsNum: 2,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
		},

		img3 = {
			id: 3,
			url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#dog", "#corgi", "#beach", "#blue"],
			likes: 15,
			commentsNum: 3,
			comments: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit, sed do eiusmod tempor", "incididunt ut labore et dolore magna aliqua."]
		},

		img4 = {
			id: 4,
			url: "https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#beagle", "#puppy", "#cute", "#dog"],
			likes: 5,
			commentsNum: 2,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
		},

		img5 = {
			id: 5,
			url: "https://images.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#nature", "#landscape", "#meadow"],
			likes: 25,
			commentsNum: 1,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
		},

		img6 = {
			id: 6,
			url: "https://images.pexels.com/photos/5018/animal-dog-pet-brown.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#dog", "#pet"],
			likes: 10,
			commentsNum: 1,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
		},

		img7 = {
			id: 7,
			url: "https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#nature", "#forest"],
			likes: 5,
			commentsNum: 2,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
		},

		img8 = {
			id: 8,
			url: "https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
			hashTags: ["#dog", "#puppy", "#yawn"],
			likes: 100,
			commentsNum: 2,
			comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
		}
	]
}

$(document).ready(function(){
	$("#username").html("<p>" + profile.username + "</p>");
	$("#postNum").html("<span>" + profile.gallery.length +"</span>" + " <p>posts</p>");
	$("#followers").html("<span>" + profile.followers +"</span>" + " <p>followers</p>");
	$("#following").html("<span>" + profile.follows +"</span>" + " <p>following</p>");

	var profileImg = $("<img />", { 
	  id: "profile",
	  src: profile.profilePhoto,
	  alt: profile.name + " " + profile.lastName
	});
	profileImg.appendTo($("#profile-photo"));

	var $profileInfo = $("<span>" + profile.name + " " + profile.lastName + "</span>");
	$("#description").append($profileInfo).append(profile.description);

	var $gallery = $("#gallery");

	for(var i = 0; i < profile.gallery.length; i++){
		var $div = $("<div></div>");
		$div.addClass("imgContainer");

		galleryCreator.prepareImageStats($div, profile.gallery[i]);

		var galImg = $("<img/>", {
			class: "item",
			src: profile.gallery[i].url,
			alt: "gallery item",
			id: profile.gallery[i].id
		})
		
		$div.append(galImg);
		$gallery.append($div);
	}

	$(".imgContainer").on("mouseenter mouseleave", function(){
		$(this).find(".postStats").slideToggle("fast");
	});

	$(".postStats").on("click", function(){
		var id = $(this).siblings("img").attr("id");
		var currentImg;
		for(var i = 0; i < profile.gallery.length; i++){
			if(id ==  profile.gallery[i].id){
				currentImg = profile.gallery[i];
				break;
			}
		}
		galleryCreator.openImage(currentImg);
	})
})