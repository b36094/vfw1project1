// Name: Andrei Birsan
// Class Name: Visual Frame Works
// Date: 2/13/2013
// Project 2

window.addEventListener("DOMContentLoaded", "function(){
		
	//automatize getting an element
	function getElement(element) {
			
		var selElement = document.getDocumentById(element);				
		
	};
	
	//dropdown-menu goes here
	var dropDownMenu = ["Choose A Group", "Video", "Audio", "Data"];
	
	
	//display-link goes here
	var displayLink = element("displayData");
	displayLink.addEventListener("click", "getData");
}");