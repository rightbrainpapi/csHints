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
theParent.addEventListener("click", changeSearchPage, false);

function changeSearchPage(e) {
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

		// [] Dynamically evaluate the cases whether tutorials gifs or videos.
		switch (true) {
			case clickedItem === "tutorials":
				console.log("fetching tutorials");
				// appendToDOM(tutorials); // Variable is the array of objects stored from the axios call.
				filteredSearch(tutorials);
				break;
			case clickedItem === "gifs":
				console.log("fetching tutorials");
				// appendToDOM(gifs); // Variable is the array of objects stored from the axios call.
				filteredSearch(gifs);
				break;
			case clickedItem === "videos":
				console.log("fetching tutorials");
				// appendToDOM(videos); // Variable is the array of objects stored from the axios call.
				filteredSearch(videos);
				break;
			default:
				alert("We can  use this to default to a specific search");
		}
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
		image: "../img/hardCodedData/1-hackrLearnJava.png",
		website: "https://hackr.io/tutorials/learn-java",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "hackr.io",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/2-overApi.png",
		website: "http://overapi.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Egypt",
		user: "overapi",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/0-gitFromTheInsideOut.png",
		website: "https://maryrosecook.com/blog/post/git-from-the-inside-out",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "maryrosecook",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/3-w3Schools.png",
		website: "https://www.w3schools.com/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "w3schools",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/4-eggHead.png",
		website: "https://egghead.io/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "egghead",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/5-illustrated.png",
		website: "https://illustrated.dev/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "illustrated.dev",
		description: "",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/hardCodedData/6-masteringMarkdown.png",
		website: "https://guides.github.com/features/mastering-markdown/",
		isPublished: false,
		price: 1,
		tags: (2)[("afro", "afrochella")],
		title: "Mastering Markdown",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let gifs = [
	{
		title: "Some Name",
		user: "User Name",
		tags: ["afro gifs", "afrochella"],
		image: "../img/21-boqapiGifs.gif",
		date: "2018-01-24T21:42:27.388Z",
		price: 1,
		isPublished: false
	},
	{
		title: "Some Name",
		user: "User Name",
		tags: ["afro gifs", "afrochella"],
		image: "../img/22-boqapiGifs.gif",
		date: "2018-01-24T21:42:27.388Z",
		price: 2,
		isPublished: true
	},
	{
		title: "Some Name",
		user: "User Name",
		tags: ["afro gifs", "afrochella"],
		image: "../img/23-boqapiGifs.gif",
		date: "2018-01-24T21:42:27.388Z",
		price: 1,
		isPublished: true
	},
	{
		title: "Some Name",
		user: "User Name",
		tags: ["afro gifs", "afrochella"],
		image: "../img/24-boqapiGifs.gif",
		date: "2018-01-24T21:42:27.388Z",
		price: 3,
		isPublished: true
	}
];
let videos = [
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/3-boqapiGifs.gif",
		isPublished: false,
		price: 1,
		tags: (2)[("afro gifs", "afrochella")],
		title: "LLLLL",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/3-boqapiGifs.gif",
		isPublished: false,
		price: 1,
		tags: (2)[("afro gifs", "afrochella")],
		title: "LLLLL",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	},
	{
		date: "2018-01-24T21:42:27.388Z",
		image: "../img/3-boqapiGifs.gif",
		isPublished: false,
		price: 1,
		tags: (2)[("afro gifs", "afrochella")],
		title: "LLLLL",
		user: "User Name",
		_id: "5df5093ca9644c9fd0ffdd3c"
	}
];
let myPics = [];

/////////////////////////////////////
////////////////////////////////////
// Create the Li function with 1 pic
////////////////////////////////////
////////////////////////////////////

const createLi = mediaElem => {
	const li = document.createElement("li");
	const mediaElem_image = document.createElement("img");
	// const mediaElem_title = document.createElement('h3');
	const mediaElem_info = document.createElement("div");
	// const mediaElem_population = document.createElement('h2');
	// const mediaElem_popupation_text = document.createElement('h5');

	li.classList.add("mediaElem-item");
	mediaElem_info.classList.add("mediaElem-info");

	mediaElem_image.src = mediaElem.image;
	mediaElem_image.classList.add("mediaElem-image");

	// mediaElem_title.innerText = mediaElem.title;
	// mediaElem_title.classList.add('mediaElem-title');

	li.appendChild(mediaElem_image);
	// li.appendChild(mediaElem_title);
	li.appendChild(mediaElem_info);
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
const fetchMedia = () => {
	axios
		.get("http://localhost:3000/api/images")
		.then(response => {
			gifs = response.data;
			console.log(`GET list gifs`, gifs);
			// append to DOM
			myPics = response.data;
			// appendToDOM(gifs); //This should be commented out
		})
		.catch(error => console.error(error));
};

fetchMedia();

////////////////////////////////////////////////
////////////////////////////////////////////////
// Filtering the Data if a user types something
//////////////////////////////////////////////
//////////////////////////////////////////////

// search_input.addEventListener('input', (e) => {
//     // [x] check to see what page we are on then run the search filter for that page.
//     // [x] get the document
//     // [x] if document. inner HTMML is gif or tutorials or videos run filteredSearch with that in params

// 	search_term = e.target.value;
// 	// re-display gifs again based on the new search_term
//     // appendToDOM();
//     filteredSearch(gifs)
// });

search_input.addEventListener("input", e => {
	search_term = e.target.value;
	// [x] check to see what page we are on then run the search filter for that page.
	// [x] get the document
	// [x] if document. inner HTMML is gif or tutorials or videos run filteredSearch with that in params

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
		case "gifs":
			filteredSearch(gifs);
			break;
		case "videos":
			// alert( 'This is videos' );
			filteredSearch(videos);
			break;
		default:
			alert("We can  use this to default to a specific search");
	}
});

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
