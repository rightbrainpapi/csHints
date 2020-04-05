////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////// Modal popup /////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

console.log("We are here");

document.getElementById("buttonTrig").addEventListener("click", function() {
	alert(
		"NOTE: We are currently working to integrate our user registration and login system. In the meanwhile, feel free to search through our list of resources."
	);

	document.querySelector(".bg-modal").style.display = "flex";
});

function closeFunction() {
	document.querySelector(".close").addEventListener("click", function() {
		document.querySelector(".bg-modal").style.display = "none";
	});
}

closeFunction();

// document.querySelector('.close').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "none";
// });

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////// Search Tab //////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

var elementsArray = document.getElementsByClassName("tabName");

var theParent = document.getElementById("searchTabContainer");
// var theParent = document.getElementById("grandParentContainer");
theParent.addEventListener("click", changeSearchPage, false);

function changeSearchPage(e) {
	// hide the ABOUT PAGE
	document.getElementById("aboutPageContainer").style.display = "none";

	// show the MASONARY
	document.getElementById("masonry").style.display = "block";

	// e.target refers to the parent. The current target refers to that actual clicked element
	if (e.target !== e.currentTarget) {
		var clickedItem = e.target.id;
		console.log(`This is the id that was clicked:`, clickedItem);
		document.getElementById(
			"searchPage"
		).textContent = clickedItem.toUpperCase();
		// document.getElementById('searchPage').innerHTML;

		document.getElementById("searchPageContainer").style.display = "block";

		// injectSearchedContent
		// This function delevers the content associated with the page based on whats in the search bar
		// if nothing is in the search bar it displays the entire data base.
		////////////////////////////////////////////////////////////////////

		// [] Dynamically evaluate the cases whether tutorials tools or weeklys.
		switch (true) {
			case clickedItem === "tutorials":
				console.log("fetching tutorials");
				// appendToDOM(tutorials); // Variable is the array of objects stored from the axios call.
				filteredSearch(tutorials);
				break;
			case clickedItem === "tools":
				console.log("fetching tutorials");
				// appendToDOM(tools); // Variable is the array of objects stored from the axios call.
				filteredSearch(tools);
				break;
			case clickedItem === "weeklys":
				console.log("fetching tutorials");
				// appendToDOM(weeklys); // Variable is the array of objects stored from the axios call.
				filteredSearch(weeklys);
				break;
			default:
				alert("We can  use this to default to a specific search");
		}

		// document.getElementById("searchPageContainer1").style.display = "block";
	}
	e.stopPropagation();
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////// Plugging Footer /////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

var year = new Date().getFullYear();
var date = `Copyright &copy; ${year} | CS Hints LLC.`;
document.getElementsByClassName("footer")[0].innerHTML = date;

////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////// DATA Handling //////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

//////////////////////////////////////////////
/////////////// GET REQUEST //////////////////
//////////////////////////////////////////////

const search_input = document.getElementById("search");
const results = document.getElementById("results");

let search_term = "";
let tutorials = [
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/1-hackrLearnJava.png",
		website: "https://hackr.io/tutorials/learn-java",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "hackr.io",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/2-overApi.png",
		website: "http://overapi.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "overapi",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/0-gitFromTheInsideOut.png",
		website: "https://maryrosecook.com/blog/post/git-from-the-inside-out",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "maryrosecook",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/3-w3Schools.png",
		website: "https://www.w3schools.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "w3schools",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/4-eggHead.png",
		website: "https://egghead.io/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "egghead",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/5-illustrated.png",
		website: "https://illustrated.dev/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "illustrated.dev",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/6-masteringMarkdown.png",
		website: "https://guides.github.com/features/mastering-markdown/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Mastering Markdown",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/7-openVim.png",
		website: "https://www.openvim.com/tutorial.html",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "open Vim.",
		description: "This is where the description for each resource will exist.",

		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/8-voyager.png",
		website: "https://voyager-docs.devdojo.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Voyager",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/9-bashAcademy.png",
		website: "https://guide.bash.academy/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Bash Academy",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/10-codeAcademy.png",
		website: "https://www.codecademy.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "codeacdemy",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let tools = [
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/11-tools-snapSvg.png",
		website: "http://snapsvg.io",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "snapsvg",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/12-tools-LearnGitBranching.png",
		website: "https://learngitbranching.js.org/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Git Branching",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/13-tools-FlexFroggy.png",
		website: "https://flexboxfroggy.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "FlexFroggy",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/14-tools-CodePen.png",
		website: "https://codepen.io/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "CodePen",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/15-tools-EmailDrop.png",
		website: "https://www.emaildrop.io/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "EmailDrop",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/16-tools-CodeShare.png",
		website: "https://codeshare.io/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "CodeShare",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let weeklys = [
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/20-weekly-DevChat.png",
		website: "https://devchat.tv/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "DevChat.tv",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "./img/hardCodedData/21-weekly-CodeNewbie.png",
		website: "https://www.codenewbie.org/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "CodeNewbie",
		description: "This is where the description for each resource will exist.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let csHintsRes = [
	{
		title: "Udemy",
		website: "https://www.udemy.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fudemy.png?v=1586037544887",
		description:
			"Udemy bills itself as an online learning marketplace, hosting 130,000+ user-created courses on all kinds of topics (including over 2,000 coding-related classes). While some of Udemy’s offerings are paid (costing $20-$200 per course), there are plenty of free coding classes as well, including some shorter Tech 101-type courses that teach code for beginners.",
		category: "for-profit",
		tags: "courses, developing",
		cost: "free"
	},
	{
		title: "SkillCrush",
		website: "https://skillcrush.com/start-free",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fskillcrushpng.png?v=1586038301917",
		description:
			"Skillcrush’s Free Coding Camp is our totally beginner-friendly intro to tech, techies, and kick-ass careers that you can complete in less than five minutes a day. Delivered straight to your inbox, you will learn how to code in the simplest terms possible—and even get to try writing your own code!—so you can see if learning coding is the right move for you…",
		category: "non-profit",
		tags: "courses, learning, developing",
		cost: "free"
	},
	// {
	// 	title: "BlackGirlsCode",
	// 	website:
	// 		"http://www.blackgirlscode.com/?fbclid=IwAR399DSWExDIW1olgLOBimxaYefdS2xCQ_DH9nfmsU7J9gYVqfqZ9ywNS1I",
	// 	image:
	// 		"http://www.blackgirlscode.com/uploads/1/5/8/2/15823664/published/1320916358.png?1485809428",
	// 	description:
	// 		"Black Girls CODE is a non-profit organization dedicated to teaching girls ages 7-17 about computer programming and digital technology.",
	// 	category: "non-profit",
	// 	tags: "learning",
	// 	cost: "free"
	// },
	{
		title: "Codehs",
		website: "https://codehs.com/",
		image: "https://static.codehs.com/img/brand_logo.png",
		description:
			"CodeHS is a teaching platform for helping schools teach computer science. They provide web-based curriculum, teacher tools and resources, and professional development.",
		category: "non-profit",
		tags: "teaching",
		cost: "free"
	},
	{
		title: "Code.org",
		website: "https://code.org/",
		image: "https://code.org/images/logo.png",
		description:
			"Code.org is an organization dedicated to expanding access to computer science in schools and increasing participation by women and underrepresented minorities. Start here for coding resources such as games, apps and courses.",
		category: "non-profit",
		tags: "teaching",
		cost: "free"
	},
	{
		title: "AI4K12",
		website: "http://ai4k12.org/",
		image:
			"https://raw.githubusercontent.com/touretzkyds/ai4k12/master/images/AI4K12_Transparent_BG.png",
		description:
			"In May, the Association for the Advancement of Artificial Intelligence (AAAI) and the Computer Science Teachers Association (CSTA) launched the AI for K-12 Working Group (AI4K12) to define for artificial intelligence what students should know and be able to do.",
		category: "non-profit",
		tags: "teaching",
		cost: "free"
	},
	{
		title: "Codecademy",
		website: "https://www.codecademy.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2F10-codeAcademy.png?v=1586031174190",
		description:
			"Codecademy is an online catalog of coding course ranging from web development to programming.",
		category: "for-profit",
		tags: "learning",
		cost: "free"
	},
	{
		title: "Cs for All Teachers",
		website: "https://www.air.org/project/cs-all-teachers",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fair-logo.png?v=1586031844980",
		description:
			"CS for All Teachers is a virtual community of practice, welcoming all teachers from PreK through high school who are interested in teaching computer science. It provides an online home for teachers to connect with one another and with the resources and expertise they need to teach computer science in their classrooms.",
		category: "tools",
		tags: "teaching",
		cost: "free"
	},
	{
		title: "Computer Science Teachers Association",
		website: "https://www.csteachers.org/",
		image:
			"https://clubrunner.blob.core.windows.net/00000305564/Images/csta-logo.png",
		description:
			"Computer Science Teachers Association (CSTA) is a membership organization that supports and promotes the teaching of computer science. They provide opportunities for K–12 teachers and their students to better understand computer science and to more successfully prepare themselves to teach and learn.",
		category: "association",
		tags: "teaching",
		cost: "free"
	},
	{
		title: "Hour of Code",
		website: "https://hourofcode.com/us",
		image: "https://hourofcode.com/us/en/images/hour-of-code-logo.png",
		description:
			'The Hour of Code started as a one-hour introduction to computer science, designed to demystify "code", to show that anybody can learn the basics, and to broaden participation in the field of computer science. It has since become a worldwide effort to celebrate computer science, starting with 1-hour coding activities but expanding to all sorts of community efforts.',
		category: "non-profit",
		tags: "learning",
		cost: "free"
	},
	{
		title: "Khan Academy",
		website: "https://www.khanacademy.org/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fkhanacademy.png?v=1586032784351",
		description:
			"Khan Academy offers practice exercises, instructional videos, and a personalized learning dashboard that helps learners to study at their own pace in and outside of the classroom.",
		category: "non-profit",
		tags: "learning",
		cost: "free"
	},
	// {
	// 	title: "Project Lead the Way",
	// 	website: "https://www.pltw.org/our-programs/pltw-computer-science",
	// 	image:
	// 		"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fpltw.png?v=1586033313633",
	// 	description:
	// 		"Project Lead the Way provides learning experiences for PreK-12 students and teachers across the U.S. They create a hands-on classroom environment and aim to help students to develop the knowledge and skills they need to succeed. Additionally, they provide teachers with the training, resources, and support they need to engage students in real-world learning.",
	// 	category: "non-profit",
	// 	tags: "teaching",
	// 	cost: "free"
	// },
	{
		title: "Raspberry Pi",
		website: "https://www.raspberrypi.org/",
		image: "https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png",
		description:
			"Raspberry Pi is a UK-based charity that works to put the power of computing and digital making into the hands of people all over the world. They do this so that more people are “able to harness the power of computing and digital technologies for work, to solve problems that matter to them, and to express themselves creatively.”",
		category: "non-profit",
		tags: "learning",
		cost: "free"
	},
	// {
	// 	title: "Tynker",
	// 	website: "https://www.tynker.com/",
	// 	image: "https://www.tynker.com/image/tynker-logo-white.png",
	// 	description:
	// 		"Tynker helps kids learn to code using visual code blocks that represent real programming concepts. They progress to text languages like JavaScript and Python as they continue to play through 2,000+ interest-driven activities.",
	// 	category: "for-profit",
	// 	tags: "learning",
	// 	cost: "free"
	// },
	{
		title: "Scratch",
		website: "https://scratch.mit.edu/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FscratchLogo.png?v=1586034598136",
		description:
			"Scratch helps young people learn to think creatively, reason systematically, and work collaboratively.",
		category: "non-profit",
		tags: "learning",
		cost: "free"
	},
	{
		title: "Skillcrush",
		website: "https://skillcrush.com/start-free",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fskillcrushpng.png?v=1586038301917",
		description:
			"Skillcrush’s Free Coding Camp is our totally beginner-friendly intro to tech, techies, and kick-ass careers that you can complete in less than five minutes a day. Delivered straight to your inbox, you will learn how to code in the simplest terms possible—and even get to try writing your own code!—so you can see if learning coding is the right move for you…",
		category: "non-profit",
		tags: "learning",
		cost: "free"
	},
	{
		title: "Coursera",
		website: "https://www.coursera.org/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Fcoursera.png?v=1586039132444",
		description:
			"Coursera is an online learning platform that hosts content from top universities, including over 100 coding classes. If you’re ready to learn how to code, you could do worse than start here. Coursera’s classes are free to audit.",
		category: "non-profit",
		tags: "courses, web development, learning",
		cost: "free"
	},
	{
		title: "EdX",
		website: "https://www.edx.org/course?search_query=coding",
		image: "https://www.edx.org/sites/default/files/theme/edx-logo-header.png",
		description:
			"EdX is another university-backed online learning platform with content from schools like Harvard and MIT. Like Coursera, many of EdX’s classes are free to audit, including classes on different programming languages, as well as some basic HTML, CSS, and JavaScript options.",
		category: "non-profit",
		tags: "courses, web development",
		cost: "free"
	},
	// {
	// 	title: "Mit Opencourseware",
	// 	website: "https://ocw.mit.edu/courses/intro-programming/",
	// 	image: "https://ocw.mit.edu/images/ocw_mast.png",
	// 	description:
	// 		"MIT OpenCourseWare is part of an MIT initiative to publish ALL of the educational materials from its courses online for free. Sound too good to be true? It’s not! Aaaaand, that includes plenty of intro to programming and other tech and coding for beginners type classes.",
	// 	category: "non-profit",
	// 	tags: "courses, web development, learning",
	// 	cost: "free"
	// },
	{
		title: "Web Fundamentals",
		website: "https://developers.google.com/web/fundamentals/",
		image:
			"https://developers.google.com/web/images/web-fundamentals-icon192x192.png",
		description:
			"Web Fundamentals is a Google project to provide free, open source, online coding lessons and tutorials to the masses.",
		category: "non-profit",
		tags: "web development, learning",
		cost: "free"
	},
	// {
	// 	title: "Codewars",
	// 	website: "https://www.codewars.com/",
	// 	image:
	// 		"https://www.codewars.com/assets/landing/logo-by-q-b02277e06ebda16eeaf3890c1c6b2e7fd35e8d8fd3ecdcc11061932cbbab9957.png",
	// 	description:
	// 		"Codewars adds some quirk to the proceedings by offering free coding classes with a martial arts theme. Solving specific coding “katas” (a term for training exercises in karate) will earn you ranks and honors as you move your way to becoming a bonafide coder. Who said learning to code online couldn’t be fun? Codewars also offers one of the more diverse lists of programming languages.",
	// 	category: "non-profit",
	// 	tags: "courses, web development, learning, games",
	// 	cost: "free"
	// },
	{
		title: "Codeconquest",
		website: "https://www.codeconquest.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FcodeConquest.png?v=1586041174912",
		description:
			"Codeconquest is a full-service, free learn-to-code platform offering onsite tutorials and reviews of premium coding sites. More text-heavy than some of the other resources on our list—but some people learn best by reading!",
		category: "non-profit",
		tags: "courses, learning, study guide",
		cost: "free"
	},
	// {
	// 	title: "GA Dash",
	// 	website: "https://dash.generalassemb.ly/",
	// 	image:
	// 		"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FgaDash.png?v=1586042481282",
	// 	description:
	// 		"GA Dash is the free arm of paid coding school General Assembly. This free course teaches the basics of HTML, CSS, and JavaScript in a user-friendly and interactive way with the same level of quality as other paid GA classes. Think of it sort of like a $0 coding bootcamp. It will absolutely get you started learning to code for free.",
	// 	category: "bootcamp",
	// 	tags: "courses, web development, learning",
	// 	cost: "free"
	// },
	{
		title: "Udacity",
		website: "https://www.udacity.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FudacityLogo.png?v=1586042559669",
		description:
			"Udacity is an online coding school with a mix of free and paid classes (around 200 of their coding classes—what they call “nanodegrees”—are free).",
		category: "bootcamp",
		tags: "courses, web development, learning",
		cost: "paid"
	},
	{
		title: "Tuts+",
		website: "https://tutsplus.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2Ftuts.png?v=1586043179461",
		description:
			"Tuts+ is an online tutorial library featuring over 20,000 free tutorials (thousands of those dedicated to coding and tech topics).",
		category: "for-profit",
		tags: "courses, learning, study guide",
		cost: "free"
	},
	{
		title: "The Odin Project",
		website: "https://www.theodinproject.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FodinProject.png?v=1586043800534",
		description:
			"The Odin Project is a coding resource for absolute beginners that offers a free, open source curriculum. An ideal option for anyone wanting to learn coding online.",
		category: "tools",
		tags: "web development, learning, study guide, curriculum",
		cost: "free"
	},
	{
		title: "BitDegree",
		website: "https://www.bitdegree.org/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FbitDegree.png?v=1586043948426",
		description:
			"Bento is a site that curates free coding classes from around the web and structures them into a comprehensive curriculum.",
		category: "for-profit",
		tags: "courses, web development, learning",
		cost: "free"
	},
	{
		title: "CodeAvengers",
		website: "https://www.codeavengers.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FcodeAvengers.png?v=1586044229895",
		description:
			"Code Avengers is an online platform with a mix of free coding classes and premium courses.",
		category: "for-profit",
		tags: "courses, web development, learning",
		cost: "free"
	},
	{
		title: "SoloLearn",
		website: "https://www.sololearn.com/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FsoloLearnLogo.png?v=1586044430779",
		description:
			"SoloLearn is an online and mobile learning platform with free coding classes in 13 different programming disciplines.",
		category: "tools",
		tags: "courses, web development, learning",
		cost: "free"
	},
	{
		title: "FreeCodeCamp",
		website: "https://www.freecodecamp.org/",
		image:
			"https://cdn.glitch.com/b75055dd-03c2-47e5-9f5d-7923ac439cc1%2FfreeCodeCamp.png?v=1586044620561",
		description:
			"freeCodeCamp is a non-profit that advertises itself as “dedicated to teaching the world how to code for free.”",
		category: "tutorials",
		tags: "courses, web development, learning, curriculum",
		cost: "free"
	}
];
let myPics = [];
let allResources = tutorials
	.concat(tools)
	.concat(weeklys)
	.concat(csHintsRes);
/////////////////////////////////////
////////////////////////////////////
// Create the Li function with 1 pic
////////////////////////////////////
////////////////////////////////////

const createLi = mediaElem => {
	const li = document.createElement("li");
	const mediaElem_div = document.createElement("div");
	const mediaElem_image = document.createElement("img");
	const mediaElem_title = document.createElement("li");
	const mediaElem_src = document.createElement("a");
	const mediaElem_Hidden = document.createElement("div");
	// const mediaElem_info = document.createElement("div");
	// const mediaElem_population = document.createElement('h2');
	// const mediaElem_popupation_text = document.createElement('h5');

	// Create anchor element.
	var a = document.createElement("a");

	// Create the text node for anchor element.
	var myTitle = mediaElem.title;
	var link = document.createTextNode(myTitle);

	// Append the text node to anchor element.
	a.appendChild(link);

	// Set the title.
	// a.title = "This is Link";

	// Set the href property.
	// var webLink = (mediaElem_src.src = mediaElem.website);
	// a.href = webLink;

	// Set the href property.
	// var webLink = (mediaElem_src.src =
	// 	"file:///Users/d.ahuemaen/Desktop/csHints/about.html");
	// a.href = webLink;

	// Append the anchor element to the body.
	// document.body.appendChild(a);

	// Adding
	li.classList.add("mediaElem-item");
	// mediaElem_info.classList.add("mediaElem-info");

	//adding imag id, class, src, name, and src
	mediaElem_image.classList.add("mediaElem-image");

	mediaElem_image.src = mediaElem.image;
	mediaElem_image.id = mediaElem.title;
	mediaElem_image.alt = mediaElem.description;
	mediaElem_image.name = mediaElem.website;
	// This is the link that will be used on about page
	// mediaElem_Hidden.name = mediaElem.website;

	// mediaElem_image.name = mediaElem.website;

	// console.log(now);

	mediaElem_title.innerText = mediaElem.title;
	// mediaElem_title.classList.add('mediaElem-title');
	li.appendChild(mediaElem_div).appendChild(mediaElem_image);
	// li.appendChild(mediaElem_div).appendChild(a);
	// li.appendChild(mediaElem_div).appendChild(mediaElem_title);
	// li.appendChild(mediaElem_title).appendChild(mediaElem_image);
	// li.appendChild(mediaElem_title);
	// li.appendChild(mediaElem_info);
	// ul.appendChild(li);
	// console.log(li);

	return li;
};

//////////////////////////////
/////////////////////////////
// Append To Dom Function
//////////////////////////////
//////////////////////////////
// This function appends the elements to the dom
////////////////////////////////////////////////
const appendToDOM = mediaElems => {
	// Clears the innerHTML before appending happens
	results.innerHTML = "";
	const ul = document.getElementById("results");

	console.log("Inside Append");

	//iterate over all mediaElems
	// filteredSearch(mediaElems)

	mediaElems.map(mediaElem => {
		ul.appendChild(createLi(mediaElem));
	});
};

//////////////////////////////
/////////////////////////////
// Filter the Data
//////////////////////////////
//////////////////////////////
function filteredSearch(mediaElemsToFilter) {
	var filteredMediaElems = mediaElemsToFilter.filter(function(e) {
		return e.title.toLowerCase().includes(search_term.toLowerCase());
	});
	// console.log(filteredMediaElems);
	//Appending the filltered MediaElems to the dom
	appendToDOM(filteredMediaElems);
}

//////////////////////////////
/////////////////////////////
// Fething the Data
//////////////////////////////
//////////////////////////////

// [] I need to dynamically use this get request.
//      - fetchMedia = (mediaType)
//      - axios.get(`http://localhost:3000/api/${mediaType}`)
// const fetchMedia = () => {
// 	axios
// 		.get("http://localhost:3000/api/images")
// 		.then(response => {
// 			tools = response.data;
// 			console.log(`GET list tools`, tools);
// 			// append to DOM
// 			myPics = response.data;
// 			// appendToDOM(tools); //This should be commented out
// 		})
// 		.catch(error => console.error(error));
// };

// fetchMedia();

///////////////////
///////////////////
// Shuffle the data
///////////////////
///////////////////

function shuffle(arra1) {
	var ctr = arra1.length,
		temp,
		index;

	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
}

//////////////////////////////
//////////////////////////////
// End of Shuffling the data
//////////////////////////////
//////////////////////////////

////////////////////////////////////////////////
////////////////////////////////////////////////
// Filtering the Data if a user types something
//////////////////////////////////////////////
//////////////////////////////////////////////

// search_input.addEventListener('input', (e) => {
//     // [x] check to see what page we are on then run the search filter for that page.
//     // [x] get the document
//     // [x] if document. inner HTMML is gif or tutorials or weeklys run filteredSearch with that in params

// 	search_term = e.target.value;
// 	// re-display tools again based on the new search_term
//     // appendToDOM();
//     filteredSearch(tools)
// });

search_input.addEventListener("input", e => {
	search_term = e.target.value;
	// [x] check to see what page we are on then run the search filter for that page.
	// [x] get the document
	// [x] if document. inner HTMML is gif or tutorials or weeklys run filteredSearch with that in params

	// Checks what page we are on. then enters switch statement to call the appropriate filter
	let ourPage = document
		.getElementById("searchPage")
		.innerHTML.toLocaleLowerCase();
	console.log(ourPage);

	switch (ourPage) {
		case "tutorials":
			// alert( 'This is tutorials' );
			filteredSearch(tutorials);
			break;
		case "tools":
			filteredSearch(tools);
			break;
		case "weeklys":
			// alert( 'This is weeklys' );
			filteredSearch(weeklys);
			break;
		default:
			// alert("We can  use this to default to a specific search");
			// let allResources = tutorials.concat(tools).concat(weeklys);
			filteredSearch(allResources);
	}
});
console.log("calling all resources");
// console.log(shuffle(myArray));
// var newarr = shuffle(allResources);
// console.log(newarr);

filteredSearch(shuffle(allResources));

///////////////////////////////////////////////
/////////////// Post REQUEST //////////////////
///////////////////////////////////////////////

// This can be used
// const data = {
//     name: "Jupitesr",
//     email: "jupitesr@pluto.com",
//     password: "space1234!"
// }

function registerNewUser() {
	document.getElementById("submit").addEventListener("click", async function() {
		console.log("This is working");
		try {
			const res = await axios.post("http://localhost:3000/api/users", {
				name: "title11ds2345",
				email: "title11ds2345@gmail.com",
				password: "1234s9"
			});
			console.log(res.data);
			// [] close the modal box
			// [] reder the profile in the tab
			// document.querySelector('.nav').classList.toggle("active");

			closeFunction();
		} catch (err) {
			console.error(err, err.response);
		}
	});
}

registerNewUser();

/////////////////////////////
// Render Profile in nav bar
/////////////////////////////

// document.querySelector('.inside').style.display = "active";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////// Search Tab //////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// var elementsArray = document.getElementsByClassName("tabName");

// var theParent = document.getElementById("searchTabContainer");
var theParent1 = document.getElementById("results");
// var theParent = document.getElementById("grandParentContainer");
theParent1.addEventListener("click", showAboutPage, false);

function showAboutPage(e) {
	console.log(e.target);

	// e.target refers to the parent. The current target refers to that actual clicked element
	//if results is not equal to the name of the image
	if (e.target !== e.currentTarget) {
		console.log(e.target);
		var clickedItem = e.target;
		var resName = clickedItem.id;
		var resWebsite = clickedItem.name;
		var resSrc = clickedItem.src;
		var resDes = clickedItem.alt;
		var resLink = clickedItem.website;
		// console.log(`This is the name that was clicked:`, clickedItem);

		// document.getElementById('searchPage').innerHTML;
		//Dont show the search title and the list of all items
		document.getElementById("searchPageContainer").style.display = "none";
		document.getElementById("masonry").style.display = "none";

		// document.getElementById("aboutPageContainer").style.display = "block";
		document.getElementById("aboutPageContainer").style.display = "flex";

		///////////////////////////
		// Adding Approproate Data
		///////////////////////////
		// Adding Title
		document.getElementById("aboutPageTitle").textContent = "About";
		// Adding Name
		document.getElementById("resName").textContent = resName.toUpperCase();
		// Adding Source for image
		document.getElementById("resImg").src = resSrc;
		// Adding description
		document.getElementById("resDes").textContent = resDes;
		// adding
		document.getElementById("goto").name = resWebsite;
		// console.log(resWebsite.name);
	}
	e.stopPropagation();
}

// about resource options.

var theAboutButton = document.getElementById("resButton");
theAboutButton.addEventListener("click", aboutOptions, false);

function aboutOptions(e) {
	var currentWebsite = document.getElementById("goto").name;

	if (e.target !== e.currentTarget) {
		console.log(e.target);
		console.log(e.currentTarget);
		if (e.target.id == "goToResource") {
			var win = window.open(currentWebsite);
			win.focus();
		} else if (e.target.id == "addToProfile") {
			//We will go to the users resource board.
			alert(
				"NOTE: We are currently working on the functionality to add the current resource to the user's resource page."
			);
		} else {
			// Dont do anything
		}
	}

	e.stopPropagation();
}
