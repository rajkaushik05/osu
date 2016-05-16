

(function(){
	if(document.addEventListener){
		window.onload = workshopDislike();
		window.onload = counselorDislike();
		//window.onload = myFunction();


	} else if(document.attachEvent) {
		window.onload = workshopDislike();
		window.onload = counselorDislike();
	};
	
	function workshopDislike(){
		var getEls = document.querySelectorAll("#workshopRadioGroup input[type='radio']");
		for(var i=0; i<getEls.length; i++){
			var thisEls = getEls[i];
			thisEls.addEventListener("change", function(){
				if(thisEls.id == "checkNotLike" && thisEls.checked == true){
					document.getElementById("notLikeComment").style.display = "block";
				} else {
					document.getElementById("notLikeComment").style.display = "none";
				};
			});
		};
	};

	function counselorDislike(){
		var getEls = document.querySelectorAll("#counselorRadioGroup input[type='radio']");
		for(var i=0; i<getEls.length; i++){
			var thisEls = getEls[i];
			thisEls.addEventListener("change", function(){
				if(thisEls.id == "checkNotLikeCounselor" && thisEls.checked == true){
					document.getElementById("notLikeCommentCounselor").style.display = "block";
				} else {
					document.getElementById("notLikeCommentCounselor").style.display = "none";
				};
			});
		};
	};

	/* Register page add editional subject in interest */

	document.getElementById('additionalSubjectRegister').addEventListener("change", addSubject);

	function addSubject(){
		var selected = this.options[this.selectedIndex].value;
		var items  = document.getElementById('defaultSubjectsRegister');
		
		items.innerHTML += "<li>" + selected + "<button class='btn-delete'></button></li>";
		console.log(selected);
	};


	var  listedItem = document.querySelectorAll('#defaultSubjectsRegister li button');
	for(var i=0; i<listedItem.length; i++){
		var thisEls = listedItem[i];
		thisEls.addEventListener('click', deleteItem);
	};

	function deleteItem(){
		alert("hello");
		return false
	}


	
	




})();




