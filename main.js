// Name: Andrei Birsan
// Class Name: Visual Frame Works
// Date: 2/13/2013
// Project 2


		
//getting an element
var getElement = function(element) {
			
	var selElement = document.getElementById(element);				
	return selElement;	
};	
	
	//dropdown-menu goes here
	var optGroupLabel = ["Video", "Audio", "Data"];
	var optVideo = ["Video Dvd", "Video Cd", "Video Tape"];
	var optAudio = ["Audio Cd", "Audio Tape", "Audio Record"];
	var optData = ["Data Dvd", "Data Cd", "Memory Stick", "Other"];
	
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
	
	
	
	/*display-link goes here
	var displayLink = getElement("displayData");
	displayLink.addEventListener("click", "getData");
	
	clear data link goes here
	var clearData = getElement("clearInput");
	clearData.addEventListener("click", "clearLocal");
	
	submit-button goes here
	var submitButton = getElement("submitButton");
	submitButton.addEventListener("click", "storeData"); */
	

