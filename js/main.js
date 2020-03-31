////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////// Modal popup /////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

console.log("We are here");

document.getElementById("buttonTrig").addEventListener("click", function() {
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",

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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
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
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque corporis, dicta laudantium exercitationem repellendus soluta totamratione a modi necessitatibus.",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let myPics = [];
let allResources = tutorials.concat(tools).concat(weeklys);
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
	mediaElem_image.name = mediaElem.title;
	mediaElem_image.alt = mediaElem.description;

	// console.log(now);

	mediaElem_title.innerText = mediaElem.title;
	// mediaElem_title.classList.add('mediaElem-title');
	li.appendChild(mediaElem_div)
		.appendChild(a)
		.appendChild(mediaElem_image);

	// li.appendChild(mediaElem_div).appendChild(mediaElem_title);
	// li.appendChild(mediaElem_title).appendChild(mediaElem_image);
	// li.appendChild(mediaElem_title);
	// li.appendChild(mediaElem_info);
	// ul.appendChild(li);

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
	console.log(filteredMediaElems);
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
		var clickedItem = e.target.name;
		// console.log(`This is the name that was clicked:`, clickedItem);

		// document.getElementById('searchPage').innerHTML;
		//Dont show the search title and the list of all items
		document.getElementById("searchPageContainer").style.display = "none";
		document.getElementById("masonry").style.display = "none";

		document.getElementById("aboutPageContainer").style.display = "block";
		document.getElementById("aboutPage").textContent =
			"About - " + clickedItem.toUpperCase();

		// // injectSearchedContent
		// // This function delevers the content associated with the page based on whats in the search bar
		// // if nothing is in the search bar it displays the entire data base.
		// ////////////////////////////////////////////////////////////////////

		// // [] Dynamically evaluate the cases whether tutorials tools or weeklys.
		// switch (true) {
		// 	case clickedItem === "tutorials":
		// 		console.log("fetching tutorials");
		// 		// appendToDOM(tutorials); // Variable is the array of objects stored from the axios call.
		// 		filteredSearch(tutorials);
		// 		break;
		// 	case clickedItem === "tools":
		// 		console.log("fetching tutorials");
		// 		// appendToDOM(tools); // Variable is the array of objects stored from the axios call.
		// 		filteredSearch(tools);
		// 		break;
		// 	case clickedItem === "weeklys":
		// 		console.log("fetching tutorials");
		// 		// appendToDOM(weeklys); // Variable is the array of objects stored from the axios call.
		// 		filteredSearch(weeklys);
		// 		break;
		// 	default:
		// 		alert("We can  use this to default to a specific search");
		// }

		// document.getElementById("searchPageContainer1").style.display = "block";
	}
	e.stopPropagation();
}
