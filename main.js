// Name: Andrei Birsan
// Class Name: Visual Frame Works
// Date: 2/13/2013
// Project 2


//global variables
var radioChecked,	
	 favCheck = "No";

//function getting an element
var getElement = function(element) {
			
	var selElement = document.getElementById(element);				
	return selElement;	
};	
	
//function addMenu
function addMenu() {	
		
	//create a select	
	var selectMenu = document.createElement("select");
	selectMenu.setAttribute("id", "mediaType");
	
	//target where to put the select
	var whereSelect = getElement("mediaTypeId");
	
	//append to the select
	whereSelect.appendChild(selectMenu);	
	console.log(whereSelect);	
	
	//array with optGroup names
	var optGroupList = ["Video", "Audio", "Data"];
	//array with videoGroupList
	var videoGroupList = ["Video Dvd", "Video Cd", "Video Tape"];
	//array with audioGroupList
	var audioGroupList = ["Audio Cd", "Audio Tape", "Audio Record"];
	//array with dataGroupList
	var dataGroupList = ["Data Dvd", "Data Cd", "Memory Stick", "Other"];		
		for (var i = 0, j = optGroupList.length; i < j; i++) {
			var optGroupMenu = document.createElement("optgroup");
			var optGroupNames = optGroupList[i];
			optGroupMenu.setAttribute("label", optGroupNames);
			optGroupMenu.innerHTML = optGroupNames;
			selectMenu.appendChild(optGroupMenu);
			
			if(optGroupList[i] === "Video"){
			
				for (var ii = 0, jj = videoGroupList.length; ii < jj; ii++) {
					var videoMenu = document.createElement("option");
					var videoGroupNames = videoGroupList[ii];
					videoMenu.setAttribute("value",videoGroupNames);
					videoMenu.innerHTML = videoGroupList[ii];
					optGroupMenu.appendChild(videoMenu);
				}
			}
			
			else if(optGroupList[i] === "Audio"){
			
				for (var ii = 0, jj = audioGroupList.length; ii < jj; ii++) {
					var audioMenu = document.createElement("option");
					var audioGroupNames = audioGroupList[ii];
					audioMenu.setAttribute("value",audioGroupNames);
					audioMenu.innerHTML = audioGroupList[ii];
					optGroupMenu.appendChild(audioMenu);
				}
			}
			
			else{
				for (var ii = 0, jj = dataGroupList.length; ii < jj; ii++) {
					var dataMenu = document.createElement("option");
					var dataGroupNames = dataGroupList[ii];
					dataMenu.setAttribute("value",dataGroupNames);
					dataMenu.innerHTML = dataGroupList[ii];
					optGroupMenu.appendChild(dataMenu);
				}
			}
		
		}
	};
	
//call function addMenu
addMenu();

//function checkRadio
function checkRadio() {
	
	var radioButtons = document.getElementById("firstForm");
	for (var i = 0, j = radioButtons.length; i < j; i++) {
		
		if (radioButtons[i].checked) {
			radioChecked = radioButtons[i].value;	
		}	
	}	
}

//function checkBox
function checkBox() {
	
	if (getElement("favCheck").checked)	 {
		favCheck = getElement("favCheck").value;
	}
	
	else {
		favCheck = "No";	
	}
}

//function storeData
function storeData() {

	//call function checkRadio
	checkRadio();
	
	//call function checkBox
	checkBox();
	
	//randomize id	
	var id = Math.floor(Math.random() * 10000001)
	var item = {};
	
	item.dropMenu 			= 		["Item Type: ", getElement("mediaType").value];
	item.nameItem 			= 		["Name: ", getElement("nameItem").value];
	item.genreItem 		= 		["Genre: ", getElement("genreItem").value];
	item.lengthItem 		= 		["Length: ", getElement("lengthItem").value];
	item.pubDate			=	 	["Release Date: ", getElement("pubDate").value];
	item.purchaseDate 	= 		["Purchase Date: ", getElement("purchaseDate").value];
	item.favOpt 			= 		["Is it a favorite item ?", favCheck]; 
	item.bkCopy 			= 		["Does the item have a back-up copy ?", radioChecked];
	item.notes 				= 		["Notes: ", getElement("notes").value];
	
	//store into localStore
	localStorage.setItem(id, JSON.stringify(item));
	
	//alert the user
	alert ("Item Saved!");
}

/*display-link goes here
var displayLink = getElement("displayData");
displayLink.addEventListener("click", "getData");

clear data link goes here
var clearData = getElement("clearInput");
clearData.addEventListener("click", "clearLocal");*/

//submit-button goes here
var submitButton = getElement("submitButton");
submitButton.addEventListener("click", storeData); 
	
console.log(localStorage);
