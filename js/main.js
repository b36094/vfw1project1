// Name: Andrei Birsan
// Class Name: Visual Frame Works
// Date: 2/13/2013
// Project 3





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
	//console.log(whereSelect);	
	//array with optGroup names
	var optGroupList = ["Video", "Audio", "Data"];
	//array with videoGroupList
	var videoGroupList = ["VideoDvd", "VideoCd", "VideoTape"];
	//array with audioGroupList
	var audioGroupList = ["AudioCd", "AudioTape", "AudioRecord"];
	//array with dataGroupList
	var dataGroupList = ["DataDvd", "DataCd", "MemoryStick", "Other"];	

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
	
	var radioButtons = document.getElementById("firstForm").securityCopy;
	console.log(radioButtons);
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
function storeData(key) {
	if (!key) {
		//randomize id			
		var id = Math.floor(Math.random() * 10000001);
	}
	else {
		id = key;	
	}
	//call function checkRadio
	checkRadio();
	
	//call function checkBox
	checkBox();
	
	
	var item 				= 		{};
	item.dropMenu 			= 		["Item Type: ", getElement("mediaType").value];
	item.nameItem 			= 		["Name: ", getElement("nameItem").value];
	item.genreItem 			= 		["Genre/Type: ", getElement("genreItem").value];
	item.lengthItem 		= 		["Length: ", getElement("lengthItem").value];
	item.pubDate			=	 	["Release Date: ", getElement("pubDate").value];
	item.purchaseDate 		= 		["Purchase Date: ", getElement("purchaseDate").value];
	item.favOpt 			= 		["Is it a favorite item ?", favCheck]; 
	item.bkCopy 			= 		["Does the item have a back-up copy ?", radioChecked];
	item.slideRange			=		["Next Revision (in months): ", getElement("slider").value]
	item.notes 				= 		["Notes: ", getElement("notes").value];
	
	//store into localStore
	localStorage.setItem(id, JSON.stringify(item));
	
	//alert the user
	alert ("Item Saved!");
}

//function controlMenu
function controlMenu(a) {
	switch(a) {
		case "on":
			getElement('firstForm').style.display = "none";
			getElement('clearInput').style.display = "inline";	
			getElement('displayData').style.display = "none";
			getElement('addNewEntry').style.display = "inline";		
			break;
			
		case "off":
			getElement('firstForm').style.display = "block";
			getElement('clearInput').style.display = "inline";	
			getElement('displayData').style.display = "inline";
			getElement('addNewEntry').style.display = "none";
			getElement('dataCont').style.display = "none";
			break;
			
		default:

			return false;		
			
	}
}



//function getData
function getData() {
	//call function controlMenu
	controlMenu("on");	
	
	if (localStorage.length === 0) {
		alert("There is no data in the Local Storage. Default data was added.");
		autoPopulate();
		//window.location = "additem.html";	
		//window.location.reload();
	}	
	//Write Data Back to the browser 
	var newDiv = document.createElement('div');	
	newDiv.setAttribute("id", "dataCont");
	var newUl = document.createElement('ul');
	newDiv.appendChild(newUl);
	
	//append div to the document
	document.body.appendChild(newDiv);
	
	getElement('dataCont').style.display = "block";
	
	//get the data in the localStorage
	for (var i = 0, j = localStorage.length; i < j; i++) {
		var newLink = document.createElement('li');
		var newLi = document.createElement('li');
		newUl.appendChild(newLi);
		var newKey = localStorage.key(i);
		var newValue = localStorage.getItem(newKey);	
		var newObj = JSON.parse(newValue);
		var newSubUl = document.createElement('ul');
		newSubUl.setAttribute("id", "dynamicLi");
		newSubUl.setAttribute("style", "margin-top: 20px;")
		newLi.appendChild(newSubUl);
		
		//function appendImage
		appendImage(newObj.dropMenu[1], newSubUl);		
		for (var o in newObj) {
			
			var newSubLi = document.createElement('li');
			newSubUl.appendChild(newSubLi);
			var newSubText = newObj[o][0] + " " + newObj[o][1];
			newSubLi.innerHTML = newSubText;
			newSubUl.appendChild(newLink);	
			
		}
		
		//call makeCtrlLinks function
		makeCtrlLinks(localStorage.key(i), newLink);
		//append a separation bar
		var sepBar = document.createElement('hr');
		newSubUl.appendChild(sepBar);
	}
}

//function appendImage finds the right image in the "images" folder and appends it to the proper category
function appendImage(picName, newSubUl) {
	
	var imageLi = document.createElement('li');
	newSubUl.appendChild(imageLi);
	var newImg = document.createElement('img');
	var setSrc = newImg.setAttribute("src", "images/"+ picName +".png");
	imageLi.appendChild(newImg);
}

//function autoPopulate goes here
function autoPopulate() {
	
	for (var n in json) {
		
		var id = Math.floor(Math.random() * 10000001);
		localStorage.setItem (id, JSON.stringify(json[n]));
	}
}


//function makeCtrlLinks
function makeCtrlLinks(key, newLink) {
	
	//edit Entry link goes here	
	var editLink = document.createElement('a');
	editLink.href = "#";
	editLink.key = key;
	var editLinkText = "Edit Entry";
	editLink.addEventListener("click", editEntry);
	editLink.innerHTML = editLinkText;
	newLink.appendChild(editLink);
	
	//delete Entry link goes here	
	var deleteLink = document.createElement('a');
	deleteLink.href = "#";
	deleteLink.key = key;
	deleteLink.style.marginLeft = "20px";
	var deleteLinkText = "Delete Entry";
	deleteLink.addEventListener("click", deleteEntry);
	deleteLink.innerHTML = deleteLinkText;
	newLink.appendChild(deleteLink);
}

//function editEntry goes here
function editEntry() {
	var objValue = localStorage.getItem(this.key);
	var tempObj = JSON.parse(objValue);
	//show form
	controlMenu("off");

	//re-populate the form with the new extraction	
	getElement("mediaType").value = tempObj.dropMenu[1];
	getElement("nameItem").value = tempObj.nameItem[1];	
	getElement("genreItem").value = tempObj.genreItem[1];	
	getElement("lengthItem").value = tempObj.lengthItem[1];	
	getElement("pubDate").value = tempObj.pubDate[1];	
	getElement("purchaseDate").value = tempObj.purchaseDate[1];	
	
	//favorite entry goes here
	if (tempObj.favOpt[1] === "Yes") {
		getElement("favCheck").setAttribute("checked", "checked");
	}

	//radio "yes" -- "no" goes here
	var tempRadios = document.forms[0].securityCopy;	
	console.log(tempRadios);
	for(var i = 0, j = tempRadios.length; i < j; i++) {
		
		if(tempRadios[i].value === "Yes" && tempObj.bkCopy[1] === "Yes") {
			tempRadios[i].setAttribute("checked", "checked");		
		}
		else if(tempRadios[i].value === "No" && tempObj.bkCopy[1] === "No") {
			tempRadios[i].setAttribute("checked", "checked");	
		}
	}
	getElement("slider").value = tempObj.slideRange[1];	
	getElement("notes").value = tempObj.notes[1];
	
	//Remove event listener from the save input button
	submitButton.removeEventListener("click", storeData);
	
	//Change Submit Entry to Edit Entry
	getElement("submitButton").value = "Edit Entry";
	
	//Catch the submit button into a new handel	
	var editSubmitButton = getElement("submitButton");
	
	//Re-assign a new event listener for the new handle with a new function  -->"validate"	
	editSubmitButton.addEventListener("click", formValidate);
	
	//Established relationship between the button and the current key we are editing ...	
	editSubmitButton.key = this.key;

}

function deleteEntry() {
	
	var cAsk = confirm("Should I delete this entry?");
	if (cAsk) {
		localStorage.removeItem(this.key);
		window.location.reload();
		
	}

	else {
		
		alert("Entry was NOT deleted.");	
	}
}

//function formValidate
function formValidate(e) {
	//Input Handles
	var entryName = getElement("nameItem");
	var entryGenre = getElement("genreItem");
	
	//reset error messages
	errMsg.innerHTML = "";
	entryName.style.border = "1px solid black";
	entryGenre.style.border = "1px solid black";
	
	//error array 	
	var errorArray = [];
	
	//entry name validation
	if (entryName.value == "") {
		var entryNError = "Please insert a name for entry.";
		entryName.style.border = "1px solid red";
		errorArray.push(entryNError);
	}

	//entry genre validation
	if (entryGenre.value == "") {
		var entryGError = "Please insert a genre/type for this entry.";
		entryGenre.style.border = "1px solid red";
		errorArray.push(entryGError);
	}
	

	//if errors display them
	if (errorArray.length >= 1) {
		for (var i = 0, j = errorArray.length; i < j; i++) {
			var errorTxt = document.createElement('li');
			errorTxt.innerHTML = errorArray[i];
			errorTxt.style.color = "red";
			errMsg.appendChild(errorTxt);		
		}
	e.preventDefault();
	return false;	
	}
	
	else {
		storeData(this.key);	
	}

}


//function clearLocal
function clearLocal() {
	var lengthLocalSt = localStorage.length;
	if (lengthLocalSt === 0){
		alert("There is no data in the Local Storage.");	
	}	
	else {
		
		localStorage.clear();
		alert("All entries are deleted.");
		window.location	= "additem.html";
		return false;	
	}
}

//global variables
var radioChecked,	
	 favCheck,
	 errMsg = getElement("errorMessages");
	 
//display-link goes here
var displayLink = getElement("displayData");
displayLink.addEventListener("click", getData);

//clear data link goes here
var clearData = getElement("clearInput");
clearData.addEventListener("click", clearLocal);

//submit-button goes here
var submitButton = getElement("submitButton");
submitButton.addEventListener("click", formValidate); 
	

